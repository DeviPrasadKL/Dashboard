import React, { useEffect, useState } from 'react'
import Left from './Left'
import Right from './Right'

export default function Dashboard() {
  const[open, setOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  let props = {open, setOpen}
  const breakpoint = 1000;

  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if(width < breakpoint && open){
      setOpen(false);
    } else if (width > breakpoint){
      setOpen(true);
    }
    console.log(width);
  },[width])

  return (
    <div className='flex w-screen h-screen'>
      <div className='h-auto p-4 border-r-4 w-min'>
        <Left props={props}/>
      </div>
      <Right props={props}/>
    </div>
  )
}
