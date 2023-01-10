import React from 'react';
import NavBar from '../../../components/Users/NavBar/NavBar';
import MoviesBrowser from '../MoviesBrowser/MoviesBrowser';

function Browse(props) {
    
    return (
        <div>
            <NavBar />
            <MoviesBrowser/>
        </div>
    );
}

export default Browse;