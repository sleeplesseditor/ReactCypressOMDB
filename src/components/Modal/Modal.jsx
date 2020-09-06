import React from 'react';
import ModalContent from './ModalContent';
import './Modal.scss';

const Backdrop = (props) => (
    props.show ? <div className='modal-backdrop' onClick={props.clicked}></div> : null
)

const modal = ({ data, modalClosed, show }) => {
    return (
        <>
            <Backdrop show={show} clicked={modalClosed} />
            {data && show ? (
                <div className='modal-body'>
                    <ModalContent data={data} />
                    <div className="modal-footer">
                        <hr />
                        <button className="modal-btn" onClick={modalClosed}>Close</button>
                    </div>
                </div>
            ): null }
        </>
    );
};


export default modal;