import React, { useContext, useEffect, useState } from 'react'
import Left from './Left'
import Right from './Right'
import { ContextApi } from '../ContextApi/ContextApi'

function Todo() {
    const[input ,setInput]=useState('')
   
    let{todo,setTodo,secondTodo,setSecondTodo}=useContext(ContextApi)

   let  handleform=(e)=>{
       e.preventDefault()
       let fdata={input}
   
       let copytodo=[...todo]
       copytodo.push(fdata)
       localStorage.setItem('todo',JSON.stringify(copytodo))
       setTodo(copytodo)
   }

   useEffect(()=>{
    let todos=JSON.parse(localStorage.getItem('todo'))
    let secoundtodo=JSON.parse(localStorage.getItem('secondTodo'))
    if(todos){
        setTodo(todos)
    }
    if(secoundtodo){
        setSecondTodo(secoundtodo)
    }
   },[])
  return (
    <>
    <div className='m-5'>
    <form onSubmit={handleform}>
    <input type='text' className=' border-2 border-blue-300'
    value={input}
     onChange={(e)=>{setInput(e.target.value)}}/>
    <button className='bg-green-600 rounded-md p-1 ms-2'>Submit</button>
    </form>
    </div>
    <div className='flex justify-around'>
    <Left  />
    <Right />
    </div>
    </>
  )
}

export default Todo