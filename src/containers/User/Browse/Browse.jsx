import React from 'react';
import NavBar from '../../../components/Users/NavBar/NavBar';
import MoviesBrowser from '../Movies/MoviesBrowser';

function Browse(props) {
    console.log(props)
    return (
        <div>
            <NavBar />
            <MoviesBrowser/>
        </div>
    );
}

export default Browse;