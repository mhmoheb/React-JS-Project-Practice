import './App.css';
import people from './data';
import React, {useState,useEffect} from 'react';
import Slider from './slider';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [person, setPerson] = useState(people);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = person.length - 1;
  //   if (index < 0){
  //     setIndex(lastIndex);
  //   }
  //   if (index > 0){
  //     setIndex(0);
  //   }
  // },[index, person]);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      //console.log(oldIndex);
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

//clearing the interval essentially freezes it in time until I call setInterval again.
  return (
    <section className="section">
        <div className="title">
          <h1><span>/</span> Reviews</h1>  
        </div>
        <div className="section-center">
          {/* <Slider person={person} index={index}/> */}
          {person.map((per, personIndex) => {
              const {id, image, name, title, quote} = per;

              let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === person.length - 1)
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
          <button className="prev" onClick={prevSlide}>
            <FiChevronLeft/>
          </button>
          <button className="next" onClick={nextSlide}>
            <FiChevronRight/>
          </button>
        </div>       
    </section>  
  );
}

export default App;
