/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './titleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react'
import { useEffect } from 'react';


const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel = (ev) => {
    ev.preventDefault();
    cardsRef.current.scrollLeft += ev.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-lists" ref={cardsRef}>
        {cards_data.map((card, index)=> (
          <div className="card" key={index}>
            <img src={card.image} alt="card-img" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards