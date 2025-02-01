import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

const HorizontalScrollWithButtons = () => {
    let cardArray = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>]
    const scrollRef = useRef(null);
  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll(-200)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft />
      </button>

      <div ref={scrollRef} className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4 p-4">
          {cardArray.map((key, index) => (
            <div
              key={index+1}
              className="w-48 h-32 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md"
            >
              {cardArray[key]}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scroll(200)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HorizontalScrollWithButtons;
