import React from 'react';
import PropTypes from 'prop-types';

const TextLimiter = ({ text, limit = 30 }) => {
    const truncatedText = text.length > limit ? text.substring(0, limit) + '...' : text;
    return <span>{truncatedText}</span>;
};

TextLimiter.propTypes = {
    text: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
};

export default TextLimiter;