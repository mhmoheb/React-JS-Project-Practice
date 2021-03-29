import './App.css';
import Question from './Question';
import data from './data';
import React, {useState} from 'react'

function App() {
  const [questions, setQuestions] = useState(data);
  return (
        <main>
          <div className='container'>
            <h3>Questions And Answers About Login</h3>
            <section>
              {questions.map((question) =>{
                return <Question key={question.id} {...question}/>
              })}
            </section>
          </div>
        </main>
    
  );
 
}

export default App;




