import React, { useEffect, useState } from 'react';

const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`page-loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default PageLoader;