import React from 'react'
import Reviews from './Reviews'
//import {FaGithubSquare} from 'react-icons/fa';
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2 >Our Reviews </h2>
          <div className='underline'></div>
        </div>
        <Reviews /> 
      </section> 
      
    </main>
  )

}

export default App;



// <FaGithubSquare className="icon" />