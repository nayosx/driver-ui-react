// ListViewCar.js
import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import classNames from 'classnames';
import TextLimiter from "../../../../components/text-limiter/TextLimiter";
import CarPropTypes from "./CommonPropTypes";

const ListViewCar = ({ car, handleClick }) => {
    return (
        <div className={classNames('car-list-item u-card u-card--shadow-sm', {
            'u-card--selected': car.isSelected,
            'u-card--disabled': !car.isAvailable,
        })} >
            <div className='u-d-flex u-d-flex-align-center u-w-100 u-d-flex-gap-2'>
                {car.isAvailable ? (
                    <FaCarAlt className='u-icon-x40'/>
                ) : (
                    <FiAlertCircle className='u-icon-x40 u-text-red'/>
                )}
                <div>
                    {car.isAvailable ? (
                        <p><TextLimiter text={car.model} limit={16}/></p>
                    ) : (
                        <p className='u-text-red u-font-bold'>Auto en uso</p>
                    )}
                    <p>{car.carplate}</p>
                </div>
                <div className="u-d-flex-spacer"></div>
                <div>
                    {car.isAvailable ? (
                        <button
                            className="u-btn u-btn-ghost"
                            onClick={handleClick}
                            disabled={!car.isAvailable || car.isSelected}
                        >
                            <span className='u-d-block-mobile'>
                                <FaPlus className='u-icon-x16'/>
                            </span>
                            <span className='u-d-none-mobile'>Seleccionar</span>
                        </button>
                    ): (
                        <button type={"button"} className='u-btn u-btn-ghost-red'>
                            <span className='u-d-block-mobile'>
                                <FaCircleInfo className='u-icon-x16'/>
                            </span>
                            <span className='u-d-none-mobile'>Información</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

ListViewCar.propTypes = CarPropTypes;

export default ListViewCar;