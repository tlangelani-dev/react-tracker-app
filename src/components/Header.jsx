import React from 'react';
import '../sass/Header.scss';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <div className="cp-header">
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
