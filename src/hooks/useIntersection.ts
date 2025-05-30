import { useState, useRef, useEffect } from 'react';

function useIntersection<T extends HTMLElement>(opciones: IntersectionObserverInit = {}): [React.RefObject<T | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementoRef = useRef<T | null>(null);

  useEffect(() => {
    const elemento = elementoRef.current;

    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, opciones);

    if (elemento) {
      observer.observe(elemento);
    }

    return () => {
      if (elemento) {
        observer.unobserve(elemento);
      }
    };
  }, [opciones]);

  return [elementoRef, isIntersecting];
}

export default useIntersection; 