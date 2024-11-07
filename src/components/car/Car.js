import { FaCarAlt } from "react-icons/fa";
import classNames from 'classnames';
import './Car.scss';
import TextLimiter from "../text-limiter/TextLimiter";
import PropTypes from 'prop-types';
import { FiAlertCircle } from "react-icons/fi";

const Car = ({ car, callback }) => {

    const handleClick = () => {
        callback(car);
        console.log('Car rendered:', car.model, 'isSelected:', car.isSelected);
    }

    return (
        <div
            className={classNames('u-card u-card-car u-border-right-grey-v1 u-card--hover', {
                'u-card--selected': car.isSelected,
            })}
            onClick={handleClick}
        >
            <div className="u-text-center">
                <FaCarAlt className='u-icon-x128' />
            </div>
            <h2>
                <TextLimiter text={car.model} limit={11} />
            </h2>
            <p>{car.carplate}</p>


            {!car.isAvailable && (
                <div className='info-driver'>
                    <div className='u-text-center'>
                        <p className='u-text-red u-text-2xl u-font-bold'>Auto en uso</p>
                        <div className='u-text-center u-mb-4'>
                            <FiAlertCircle className='u-icon-x24 u-text-5xl u-text-red' />
                        </div>
                        <button type={"button"} className='u-btn u-btn-ghost-red'>Mas información</button>
                    </div>
                </div>
            )}

        </div>
    );
}

Car.propTypes = {
    car: PropTypes.shape({
        image: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        carplate: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isAvailable: PropTypes.bool.isRequired,
    }).isRequired,
    callback: PropTypes.func,
};

export { Car } ;