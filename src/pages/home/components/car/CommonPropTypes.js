// commonPropTypes.js
import PropTypes from 'prop-types';

const CarPropTypes = {
    car: PropTypes.shape({
        image: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        carplate: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isAvailable: PropTypes.bool.isRequired,
    }).isRequired,
    callback: PropTypes.func,
    isLast: PropTypes.bool,
};

export default CarPropTypes;