const Image = ({ src }) => {
  const webp = require("../assets/images/" + src + "?webp")
  const lqip = require("../assets/images/" + src + "?lqip")
  const original = require("../assets/images/" + src)

  return (
    <>
      <picture>
        <source srcSet={webp} type="image/webp"/>
        <source srcSet={original}/>
        <img loading="lazy" src={lqip} width="540" height="648" />
      </picture>
    </>
  )
}

export default Image
