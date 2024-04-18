import React from 'react'
import './PlayVideo.css'

const PlayVideo = ({ video }) => {
    if (!video) {
        return <div>No video selected</div>;
    }
  return (
    <div className="video-player">
        <iframe
                title="video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
        ></iframe>
        <div className="video-info">
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.channelTitle}</p>
        </div>
    </div>
  )
}

export default PlayVideo 