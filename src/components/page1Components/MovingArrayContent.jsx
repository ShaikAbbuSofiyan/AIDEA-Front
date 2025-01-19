import React, { useState, useEffect } from 'react';

function MovingArrayContent() {
  // The array content
  const items = ['AI Tools', 'Artificial Intelligence Basics', 'Machine Learning', 'Coding and Python', 'Blockchain Essentials'];

  // State to hold the current index for displaying items
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to update the current index
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000); // Update every second (1000ms)

    // Clear the interval when the component is unmounted or re-renders
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Moving Array Content</h1>
      <div>{items[currentIndex]}</div>
    </div>
  );
}

export default MovingArrayContent;
