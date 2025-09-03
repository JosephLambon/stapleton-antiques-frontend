import { useEffect, useState, useRef } from 'react';

const useOnScreen = (options : IntersectionObserverInit) : [React.RefObject<any>, boolean] => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callBackFunction = (entries : IntersectionObserverEntry[]) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
};

export default useOnScreen;