import { useEffect, useState } from 'react';

export const useStore = (key, initialValues) => {
    const [storedValue, setStoredValue] = useState( () => {
        try {
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValues;
        } catch (error) {
            console.log(error);
            return initialValues;
        }
    });

    useEffect(() => {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};