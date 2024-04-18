import React from 'react'
import './Video.css'
import PlayVideo from '../../components/playVideo/PlayVideo'

const Video = ({ selectedVideo }) => {
  return (
    <div className="play-video-container">
        <PlayVideo video={selectedVideo} />
    </div>
  )
}

export default Video 