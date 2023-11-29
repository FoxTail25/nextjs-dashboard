import { promise } from 'zod';
import db from '../api/base.js'

class UserController {

  async getUsers() {

    const users = db.query('select * from person');
    return users

  }

}

const userController = new UserController()

export default userController



