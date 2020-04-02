const Image = ({ src, maxWidth = 720, maxHeight = 720}) => {
  const full = require("../assets/images/" + src + "?resize")
  const main = require("../assets/images/" + src + "?resize&sizes[]=360&sizes[]=720&sizes[]=1440&sizes[]=2880")
  const webp = require("../assets/images/" + src + "?webp")
  const lqip = require("../assets/images/" + src + "?lqip")

  const width = (full.width / full.height) * maxHeight
  const height = (full.height / full.width) * maxWidth

  return (
    <>
      <picture>
        <source srcSet={webp} type="image/webp"/>
        <source srcSet={main.srcSet}/>
        <img loading="lazy" style={{backgroundImage: `url(${lqip})`, backgroundSize: "cover"}} width={width} height={height} />
      </picture>
    </>
  )
}

export default Image
