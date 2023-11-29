import { Metadata } from 'next'
import userController from '../lib/data.js';

export const metadata = {
  title: 'Dashboard',
}

export default async function Page() {


  let u = await userController.getUsers()
    .then(res => res.rows)



  return <div>

    {
      u.map((e) => <div style={{ marginBottom: "15px" }} key={e.id}>
        <p>id {e.id}</p>
        <p>Имя {e.name}</p>
        <p>Фамилия {e.surname}</p>
      </div>)
    }

  </div>


}