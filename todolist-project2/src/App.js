import './App.css';
import react, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form todos={todos} setTodos={setTodos} setInputText ={setInputText} inputText={inputText}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
}

export default App;
