import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import classNames from 'classnames';
import TextLimiter from "../../../../components/text-limiter/TextLimiter";
import CarPropTypes from "./CommonPropTypes";

const GridViewCar = ({ car, handleClick, isLast }) => {
    return (
        <div
            className={classNames('u-card u-card-car u-card--hover', {
                'u-card--selected': car.isSelected,
                'u-border-right-grey-v1': !isLast,
            })}
            onClick={handleClick}
        >
            <div className="u-text-center">
                <FaCarAlt className='u-icon-x128'/>
            </div>
            <h2>
                <TextLimiter text={car.model} limit={11}/>
            </h2>
            <p>{car.carplate}</p>

            {!car.isAvailable && (
                <div className='info-driver'>
                    <div className='u-text-center'>
                        <p className='u-text-red u-text-2xl u-font-bold'>Auto en uso</p>
                        <p>{car.carplate}</p>
                        <div className='u-text-center u-mb-4'>
                            <FiAlertCircle className='u-icon-x24 u-text-5xl u-text-red'/>
                        </div>
                        <button type={"button"} className='u-btn u-btn-ghost-red'>Información</button>
                    </div>
                </div>
            )}
        </div>
    );
}

GridViewCar.propTypes = CarPropTypes;

export default GridViewCar;