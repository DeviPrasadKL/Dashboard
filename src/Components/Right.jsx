import React from 'react';
import NavBar from '../Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Content from './Content';
import Content2 from './Content2';


export default function Right({ props }) {
  return (
    <div className='w-full'>
      <NavBar props={props} />
        <Routes>
          <Route exact path='/' element={<Content />}/>
          <Route exact path='/2' element={<Content2 />}/>
        </Routes>
    </div>
  )
}
