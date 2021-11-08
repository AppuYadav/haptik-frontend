import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ title }) => {

    return <React.Fragment>
        <div className="loader">
            <span className="loader-text">{title}</span>
        </div>
    </React.Fragment>
}

Loader.propTypes = {
    title: PropTypes.string.isRequired
};

export default Loader;