import React from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import SearchResults from '../../components/searchresults/SearchResults';
// import { useParams } from 'react-router-dom';

const Home = ({ sidebar, searchQuery }) => {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                {/* <Feed /> */}
                {searchQuery ? <SearchResults searchQuery={searchQuery} /> : <Feed />}
            </div>
        </>
    );
};

export default Home;
