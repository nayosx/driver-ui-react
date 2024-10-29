import { useStore } from '../../hooks/Session-Storage.hook';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

export const Logout = () => {
    const navigate = useNavigate();
    const [data, setData] = useStore('data', null);

    const handleLogout = useCallback(() => {
        setData(null);
    }, [setData]);

    useEffect(() => {
        if (data === null) {
            navigate('/');
        }
    }, [data, navigate]);

    return (
        <div>
            <button 
                className='u-btn u-btn-ghost-borderless'
                onClick={handleLogout}
            >
                Salir
            </button>
        </div>
    );
}
