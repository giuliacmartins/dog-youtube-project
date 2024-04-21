import React from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import SearchResults from '../../components/searchresults/SearchResults';

const Home = ({ sidebar, searchQuery }) => {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                {searchQuery ? <SearchResults searchQuery={searchQuery} /> : <Feed />}
            </div>
        </>
    );
};

export default Home;
