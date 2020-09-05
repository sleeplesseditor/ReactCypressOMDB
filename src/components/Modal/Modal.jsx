import React from 'react';
import './Modal.scss';

const Backdrop = (props) => (
    props.show ? <div className='movie-backdrop' onClick={props.clicked}></div> : null
)

const modal = ({ data, modalClosed, show }) => {
    console.log('DATA', data)
    return (
        <>
            <Backdrop show={show} clicked={modalClosed} />
            {data && show ? (
                <div className='movie-modal'>
                    <div className="movie-modal-title">
                        {data.Title} ({data.Year})
                    </div>
                    
                    <hr />
                    <div className="movie-modal-btn-container">
                        <button className="movie-modal-btn" onClick={modalClosed}>Close</button>
                    </div>
                </div>
            ): null }
        </>
    );
};


export default modal;