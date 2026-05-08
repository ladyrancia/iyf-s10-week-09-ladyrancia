import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Get from localStorage or use initial value
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });
    
    // Update localStorage when value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}

export default useLocalStorage;