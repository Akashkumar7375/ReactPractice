import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'

function Left() {
    let{todo,setTodo,secondTodo,setSecondTodo}=useContext(ContextApi)
    let todoRemove=(index)=>{

        let todo1=[...todo]
        todo1.splice(index,1)
        localStorage.setItem('todo',JSON.stringify(todo1))
        setTodo(todo1)
    }
    let secondTodoAdd=(index)=>{
        let copysecondTodo={
            ...todo[index],
            secondTodo:secondTodo
        }

        let move=[...secondTodo]
        move.push(copysecondTodo)
        localStorage.setItem('secondTodo',JSON.stringify(move))        
        setSecondTodo(move)
        todoRemove(index)
    }
  return (
    <div >
    {todo.map((value,index)=>(
        <div key={index} className='flex mt-2'>
        <p className=' border w-[200px]' >{value.input}</p>
        <button className='bg-blue-700 p-2 text-white 'onClick={(e)=>{secondTodoAdd(index)}}>Add</button>
        <button className='bg-blue-700 p-2 text-white ms-2' onClick={(e)=>{todoRemove(index)}}>Remove</button>
        </div>
    ))}
</div>
  )
}

export default Left