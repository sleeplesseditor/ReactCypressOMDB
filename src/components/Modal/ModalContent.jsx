import React from 'react';
import './ModalContent.scss';

const ModalContent = ({ data }) => {
    return (
        <>
            <div className="movie-modal-title">
                <h3>{data.Title} ({data.Year})</h3>
            </div>
            <hr />
            <div className="movie-modal-image">
                <img
                    src={data.Poster}
                    className="modal-poster"
                    data-cy="modal-poster"
                    alt={data.Title}
                />
            </div>
            <div className="movie-modal-content-container">
                <div className='movie-modal-content-row'>
                    <div className='movie-modal-content-cell'>
                        <h4>Director</h4>
                        <p>{data.Director}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Production Studio</h4>
                        <p>{data.Production}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Rating</h4>
                        <p>{data.Rated}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Runtime</h4>
                        <p>{data.Runtime}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Country</h4>
                        <p>{data.Country}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Genre</h4>
                        <p>{data.Genre}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Language</h4>
                        <p>{data.Language}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>Metascore</h4>
                        <p>{data.Metascore}</p>
                    </div>
                    <div className='movie-modal-content-cell'>
                        <h4>DVD Release Date</h4>
                        <p>{data.DVD}</p>
                    </div>
                </div>
                <div className='movie-modal-content-long-row'>
                    <div className='movie-modal-content-cell'>
                        <h4>Plot</h4>
                        <p>{data.Plot}</p>
                    </div>
                </div>
                <div className='movie-modal-content-long-row'>
                    <div className='movie-modal-content-cell'>
                        <h4>Actors</h4>
                        <p>{data.Actors}</p>
                    </div>
                </div>
                <div className='movie-modal-content-long-row'>
                    <div className='movie-modal-content-cell'>
                        <h4>Writer(s)</h4>
                        <p>{data.Writer}</p>
                    </div>
                </div>
                <div className='movie-modal-content-long-row'>
                    <div className='movie-modal-content-cell'>
                        <h4>Awards</h4>
                        <p>{data.Awards}</p>
                    </div>
                </div>
                <div className='movie-modal-content-ratings-row'>
                    {data.Ratings.map(rating => (
                        <div className='movie-modal-content-cell'>
                            <h4>{rating.Source}</h4>
                            <p>{rating.Value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ModalContent;