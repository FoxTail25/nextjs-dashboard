import { Metadata } from 'next';
import userController from '../lib/userController.js';
import UserCard from '../ui/dashboard/userCard.js'


export const metadata = {
  title: 'Dashboard',
}

export default async function Page() {

  let users = await userController.getUsers()



  async function delUser(id) {
    'use server'
    return await userController.delUser(id)
  }

  const props = {
    users,
    delUser
  }

  return <div>
      <UserCard {...props} />
  </div>

}