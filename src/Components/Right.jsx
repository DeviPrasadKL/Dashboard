import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Content';


export default function Right( {props} ) {
  return (
    <div className='w-full'>
      <NavBar props={props}/>
      <Content/>
    </div>
  )
}
