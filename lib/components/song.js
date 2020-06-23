const Song = ({title, artist, code, children}) => {
  const url = `https://open.spotify.com/track/${code}`
  const embedUrl = `https://open.spotify.com/embed/track/${code}`
  const artistAndTitle = `${artist} - ${title}`

  return (
    <>
      <h2><a href={url}>{artistAndTitle}</a></h2>
    <div className="narrow">
      <iframe title={artistAndTitle} loading="lazy" className="spotify" src={embedUrl} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    {children}
    </>
  )
}

Song.defaultProps = {
  icon: "music"
}

export default Song
