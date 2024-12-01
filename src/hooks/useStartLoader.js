import { useState, useEffect } from "react";

export const useStartLoader = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setTimeout(() => setIsLoading(false), 800)
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
    };
  }, [])

  return isLoading
}
