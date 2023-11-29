// 'use server'

import { Metadata } from 'next';
import TestInner from '../../ui/invoices/testinner.js'
import userController from '@/app/lib/userController.js';


export const metadata = {
  title: 'invoices',
}



export default async function Invoices() {
  
  async function addUser(obj) {
    'use server'
    return await userController.createtUsers(obj)
  }

  return <>
    <p>Invoices Page3</p>
    <TestInner addUser={addUser}/>
  </>

}