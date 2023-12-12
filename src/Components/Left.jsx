import React from 'react'
import logo from "/assets/novel-favicon.webp";
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ListItem, Stack } from '@mui/material';


export default function Left({ props }) {
  return (
    <div >
      <div >
        <Link to="/" className='flex items-center justify-start'>
          <img className={` ${props.open ? "w-12" : "w-8"} ${props.open ? "h-12" : "h-8"}  mx-2 `} src={logo} alt="" srcSet="" htmlFor="logo" />
          <label className='text-xl font-extrabold logoText' style={{ display: props.open ? "block" : "none" }} htmlFor="logo">Novel Office</label>
        </Link>
      </div>
      <div className='pt-4'>
        <div>
          <span className='text-xs font-semibold' style={{ display: props.open ? "block" : "none" }}>HOME</span>
          <ul className='[&>*]:text-slate-500'>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <CameraOutlinedIcon />
                <span className='px-2' style={{ display: props.open ? "block" : "none" }} >Modern</span>
              </div>
            </li>

            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <ShoppingCartOutlinedIcon />
                <span className='px-2' style={{ display: props.open ? "block" : "none" }} >eCommerce</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <span className='text-xs font-semibold' style={{ display: props.open ? "block" : "none" }}>Apps</span>
          <ul className='[&>*]:text-slate-500'>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-package" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                <span className='px-2' style={{ display: props.open ? "block" : "none" }} >eCommerce</span>
              </div>
              <KeyboardArrowDownIcon/>
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-donut-3" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3v5m4 4h5"></path><path d="M8.929 14.582l-3.429 2.918"></path><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="9"></circle></svg>
                <span className='px-2' style={{ display: props.open ? "block" : "none" }}>Blog</span>
              </div>
              <KeyboardArrowDownIcon color="action" />
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <ShoppingBasketOutlinedIcon />
                <span className='px-2' style={{ display: props.open ? "block" : "none" }}>Ecommerce</span>
              </div>
              <KeyboardArrowDownIcon color="action" />
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <SpeakerNotesOutlinedIcon />
                <span className='px-2' style={{ display: props.open ? "block" : "none" }}>Chats</span>
              </div>
              <KeyboardArrowDownIcon color="action" />
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <AccountCircleOutlinedIcon />
                <span className='px-2' style={{ display: props.open ? "block" : "none" }}>Users</span>
              </div>
              <KeyboardArrowDownIcon color="action" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
