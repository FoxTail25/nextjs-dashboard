import { Metadata } from 'next'
import userController from '../lib/data.js';

export const metadata = {
  title: 'Dashboard',
}

export default async function Page() {

  const u = await userController.getUser().then(res => res.rows);

  return <div>

    <p>Dashboard Page</p>
    <p>{JSON.stringify(u)}</p>
  </div>
}