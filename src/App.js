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
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            todo={todo} 
            index={index}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}


const Todo = ({todo, index}) => {
  return(
    <div className="todo">
      {todo.text}
    </div>
  )
}

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="add things"
        onChange={e => setValue(e.target.value)}/>
        <button/>
    </form>
  )
}


export default App;
