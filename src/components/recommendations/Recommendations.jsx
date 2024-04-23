import React, { useEffect, useState } from 'react';
import './Recommendations.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog&maxResults=7`);
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

    const formatDateAgo = (publishedAt) => {
        const now = new Date();
        const publishedDate = new Date(publishedAt);
        const diffTime = Math.abs(now - publishedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 30) {
            return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
        } else if (diffDays < 365) {
            const diffMonths = Math.floor(diffDays / 30);
            return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
        } else {
            const diffYears = Math.floor(diffDays / 365);
            return `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
        }
    };

    return (
        <div className="recommendations">
            {/* <h2 className="recommend-header">Recommended Videos</h2> */}
            {recommendations.map((video) => (
                <Link to={`/video/${video.id.videoId}`}>
                    <div key={video.id.videoId} className="recommendation-item">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <div className="recommendations-video-info">
                            <h4>{video.snippet.title}</h4>
                            <p>{video.snippet.channelTitle}</p>
                            <p>{formatDateAgo(video.snippet.publishedAt)}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recommendations;
