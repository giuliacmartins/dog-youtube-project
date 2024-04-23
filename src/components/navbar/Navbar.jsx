import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import youtube_logo from '../../assets/youtube_logo.png';
import search_icon from '../../assets/search.png';
import create from '../../assets/create.png';
import bell from '../../assets/bell.png';
import profile from '../../assets/profile_colored.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setSidebar, setSearchQuery }) => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
        navigate(`/search/${searchInput}`);
    };

    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" onClick={() => setSidebar((prev) => !prev)} src={menu_icon} alt="Menu" />
                <Link to="/">
                    <img className="youtube-logo" src={youtube_logo} alt="YouTube" />
                </Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-bar flex-div">
                    <input type="text" placeholder="Search" value={searchInput} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                    <img className="search-icon" src={search_icon} alt="Search" onClick={handleSearch} />
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={create} alt="Create" />
                <img src={bell} alt="Notification" />
                <img className="profile" src={profile} alt="Profile" />
            </div>
        </nav>
    ); 
};

export default Navbar;
