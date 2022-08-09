import React,{useState} from 'react';
import data from './data';
//import {FaAngleUp,FaAngleDown } from "react-icons/fa";


function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState(data);

  //handleInputChange(){};
//onChange={handleInputChange}
 const handleSubmit = (e) => {
    e.preventDefault();
    let newVal = parseInt(value);
    if (value <= 0) {
      newVal = 1;
    }
    if (value >= text.length -1 ) {
        newVal = text.length -1;
      } 
    // else{
    //   newVal += 1;
    // }
    setText(data.slice(0, newVal));
    //return newVal;
 }; 




  return (
    <section>
       <h3>TIRED OF BORING LOREM IPSUM?</h3>
       <form className='form' onSubmit={handleSubmit}>
          <label>Pargraphs:</label>
          {/* <div>
            <button className="btn btn-up"  >
                <FaAngleUp/>
            </button>
          </div> */}
          <input className="form-control" name='number' type="number" id='amount' value={value} onChange={(e) => setValue(e.target.value)} />
          {/* <div >
            <button className="btn btn-down">
              <FaAngleDown/>
            </button>
          </div> */}
          <button >
            GENERATE
          </button>
       </form>
       <article>
          {text.map((item, index) => {
              return <p key={index}>{item}</p>
          })}
       </article>
       
    </section>
   
  );
}

export default App;
