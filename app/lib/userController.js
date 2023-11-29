// import { promise } from 'zod';
import db from '../api/base.js'
import { unstable_noStore as noStore } from 'next/cache';

class UserController {

  async createtUsers(user) {
    const { name, surname } = user;
    let answer;
    await db.query('insert into person (name, surname) values($1, $2) RETURNING *', [name, surname]).then(res => answer = res.rows[0]);
    return answer
  }

  /////////////////////////////////////////////////////////////

  async getUsers() {
    noStore()
    let answer;
    await db.query('select * from person').then(res => {
      return answer = res.rows
    });
    return answer
  }
  
  ////////////////////////////////////////////////////////////
  
  async delUser(id) {
    let answer;
    await db.query('delete from person where id = $1 RETURNING *', [id]).then(res => {
      return answer = res.rows[0]
    });
    return answer
  }


}

const userController = new UserController()

export default userController



