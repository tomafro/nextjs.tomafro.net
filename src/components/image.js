const Image = ({ src, title, alt, maxWidth = 720, maxHeight = 720}) => {
  console.log(maxWidth, maxHeight)
  const full = require("../assets/images/" + src + "?resize")
  const main = require("../assets/images/" + src + "?resize&sizes[]=360&sizes[]=720&sizes[]=1440&sizes[]=2880")
  const webp = require("../assets/images/" + src + "?webp")
  const fallback = require("../assets/images/" + src + "?lqip")

  var width = full.width
  var height = full.height

  const ratio = full.width / full.height
  const maxRatio = maxWidth / maxHeight

  if (ratio < maxRatio && height > maxHeight) {
    height = maxHeight
    width = ratio * maxHeight
  }
  else if (width > maxWidth) {
    width = maxWidth
    height = maxWidth / ratio
  }

  return (
    <>
      <picture>
        {/* <source srcSet={webp} type="image/webp"/> */}
        <source srcSet={main.srcSet}/>
        <img loading="lazy" title={title} alt={alt} width={width} height={height} style={{backgroundImage: `url(${fallback})`, backgroundSize: "cover"}}  />
      </picture>
    </>
  )
}

export default Image
