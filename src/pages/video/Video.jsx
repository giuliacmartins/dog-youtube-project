import React from 'react';
import './Video.css';
import PlayVideo from '../../components/playVideo/PlayVideo';
import { useParams } from 'react-router-dom';

const Video = () => {
    const { videoId } = useParams();

    return (
        <div className="play-video-container">
            <PlayVideo videoId={videoId} />
        </div>
    );
}

export default Video;