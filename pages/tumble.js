import content from "../content/tumble/example"


// const map = website.components.reduce((previous, current) => {
//   previous[current.path] = dynamic(() => import(`../src/components/${current.path}`), { ssr: true });
//   return previous;
// }, {});

import dynamic from 'next/dynamic';

//import Koala from "../content/tumble/example"
const Koala = dynamic(() => import("../content/tumble/example"))
console.log(Koala)

function Tumble() {
  return (
    <div>
    <Koala/>
    </div>
  )
}

export default Tumble
