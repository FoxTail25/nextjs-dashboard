
import { Metadata } from 'next';
import TestInner from '../../ui/invoices/testinner.js'
import userController from '@/app/lib/data.js';


export const metadata = {
  title: 'invoices',
}


export default async function Invoices() {

  let text = `<div style="text-align:center">
    <p style="color:red;">Hello!!!</p>
    <p><strong>Helen :)</strong></p>
    </div>`
  
  let u = await userController.getUsers()
    .then(res => res.rows)
  
  console.log('where i??', u)

    return <>
    <p>Invoices Page3</p>
    <TestInner serverAnswer={u} text={text}/>
    </>

}