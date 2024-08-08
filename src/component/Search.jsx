import React, { useState } from 'react'

function Search() {

    let items=["item 1",'item 2','another 1','Akash','kamal']

const[search,setSearch]=useState('')
    let filertsearch=items.filter((items)=>{
        return items.toLocaleUpperCase().includes(search.toLocaleUpperCase())
    })
  return (
    <div>
        <input type="text"  placeholder='Search....'
         onChange={(e)=>{setSearch(e.target.value)}}/>
        <ul>
            {filertsearch.map((value,index)=>(
                <li key={index}>{value}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default Search