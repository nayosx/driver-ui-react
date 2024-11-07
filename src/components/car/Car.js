import { FaCarAlt } from "react-icons/fa";
import classNames from 'classnames';
import './Car.scss';
import TextLimiter from "../text-limiter/TextLimiter";


export const Car = ({ car, callback }) => {

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
        </div>
    );
}