import { Project, Code } from "components"

export default (
  <Project title="htmlq" url="https://github.com/tomafro/htmlq">
    A very quick rust command line tool to query html, in a similar way to <code>jq</code>.
    <Code style="terminal">
    $ http https://tomafro.net | htmlq "li:nth-child(2) i.fab"
    </Code>
  </Project>
)
