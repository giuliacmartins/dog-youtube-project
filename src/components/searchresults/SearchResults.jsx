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
import { Link } from 'react-router-dom';

const SearchResults = ({ searchQuery }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                if (!searchQuery) return; 
                const API_KEY = 'AIzaSyBGhHGF2W7W22DYdOjImeOM25NjBRGjCFA';
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog+${searchQuery}&maxResults=21`);
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
        <div className="search-video-results">
            {searchResults.map((result) => (
                <div key={result.id.videoId} className="search-video-result">
                    <Link to={`/search/${result.id.videoId}`}>
                        <img
                            src={result.snippet.thumbnails.medium.url}
                            alt={result.snippet.title}
                        />
                    </Link>
                    <div className="search-video-info">
                        <h3>{result.snippet.title}</h3>
                        <h4>{result.snippet.channelTitle}</h4>
                        <p>{result.snippet.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
