import React from 'react'
import user from "/assets/user.jpg";
import flag from "/assets/flag.png";

export default function NavBar({props}) {
    console.log(props);
    return (
        <nav className='flex items-center justify-center h-16 '>
            <div className='flex items-center justify-between w-full h-full px-8 h-'>
                <div>
                    <ul className='flex items-center justify-center space-x-6 navigation1'>
                        <li onClick={()=>{props.setOpen(!props.open)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
                        </li>
                        <li className='flex items-center justify-center' style={{display: props.open ? "flex" : "none"}}>
                            <span>Apps</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </li>
                        <li style={{display: props.open ? "block" : "none"}}>Chats</li>
                        <li style={{display: props.open ? "block" : "none"}}>Calender</li>
                        <li style={{display: props.open ? "block" : "none"}}>Email</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <ul className='flex items-center justify-around space-x-6 navigation2'>
                        <li><img className='w-6 h-6 rounded-full' src={flag} alt="" /></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="21" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg></li>
                        <li><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge css-33zpdj" tabindex="0" type="button" aria-label="show 11 new notifications" aria-controls="msgs-menu" aria-haspopup="true"><span class="MuiBadge-root css-1rzb3uu"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="21" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path><path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path><path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path></svg><span class="MuiBadge-badge MuiBadge-dot MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary css-1fbpows"></span></span><span class="MuiTouchRipple-root css-w0pj6f"></span></button></li>
                        <li><img className='rounded-full w-9 h-9' src={user} alt="" srcset="" /></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
