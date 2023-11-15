import React from 'react'
import user from "/assets/user.jpg";
import flag from "/assets/flag.png";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

export default function NavBar({ props }) {
    return (
        <nav className='flex items-center justify-center h-16 '>
            <div className='flex items-center justify-between w-full h-full px-8 h-'>
                <div>
                    <ul className='flex items-center justify-center space-x-6 navigation1'>
                        <li onClick={() => { props.setOpen(!props.open) }}>
                            <MenuIcon color="action" />
                        </li>
                        <li>
                            <SearchIcon color="action" />
                        </li>
                        <li className='flex items-center justify-center' style={{ display: props.open ? "flex" : "none" }}>
                            <Link to="/2" className='flex items-center justify-center'>
                                <span>Apps</span>
                                <KeyboardArrowDownIcon color="action" />
                            </Link>
                        </li>
                        <li style={{ display: props.open ? "block" : "none" }}>Chats</li>
                        <li style={{ display: props.open ? "block" : "none" }}>Calender</li>
                        <li style={{ display: props.open ? "block" : "none" }}>Email</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <ul className='flex items-center justify-around space-x-6 navigation2'>
                        <li><img className='w-6 h-6 rounded-full' src={flag} alt="" /></li>
                        <li><ShoppingCartOutlinedIcon color='action'/></li>
                        <li><NotificationsActiveOutlinedIcon color='action'/></li>
                        <li><img className='rounded-full w-9 h-9' src={user} alt="" srcSet="" /></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
