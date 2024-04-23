import React from 'react'
import './Sidebar.css'
import home_icon from '../../assets/home.png'
import subscriptions from '../../assets/subscriptions.png'
import your_channel from '../../assets/your_channel.png'
import history from '../../assets/history.png'
import playlist from '../../assets/playlist.png'
import your_videos from '../../assets/your_videos.png'
import watch_later from '../../assets/watch_later.png'
import liked_videos from '../../assets/like_videos.png'
import profile from '../../assets/profile_colored.png'
import { Link } from 'react-router-dom';

const Sidebar = ({sidebar}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut">
                <Link to='/'>
                    <div className="side-link">
                        <img src={home_icon} alt="Home" />
                        <p>Home</p>
                    </div>
                </Link>
                <div className="side-link">
                    <img src={subscriptions} alt="Subscriptions" />
                    <p>Subscriptions</p>
                </div>
                <hr/>
            </div>
            <div className="you">
                <h3>You</h3>
                <div className="side-link">
                    <img src={your_channel} alt="Your channel" />
                    <p>Your channel</p>
                </div>
                <div className="side-link">
                    <img src={history} alt="History" />
                    <p>History</p>
                </div>
                <div className="side-link">
                    <img src={playlist} alt="Playlists" />
                    <p>Playlists</p>
                </div>
                <div className="side-link">
                    <img src={your_videos} alt="Your videos" />
                    <p>Your videos</p>
                </div>
                <div className="side-link">
                    <img src={watch_later} alt="Watch Later" />
                    <p>Watch later</p>
                </div>
                <div className="side-link">
                    <img src={liked_videos} alt="Liked videos" />
                    <p>Liked videos</p>
                </div>
                <hr/>
            </div>
            <div className="subscribed">
                <h3>Subscriptions</h3>
                <div className="side-link">
                    <img src={profile} alt="Profile" />
                    <p>Markiplier</p>
                </div>
                <div className="side-link">
                    <img src={profile} alt="Profile" />
                    <p>isaacwhy</p>
                </div>
                <div className="side-link">
                    <img src={profile} alt="Profile" />
                    <p>Smosh Games</p>
                </div>
                <div className="side-link">
                    <img src={profile} alt="Profile" />
                    <p>Jacksepticeye</p>
                </div>
                <div className="side-link">
                    <img src={profile} alt="Profile" />
                    <p>Smosh</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar 