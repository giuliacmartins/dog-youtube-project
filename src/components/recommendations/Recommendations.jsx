import React, { useEffect, useState } from 'react';
import './Recommendations.css';
import { API_KEY } from '../../data';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog&maxResults=5`);
                if (response.ok) {
                    const data = await response.json();
                    setRecommendations(data.items);
                } else {
                    console.error('Failed to fetch recommendations');
                }
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div className="recommendations">
            <h2 className="recommend-header">Recommended Videos</h2>
            {recommendations.map((video) => (
                <div key={video.id.videoId} className="recommendation-item">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <div className="recommendations-video-info">
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.channelTitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
