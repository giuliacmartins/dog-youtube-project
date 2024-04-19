import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import youtube_logo from '../../assets/youtube_logo.png'
import search_icon from '../../assets/search.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={() => setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="Menu" />
            <Link to="/">
                <img className='youtube-logo' src={youtube_logo} alt="YouTube" />
            </Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search-bar flex-div">
                <input type="text" placeholder='Search' />
                <img className='search-icon' src={search_icon} alt="Search" />
            </div>
        </div>

        <div className="nav-right flex-div">
            {/* deciding what should be on the right side of the nav*/}
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
        </div>
    </nav>
  )
}

export default Navbar 
