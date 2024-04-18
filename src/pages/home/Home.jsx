import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Video from '../../pages/video/Video';

const Home = ({ sidebar }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSelectVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                {selectedVideo ? (
                    <Video selectedVideo={selectedVideo} />
                ) : (
                    <Feed onSelectVideo={handleSelectVideo} />
                )}
            </div>
        </>
    );
}

export default Home;