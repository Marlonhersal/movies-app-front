import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MoviesBrowser from '../Movies/MoviesBrowser';

function Browse(props) {
    return (
        <div>
            <NavBar/>
            <MoviesBrowser/>
        </div>
    );
}

export default Browse;