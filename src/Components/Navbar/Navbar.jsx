import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import youtube_logo from '../../assets/youtube_logo.png'
import search_icon from '../../assets/search.png'
const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' src={menu_icon} alt="Menu" />
            <img className='youtube-logo' src={youtube_logo} alt="YouTube" />
        </div>

        <div className="nav-middle flex-div">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="Search" />
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