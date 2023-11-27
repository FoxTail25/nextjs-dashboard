import { Metadata } from 'next'
import getFileTest from './file.js'
 
export const metadata: Metadata = {
  title: 'customers',
}

function test() {
  console.log(  getFileTest())
}
test()

export default function Customers() {
  return <>
    <p>Customers page2</p>
    <div>t</div>
  </>
}