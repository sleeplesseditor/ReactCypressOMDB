import React from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import './MoviesPage.scss';

const MoviesPage = () => {

    return (
        <div className="movies-page">
            <MoviesList />
        </div>
    )
}

export default MoviesPage;