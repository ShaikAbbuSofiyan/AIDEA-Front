import React, { useRef } from 'react'
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Card from './Card'
import { use } from 'react';

const CardScrolling = () => {
    let cardArray = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>]
    const currCard = useRef(null);
    function cardScroll(){
        
    }
    return (
    <div>
      <div ref={currCard} className="relative w-full">
        {cardArray.map((item) => {
            <div>{item.id}</div>
        })}
      </div>
      <div className='w-full flex justify-center space-x-3'> 
        <button onClick={cardScroll}><MdKeyboardArrowLeft/></button>
        <button><MdChevronRight/></button>
      </div>
    </div>
  )
}

export default CardScrolling
