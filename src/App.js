import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text:"Learn ReactHooks",
      isCompleted: false
    },
    {
      text:"Go get boba",
      isCompleted: false
    },
    {
      text:"play basketball",
      isCompleted: false
    }
  ])
  
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            todo={todo} 
            index={index}/>
        ))}
      </div>
    </div>
  )
}


const Todo = ({todo, index}) => {
  return(
    <div className="todo">
      {todo.text}{index}
    </div>
  )
}


export default App;
