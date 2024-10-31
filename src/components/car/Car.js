import { FaCarAlt } from "react-icons/fa";
import classNames from 'classnames';


export const Car = ({ car }) => {

    return (
        <div
            className={classNames('u-card', 'u-border-right-grey-v1', {
                'u-card--selected': car.isSelected,
            })}
        >
            <div className="u-text-center">
                <FaCarAlt className='u-icon-x128' />
            </div>
            <h2>{car.model}</h2>
            <p>{car.carplate}</p>
        </div>
    );
}