import { useEffect, useState } from "react";

function Timer(){

    const[time,setTime]=useState(60)

    useEffect(()=>{
        if(time>0){
           const timer=setTimeout(()=>setTime(time-1),1000)
           return()=>clearTimeout(timer)
        }
        

    },[time])

    return(
        <>
        <h1>Timer</h1>
        <p>Left timer:{time}</p>
        </>
    );

}

export default Timer