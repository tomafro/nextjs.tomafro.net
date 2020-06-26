const sharp = require('sharp')
const lqip = require('lqip')
const fs = require('fs')
const hasha = require('hasha')
const glob = require("glob")


async function resizePng(path, width, destination) {
  await sharp(path).resize({ width: width }).png({ palette: true }).toFile(destination)
}

async function resizeWebP(path, width, destination) {
  await sharp(path).resize({ width: width }).webp({ smartSubsample: true, reductionEffort: 6 }).toFile(destination)
}

async function resizeJpeg(path, width, destination) {
  await sharp(path).resize({ width: width }).jpeg().toFile(destination)
}

function createFormatVariants(path, basePath, widths, f, suffix, type) {
  return widths.map(width => {
    const destination = `${basePath}/${width}.${suffix}`
    f(path, width, `public/${destination}`)
    return { type: type, width: width, path: destination }
  })
}

const createAllVariants = async function (imagePath) {
  const hash = hasha.fromFileSync(imagePath, { algorithm: 'md5' })
  console.log(hash)

  const inputImage = sharp(imagePath)
  const inputImageMetadata = await inputImage.metadata()
  const rx = /(?<name>[^\/]+)\.(?<ext>jpg|png)/
  const pathInfo = rx.exec(imagePath).groups

  const destinationBase = `images/${hash}`

  fs.mkdirSync(`public/${destinationBase}`, { recursive: true })
  fs.mkdirSync('data/images', { recursive: true })

  console.log(inputImageMetadata)

  const image = {
    ...inputImageMetadata,
    lqip: await lqip.base64(imagePath)
  }

  const widths = [1.0, 0.6, 0.36, 0.22, 0.13].map(ratio => Math.round(image.width * ratio))

  var variants = createFormatVariants(imagePath, destinationBase, widths, resizeWebP, "webp", "image/webp")

  if (image.format == "png") {
    variants = variants.concat(createFormatVariants(imagePath, destinationBase, widths, resizePng, "png", "image/png"))
  }
  else if (image.format == "jpeg") {
    variants = variants.concat(createFormatVariants(imagePath, destinationBase, widths, resizeJpeg, "jpg", "image/jpeg"))
  }

  const variantJson = variants.map(({ type, width, path }) => {
    return `{ type: "${type}", width: ${width}, image: "/${path}"}`
  })

  console.log(variantJson)

  fs.writeFileSync(`data/images/${pathInfo.name}.js`,
    `export default {
    width: ${image.width},
    height: ${image.height},
    lqip: "${image.lqip}",
    variants: [
      ${variantJson.join(",\n    ")}
    ]
  }
`)
}

images = glob.sync('assets/images/*.+(png|jpg)', {})

for (let index = 0; index < images.length; index++) {
  createAllVariants(images[index])
}
