const buildSrcSet = (variants) => {
  return variants.map(v => `${v.image} ${v.width}w`).join(", ")
}

export const Picture = ({ image, title, alt, maxWidth = 720, maxHeight = 720 }) => {
  console.log(image)
  const byType = image.variants.reduce(function (r, a) {
    r[a.type] = r[a.type] || [];
    r[a.type].push(a);
    return r;
  }, Object.create(null))

  const imageTypes = Object.keys(byType)

  const fallback = (byType["image/png"] || byType["image/jpg"])[0].image

  var width = image.width
  var height = image.height

  const ratio = image.width / image.height
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
    <picture key={fallback}>
      {imageTypes.map(type => <source type={type} srcSet={buildSrcSet(byType[type])} />)}
      <img src={fallback} width={width} height={height} title={title} alt={alt} loading="lazy" style={{ backgroundImage: `url(${image.lqip})`, backgroundSize: "cover" }} />
    </picture>
  )
}
