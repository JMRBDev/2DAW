import React from 'react';

const Form = ({ children, onSubmit }) => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <form onSubmit={(event) => onSubmit(event)} className="col-4">
                {children}
            </form>
        </div >
    );
}

export default Form;
