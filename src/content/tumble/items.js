import { SpotifySong, Lyrics } from "../../shared/tumble"
import items from "../../../content/tumble.json"

export default [
  (require("../../../content/tumble/first").content),
  (<SpotifySong key="two" date="2020-01-04" artist="IDLES" title="Cry To Me" code="2LT86FGKhVH7cAny5LbL13"/>),
  (<SpotifySong key="three" date="2019-11-06" artist="Baxter Dury" title="Miami" code="0uNSWaTELbjGps5dkwW83i" />),
  (
    <SpotifySong key="four" date="2019-09-18" artist="King Missile" title="Jesus was Way Cool" code="0Tos24ah4Q1OSe1qBH9TBW">
      <Lyrics>
        He turned water into wine<br/>
        And if he wanted to<br/>
        He could have turned wheat into marijuana<br/>
        Or sugar into cocaine<br/>
        Or vitamin pills into amphetamines
      </Lyrics>
    </SpotifySong>
  ),
]

console.log(require("../../../content/tumble/first").content)
console.log(items)
