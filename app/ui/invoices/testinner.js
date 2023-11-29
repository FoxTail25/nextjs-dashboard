'use client'
import { useRef } from "react"

export default function TestInner({ addUser }) {

  const name = useRef(null)
  const surname = useRef(null)

  async function handleClick() {
    let obj = {
      name: name.current.value,
      surname: surname.current.value,
    }

    name.current.value = '';
    surname.current.value = '';
    let answer = await addUser(obj)
    console.log('new user', answer)
  }

  return <>
    <input ref={name}></input>
    <input ref={surname}></input>
    <button onClick={handleClick}>addUser</button>
  </>
}