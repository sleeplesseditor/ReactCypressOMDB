import React, { useEffect, useState } from 'react';
import MovieItems from '../MoviesItem/MovieItems';
import Modal from '../Modal/Modal';
import './MoviesList.scss';
import axios from 'axios';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
      const movieOptions = [
        'tt0054215',
        'tt0081505',
        'tt0078748',
        'tt0084787',
        'tt0056687',
        'tt0010323',
        'tt0070047',
        'tt0063522',
        'tt0046911',
        'tt1139797'
      ]
      const requests = movieOptions.map(id => {
        return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=9733f1df`)
      })
  
      Promise.all(requests).then(result => {
        const movieData = []
        result.forEach(val => {
            movieData.push(val.data)
        })
        setMovies(movieData);
      })
    }

    const handleItemClick = (item) => {
        setSelectedMovie(item)
        setShowModal(!showModal)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={showModal ? "movie-list-open" : "movie-list"} data-cy="movie-list">
            <MovieItems items={movies} selectedMovie={handleItemClick} />
            <Modal 
                data={selectedMovie}
                modalClosed={handleItemClick}
                show={showModal}
            />
        </div>
    )
}

export default MoviesList;