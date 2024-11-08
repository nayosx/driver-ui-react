import './Car.scss';

import React from "react";
import useViewModeStore from "../../../../store/viewModeStore";
import ListViewCar from "./ListViewCar";
import GridViewCar from "./GridViewCar";
import CarPropTypes from "./CommonPropTypes";

const Car = ({ car, callback, isLast = false }) => {

    const isGridView = useViewModeStore(state => state.isGridView);

    const handleClick = () => {
        callback(car);
        console.log('Car rendered:', car.model, 'isSelected:', car.isSelected);
    }

    return (isGridView) ? (
        <GridViewCar car={car} handleClick={handleClick} isLast={isLast} />
    ) : (
        <ListViewCar car={car} handleClick={handleClick} />
    );
}

Car.propTypes = CarPropTypes;

export {Car} ;