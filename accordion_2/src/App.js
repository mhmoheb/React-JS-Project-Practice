import data from './data';
import Question from './Question';
import React,{useState} from 'react';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
        <div className='container'>
          <section>
            
              <h4>Several windows stacked on each other</h4>
              <p>The accordion is a graphical control element comprising a<br />
                  vertically stacked list of items, such as labels or thumbnails.</p>
            
            {questions.map((question) =>{
              return <Question key={question.id} {...question}/>
            })}
          </section>
        </div>
    </main>
  );
}

export default App;
