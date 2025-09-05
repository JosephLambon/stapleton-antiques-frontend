import { useEffect, useState, useRef } from 'react';

const useOnScreen = (options : IntersectionObserverInit) : [React.RefObject<any>, boolean] => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callBackFunction = (entries : IntersectionObserverEntry[], observer : IntersectionObserver) => {
        const [ entry ] = entries
        if(entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
            observer.unobserve(entry.target);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options)

        // Once containerRef element gets mounted to DOM, start observing.
        if(containerRef.current) {
            observer.observe(containerRef.current)
        }
        // Cleanup - triggers when dependencies change
        return () => {
            if(containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
};  

export default useOnScreen;