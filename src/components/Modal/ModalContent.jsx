import React from 'react';

const ModalContent = ({ data }) => {
    return (
        <>
            <div className="movie-modal-title">
                {data.Title} ({data.Year})
            </div>
        </>
    )
}

export default ModalContent;