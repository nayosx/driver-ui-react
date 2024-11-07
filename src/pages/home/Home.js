import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Logout } from '../auth/Logout';
import {Car} from '../../components/car/Car';
import './Home.scss';
import Modal from "../../components/modal/Modal";

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                return { ...car, isSelected: true };
            }
            return { ...car, isSelected: false};
        });
        setCars(updatedCars);
    };


    const handleAddCar = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='u-d-flex u-d-flex-align-center u-w-100'>
                        <h3 className="u-text-center u-text-grey-v2">Bienvenido</h3>
                        <div className="u-d-flex-spacer"></div>
                        <Logout />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 col-lg-3">
                    <div className='u-d-flex u-d-flex-column u-d-flex-gap-3 u-card u-card--shadow u-bg-white '>
                        <div className='u-card__content'>
                            <div className='u-text-center'>
                                <div className='u-circle-xxl u-circle-xxl-shadow u-bg-blue-cyan u-text-black'>
                                    <FaUser className="u-icon-x128" />
                                </div>
                            </div>
                            <div className='u-text-center'>
                                <hr className='grey-v1' />
                                <h4>Nombre del conductor</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-9">
                    <div className='u-d-flex u-d-flex-column u-d-flex-gap-3 u-card u-card--shadow u-bg-white'>
                        <div className='u-card__title'>
                            <div className="u-d-flex u-d-flex-align-center u-w-100">
                                <span className="u-font-medium">Gestión de vehiculos</span>
                                <div className="u-d-flex-spacer"></div>
                                <button 
                                    className="u-btn u-btn-primary"
                                    onClick={handleAddCar}
                                >
                                    Usar vehiculo
                                </button>
                            </div>
                        </div>
                        <div className='u-card__content'>
                            <p>Lista de vehiculos</p>
                            <div className='u-d-flex car-container u-d-flex-wrap u-d-flex-gap-3'>
                                {
                                    cars.map((car) => {
                                        return (
                                            <Car
                                                key={car.carplate}
                                                car={car}
                                                callback={ ()=> callbackCar(car)}
                                            />
                                        )
                                    })
                                }
                            </div>
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
        </div>
    );
};

export default Home;