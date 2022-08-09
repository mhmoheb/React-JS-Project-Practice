import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Slider = ({person, index}) => {   
    return(
        <>
            {person.map((per, perIndex) => {
              const {id, image, name, title, quote} = per;

              let position = 'nextSlide';
              if (perIndex === index) {
                position = 'activeSlide';
              }
              if (
                perIndex === index - 1 ||
                (index === 0 && perIndex === per.length - 1)
              ) {
                position = 'lastSlide';
              }
              return(
              <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img"/>
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p> 
                  <FaQuoteRight className="icon"/>
              </article> 

              )     
          })}

        </>
    )

}

export default Slider;
