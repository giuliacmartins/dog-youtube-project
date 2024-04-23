import React from 'react';
import './Video.css';
import PlayVideo from '../../components/playVideo/PlayVideo';
import Recommendations from '../../components/recommendations/Recommendations'; // Import the Recommendations component
import { useParams } from 'react-router-dom';

const Video = () => {
    const { videoId } = useParams();

    return (
        <div className="video-container">
            <div className="play-video-container">
                <PlayVideo videoId={videoId} />
                <Recommendations />
            </div>
        </div>
    );
}

export default Video;
