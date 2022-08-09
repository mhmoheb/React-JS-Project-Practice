import React,{useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from 'react-bootstrap/Button'
const Question = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return(
        <article className='question'>
            <header>
                <h4>{question}</h4>
                <button className='btn' onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus />}
                </button>
            </header>
            {showAnswer && <p>{answer}</p>}
            {/* <Button type="button" class="btn btn-primary">Learn more</Button> */}
        </article>
    )
}

export default Question;