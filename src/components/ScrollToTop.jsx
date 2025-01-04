import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Move the scroll to top (x=0, y=0)
  }, [location.pathname]); // Runs each time the path changes

  return null; // Not rendering anything
};

export default ScrollToTop;
