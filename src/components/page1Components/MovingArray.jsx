import React, { useState, useEffect } from "react";

const MovingArray = () => {
  const [items, setItems] = useState(['AI Tools', 'Artificial Intelligence Basics', 'Machine Learning', 'Coding and Python', 'Blockchain Essentials']);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [items.length]);

  return (
    <div className="p-4">

      <div className="relative overflow-hidden w-relative h-16">
        <ul
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="text-3xl font-sans w-full flex-shrink-0   text-yellow-300 py-2 px-4 rounded-md outline-none"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovingArray;