import { FaUser } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="u-text-center">Bienvenido</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 col-lg-3">
                    <div className='u-text-center'>
                        <div className='u-circle-xxl u-circle-xxl-shadow u-bg-blue-cyan u-text-black'>
                            <FaUser className="u-icon-x128" />
                        </div>
                    </div>
                    <div className='u-text-center'>
                        <h4>Nombre del conductor</h4>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-9">
                    Datos del auto a usar y elementos visuales
                </div>
            </div>
        </div>
    );
};

export default Home;