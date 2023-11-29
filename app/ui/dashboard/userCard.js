"use client"
import { useState } from "react";

export default function UserCard({users, delUser}) {

    let [user, setuser] = useState(users)

    async function del(e) {
        
        const id = e.target.dataset.num;
        setuser(user.filter(e => e.id != id))
        let deletedUser = await delUser(id)
        console.log(deletedUser, "удалён")
    }

    return <>
        {
            user.map((e) => <div style={{ marginBottom: "15px" }} key={e.id}>
                <p>Имя {e.name}</p>
                <p>Фамилия {e.surname}</p>
                <button data-num={e.id} onClick={(event) => del(event)}>DelUser</button>
            </div>)
        }
    </>
}