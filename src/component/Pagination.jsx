import React, { useEffect, useReducer } from 'react'

let itemsPerPage=5
const paginationReducer=(state,action)=>{
    switch(action.type){

        case "SET_CURRENT_PAGE":
        return{
            ...state,currentPage:action.payload
        }
        case "SET_TOTAL_ITEMS":
            return{
            ...state,totalItems:action.payload
        }
    
      default:
        return state
      
    }
}                                                   

function Pagination() {

   
    // console.log(data);

   


const [paginationState,dispatch]=useReducer(paginationReducer,{
    currentPage:1,
    totalItems:0
})

const data= Array.from({length:25},(_,index)=>`Item${index+1}`)

    useEffect(()=>{
        dispatch({type:"SET_TOTAL_ITEMS",payload:data.length})
    }
    ,[])

    const startindex=(paginationState.currentPage - 1)*itemsPerPage;
    const lastindex=startindex + itemsPerPage
    const displayedItem=data.slice(startindex,lastindex)


const handlePageClick=(newPage)=>{
    dispatch({type:'SET_CURRENT_PAGE',payload:newPage})
}

    
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1>Pagination Example</h1>
        {paginationState.currentPage}
        <ul>
        {
            displayedItem.map((items,index)=>(
                <li key={index}>{items}</li>
            ))
        }

        </ul>
        <div>
        <button className='bg-red-500 p-2 rounded-sm' onClick={()=>{handlePageClick(paginationState.currentPage-1)}} disabled={paginationState.currentPage===1}>Prv</button>
        <button className='bg-blue-500 p-2 rounded-sm ms-2' onClick={()=>{handlePageClick(paginationState.currentPage+1)}} disabled={lastindex>=data.length}>Next</button>
        </div>
        
    </div>
  )
}

export default Pagination