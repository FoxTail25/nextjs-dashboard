'use client'

import { useEffect } from "react"
import { useRef } from "react"

export default function TestInner({serverAnswer, text}) { 

    
    
    
    const testInner=useRef(null)
    useEffect(()=> {
        testInner.current.innerHTML = text;
        return ()=>{}
    },[text])

    

    console.log('it`s client', serverAnswer)
    
    return <>
    <div ref={testInner}></div>
    {
      serverAnswer.map((e) => <div style={{ marginBottom: "15px" }} key={e.id}>
        <p>id {e.id}</p>
        <p>Имя {e.name}</p>
        <p>Фамилия {e.surname}</p>
      </div>)
    }
    </>
}