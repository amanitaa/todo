import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import Darkmode from "./components/Darkmode";
import Dropdown from "./components/Dropdown";
import Empty from "./components/Empty";
import SearchBar from "./components/SearchBar";
import PopUp from "./components/PopUp";
import Todo from "./components/Todo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUp = () => setIsOpen(!isOpen);

  const [todos, setTodo] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem('Todos')) || []);
  }, []);

  const updateText = (e) => {setText(e.target.value)}

  const saveTodo = () => {
    setTodo((prevState) => {
      const newState = [...prevState , {key:uuid(), id:uuid(), text:text, isDone:false}]
      localStorage.setItem('Todos', JSON.stringify(newState));
      return newState
    }); 
    setText('');
  }

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => {return todo.id !== id});
    localStorage.setItem('Todos', JSON.stringify(filteredTodo));
    setTodo(filteredTodo);
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST</h1>
        <div className="top">
          <SearchBar placeholder="Search note..." />
          <Dropdown />
          <Darkmode />
        </div>
        <div className="content">
          {isOpen && (
          <PopUp onClose={() => setIsOpen(false)} saveTodo={saveTodo}>
            <p>NEW NOTE</p>
            <SearchBar className="pop-up-search" placeholder="Input your note..." text={text} onInput={updateText} />
          </PopUp>  
          )}
          <div className="list">
            {todos.length === 0 ? <Empty /> : todos.map((todo) => <Todo key={todo.id} deleteTodo={deleteTodo} updateText={updateText} id={todo.id} text={todo.text} isDone={todo.isDone}/>)}
          </div>
          <div className="add-button" onClick={togglePopUp}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 22.5C10.5 22.8978 10.658 23.2794 10.9393 23.5607C11.2206 23.842 11.6022 24 12 24C12.3978 24 12.7794 23.842 13.0607 23.5607C13.342 23.2794 13.5 22.8978 13.5 22.5V13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12C24 11.6022 23.842 11.2206 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5H13.5V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5V10.5H1.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.5V22.5Z" fill="#F7F7F7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
