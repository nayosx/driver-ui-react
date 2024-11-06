import { FaCarAlt } from "react-icons/fa";
import classNames from 'classnames';


export const Car = ({ car, callback }) => {

    const handleClick = () => {
        callback(car);
        console.log('Car rendered:', car.model, 'isSelected:', car.isSelected);
    }

    return (
        <div
            className={classNames('u-card', 'u-border-right-grey-v1 u-card--hover', {
                'u-card--selected': car.isSelected,
            })}
            onClick={handleClick}
        >
            <div className="u-text-center">
                <FaCarAlt className='u-icon-x128' />
            </div>
            <h2>{car.model}</h2>
            <p>{car.carplate}</p>
        </div>
    );
}