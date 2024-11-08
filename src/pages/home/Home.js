import React, {Fragment, useState} from 'react';
import { FaUser } from 'react-icons/fa';
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaTableList } from "react-icons/fa6";
import { Logout } from '../auth/Logout';
import {Car} from './components/car/Car';
import './Home.scss';
import Modal from "../../components/modal/Modal";
import useViewModeStore from '../../store/viewModeStore';
import classNames from 'classnames';

const Header = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className='u-d-flex u-d-flex-align-center u-w-100'>
                    <h3 className="u-text-center u-text-grey-v2">Bienvenido</h3>
                    <div className="u-d-flex-spacer"></div>
                    <Logout/>
                </div>
            </div>
        </div>
    );
};

const UserInfo = () => {
    return (
        <Fragment>
            <div className='u-text-center'>
                <div className='u-circle-xxl u-circle-xxl-shadow u-bg-blue-cyan u-text-black'>
                    <FaUser className="u-icon-x128"/>
                </div>
            </div>
            <div className='u-text-center'>
                <hr className='grey-v1'/>
                <h4>Nombre del conductor</h4>
            </div>
        </Fragment>
    );
};

const Col1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddCar = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <Fragment>
            <div className="col-12 col-md-3 col-lg-3">
                <div className='u-d-flex u-d-flex-column u-d-flex-gap-3 u-card u-card--shadow u-bg-white '>
                    <div className='u-card__content'>
                        <UserInfo/>
                        <div className='u-text-center'>
                            <button type={'button'} className='u-btn u-btn-primary' onClick={handleAddCar}>
                                Iniciar viaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            >

                <h2>Modal</h2>
                <p>Contenido del modal</p>

            </Modal>
        </Fragment>
    );
};

const Col2 = () => {
    const {isGridView, toggleView} = useViewModeStore();

    const [cars, setCars] = useState([
        {
            image: 'kia_picanto.jpg',
            model: 'Kia Picanto',
            carplate: 'XYZ-5678',
            isSelected: true,
            isFavorite: true,
            isAvailable: true,
        },
        {
            image: 'corolla.jpg',
            model: 'Toyota Corolla',
            carplate: 'ABC-1234',
            isSelected: false,
            isFavorite: false,
            isAvailable: false,
        },
        {
            image: 'corolla.jpg',
            model: 'Toyota Celica',
            carplate: 'DFE-1234',
            isSelected: false,
            isFavorite: false,
            isAvailable: true,
        },
        {
            image: 'corolla.jpg',
            model: 'Datsun z270',
            carplate: 'IJK-1234',
            isSelected: false,
            isFavorite: false,
            isAvailable: true,
        },

    ]);

    const callbackCar = (item) => {
        console.log('click', item);

        const updatedCars = cars.map(car => {
            if (car.carplate === item.carplate) {
                return {...car, isSelected: true};
            }
            return {...car, isSelected: false};
        });
        setCars(updatedCars);
    };
    return (
        <div className="col-12 col-md-9 col-lg-9">
            <div className='u-d-flex u-d-flex-column u-d-flex-gap-3 u-card u-card--shadow u-bg-white'>
                <div className='u-card__title'>
                    <div className="u-d-flex u-d-flex-align-center u-w-100">
                        <span className="u-font-medium">Vehiculos</span>
                        <div className="u-d-flex-spacer"></div>

                        <button
                            type={'button'}
                            className="u-btn u-btn-ghost-borderless"
                            onClick={toggleView}
                        >
                            {isGridView ? <FaTableCellsLarge className='u-icon-x24'/> :
                                <FaTableList className='u-icon-x24'/>}
                        </button>
                    </div>
                </div>
                <div className='u-card__content'>
                    <div
                        className={classNames('u-d-flex car-container u-d-flex-wrap u-d-flex-gap-3', {
                            'u-d-flex-column': !isGridView,
                        })}
                    >
                        {
                            cars.map((car, index) => {
                                const isLast = index === cars.length - 1;
                                return (
                                    <Car
                                        key={car.carplate}
                                        car={car}
                                        isLast={isLast}
                                        callback={() => callbackCar(car)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <div className="row">
                <Col1/>
                <Col2/>
            </div>
        </div>
    );
};

export default Home;