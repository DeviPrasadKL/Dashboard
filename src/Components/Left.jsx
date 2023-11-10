import React from 'react'
import logo from "/assets/novel-favicon.webp";

export default function Left({props}) {
  return (
    <div >
      <div >
        <a href="" className='flex items-center justify-start'>
          <img className={` ${props.open ? "w-12":"w-8"} ${props.open ? "h-12":"h-8"}  mx-2 `} src={logo} alt="" srcset="" htmlFor="logo" />
          <label className='text-xl font-extrabold logoText' style={{display: props.open ? "block" : "none"}} htmlFor="logo">Novel Office</label>
        </a>
      </div>
      <div className='pt-4'>
        <div>
          <span className='text-xs font-semibold'style={{display: props.open ? "block" : "none"}}>HOME</span>
          <ul className='[&>*]:text-slate-500'>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-aperture" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M3.6 15h10.55"></path><path d="M6.551 4.938l3.26 10.034"></path><path d="M17.032 4.636l-8.535 6.201"></path><path d="M20.559 14.51l-8.535 -6.201"></path><path d="M12.257 20.916l3.261 -10.034"></path></svg>
                <span className='px-2'style={{display: props.open ? "block" : "none"}} >Modern</span>
              </div>
            </li>

            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
                <span className='px-2'style={{display: props.open ? "block" : "none"}} >eCommerce</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <span className='text-xs font-semibold'style={{display: props.open ? "block" : "none"}}>Apps</span>
          <ul className='[&>*]:text-slate-500'>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                <span className='px-2'style={{display: props.open ? "block" : "none"}} >eCommerce</span>
              </div>
              <svg style={{display: props.open ? "block" : "none"}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="1rem" height="1rem" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-donut-3" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3v5m4 4h5"></path><path d="M8.929 14.582l-3.429 2.918"></path><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="9"></circle></svg>
                <span className='px-2' style={{display: props.open ? "block" : "none"}}>Blog</span>
              </div>
              <svg style={{display: props.open ? "block" : "none"}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="1rem" height="1rem" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="7 10 12 4 17 10"></polyline><path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path><circle cx="12" cy="15" r="2"></circle></svg>
                <span className='px-2' style={{display: props.open ? "block" : "none"}}>Ecommerce</span>
              </div>
              <svg style={{display: props.open ? "block" : "none"}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="1rem" height="1rem" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                <span className='px-2' style={{display: props.open ? "block" : "none"}}>Chats</span>
              </div>
              <svg style={{display: props.open ? "block" : "none"}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="1rem" height="1rem" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
            </li>
            <li className='flex items-center justify-between h-10 p-2 hover:rounded-md hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="1.3rem" height="1.3rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="10" r="3"></circle><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path></svg>
                <span className='px-2' style={{display: props.open ? "block" : "none"}}>Users</span>
              </div>
              <svg style={{display: props.open ? "block" : "none"}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="1rem" height="1rem" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
