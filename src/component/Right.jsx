import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'

function Right() {
    let{todo,setTodo,secondTodo,setSecondTodo}=useContext(ContextApi)

    let movelist=(index)=>{

        let delte=(index)=>{
            let copy=[...secondTodo]
            copy.splice(index,1)
            localStorage.setItem('secondTodo',JSON.stringify(copy))        
        setSecondTodo(copy)
        }

        let prv={
            ...secondTodo[index],
            todo:todo
        }
       
           
            let copy1=[...todo]
            copy1.push(prv)
            localStorage.setItem('todo',JSON.stringify(prv))
            setTodo(copy1)
        delte(index)

    }
  return (
    <div >
    {secondTodo.map((value,index)=>(
        <div key={index} className='flex mt-2'>
        <p className=' border w-[200px]' >{value.input}</p>
        {/* <button className='bg-blue-700 p-2 text-white '>Add</button> */}
        <button className='bg-blue-700 p-2 text-white ms-2' onClick={()=>{movelist(index)}}>Move</button>
        </div>
    ))}
</div>
  )
}

export default Right