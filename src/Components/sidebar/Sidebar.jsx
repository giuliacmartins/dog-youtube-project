import React from 'react'
import './Sidebar.css'
import home_icon from '../../assets/home.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="shortcut">
            <div className="side-links">
                <img src={home_icon} alt="Home" /><p>Home</p>
                {/* might add more to the sidebar */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar 