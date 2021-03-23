import React from 'react';

const Input = ({ onChange, name, id, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{placeholder}</label>
            <input onChange={onChange.call(this)} type="text" name={name} className="form-control" id={id} placeholder={placeholder} />
        </div>
    );
}

export default Input;
