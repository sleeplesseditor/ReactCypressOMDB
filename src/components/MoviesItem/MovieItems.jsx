import React from 'react';
import './MovieItems.scss';

const movieItems = ({ items, selectedMovie }) => {
    
    return (
        <>
            {items.map((item, index) => (
            <div
                className="movie-item"
                data-cy={'movie-' + index}
                index={index}
                key={index}
                onClick={() => selectedMovie(item)}
            >
                <div className="backdrop">
                    <img
                        src={item.Poster}
                        className="movie-poster"
                        data-cy="movie-poster"
                        alt={item.Title}
                    />
                    {item.Title}
                </div>
            </div>
        ))}
        </>
    )
}

export default movieItems;