export const SpotifySong = ({title, artist, code, children}) => {
  const url = `https://open.spotify.com/track/${code}`
  const embedUrl = `https://open.spotify.com/embed/track/${code}`

  return (
    <>
    <h2><a href={url}>{artist} - {title}</a></h2>
    <div className="narrow">
      <iframe className="spotify" src={embedUrl} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    {children}
    </>
  )
}

export const Lyrics = ({children}) => {
  return (
    <div class="lyrics">
      {children}
    </div>
  )
}
