import { useState } from "react"
import Timer from "./component/Timer"
import Todo from "./component/Todo"
import ToggleSwitch from "./component/ToggleSwitch"
import { ContextApi } from "./ContextApi/ContextApi"
import Search from "./component/Search"
import Pagination from "./component/Pagination"


function App() {
  const[todo,setTodo]=useState([])
  const[secondTodo,setSecondTodo]=useState([])
  return (
    <ContextApi.Provider value={{todo,setTodo,secondTodo,setSecondTodo}}>
    
   {/* <ToggleSwitch/> */}
   {/* <Timer/> */}
   {/* <Todo/> */}
   {/* <Search/> */}
<Pagination/>
   
   </ContextApi.Provider>
    
  )
}

export default App
