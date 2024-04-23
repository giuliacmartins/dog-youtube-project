import React from 'react';
import './Video.css';
import PlayVideo from '../../components/playvideo/PlayVideo';
import Recommendations from '../../components/recommendations/Recommendations';
import { useParams } from 'react-router-dom';

const Video = () => {
    const { videoId } = useParams(); // get video id from url parameters

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