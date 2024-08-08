import React, { useState } from 'react'

function ToggleSwitch() {

    const[isActive,setIsActive]=useState(false)

    const handleCheckBox=()=>{
        setIsActive(!isActive)
    }
  return (
    <>
    <div className='h-screen w-screen font-bold flex flex-col justify-center items-center '>
   <label htmlFor="">Switch On/Off</label><br/>
   <input type="checkbox"  onChange={handleCheckBox} />

   <p>{isActive? "ON" :"Off"}</p>
   </div>
   </>
  )
}

export default ToggleSwitch