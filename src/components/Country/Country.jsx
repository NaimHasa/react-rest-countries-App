import React from 'react';
import './Country.css';

const Country = (props) => {
    const { area, name, flags } = (props.country)
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>Name:{name.common}</h1>
            <h3>Area: {area}</h3>

        </div>
    );
};

export default Country;