const Image = ({ src }) => {
  const preload = require("../assets/images/" + src + "?trace").trace

  return (
    <>
      <picture>
        <img src={preload} />
      </picture>
    </>
  )
}

export default Image
