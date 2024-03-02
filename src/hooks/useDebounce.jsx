import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debounceValue;
};

export default useDebounce;
