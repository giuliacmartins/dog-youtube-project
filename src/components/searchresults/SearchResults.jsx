// import React, { useEffect, useState } from 'react';
// import './SearchResults.css';
// import { useParams } from 'react-router-dom';

// const SearchResults = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const { searchQuery } = useParams();

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const API_KEY = 'AIzaSyDhkid7dkEXOUccLhQfeVpxBHMUXp9Vtsc';
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchQuery}&maxResults=21`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setSearchResults(data.items);
//         } else {
//           console.error('Failed to fetch search results');
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };

//     if (searchQuery) {
//       fetchSearchResults();
//     }
//   }, [searchQuery]);

//   return (
//     <div className="search-results">
//       {searchResults.map((result) => (
//         <div key={result.id.videoId} className="search-result">
//           {/* <Link to={`/video/${result.id.videoId}`}> */}
//             <div className="video-info">
//               <img
//                 src={result.snippet.thumbnails.medium.url}
//                 alt={result.snippet.title}
//               />
//               <div>
//                 <h3>{result.snippet.title}</h3>
//                 <p>{result.snippet.description}</p>
//               </div>
//             </div>
//           {/* </Link> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResults;

import React, { useEffect, useState } from 'react';
import './SearchResults.css';

const SearchResults = ({ searchQuery }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
        try {
            // if (!searchQuery) return; 
            const API_KEY = 'AIzaSyDhkid7dkEXOUccLhQfeVpxBHMUXp9Vtsc';
            const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchQuery}&maxResults=21`
            );
            if (response.ok) {
            const data = await response.json();
            setSearchResults(data.items);
            } else {
            console.error('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
        };

        fetchSearchResults();
    }, [searchQuery]);

    return (
        <div className="search-results">
        {searchResults.map((result) => (
            <div key={result.id.videoId} className="search-result">
            <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img
                src={result.snippet.thumbnails.medium.url}
                alt={result.snippet.title}
                />
            </a>
            <div className="video-info">
                <h3>{result.snippet.title}</h3>
                <p>{result.snippet.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
};

export default SearchResults;