import React, {useState} from 'react';
import './App.css';
import StopWatch from './StopWatch'
import Footer from './Footer';

const App = () => {
  const [lists, setList] = useState([
      [
        {
          text: "Learn ReactHooks",
          isCompleted: false
        },
        {
          text: "Go get boba",
          isCompleted: false
        },
        {
          text: "Play basketball",
          isCompleted: false
        }
      ]
  ])

  const updateList = (list, index) => {
    const newLists = [...lists];
    newLists[index] = list;
    setList(newLists);
  }
  
  const addList = () => {
    const newLists = [...lists];
    const newList = [];
    newLists.push(newList);
    setList(newLists);
  }
  
  const deleteList = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setList(newLists);
  }

  return(
    <div className="app">
      <div className="app-items"> 
        {lists.map((list, index) => (
          <div key={index}>
            <List
              list={list}
              key={index}
              index={index}
              updateList={updateList}
              deleteList={deleteList}
            />
          </div>
        ))}
        <button className="box" onClick={() => addList()}>Add a new list!</button>
      </div>
      <div className="app-items">
        <StopWatch/>
      </div>
      <Footer/>
    </div>
  )

}



const List = ({list, index, updateList, deleteList}) => {
  // want to use the same list from the props
  // giving it a new variable meant I was modifying a new one, which mean I was still modifitying the state, but the render was rendinging just the number of list, and not the exact values. 

  const addTodo = text => {
    const newTodos = [...list, { text }];
    updateList(newTodos, index)
  }
  
  const completeTodo = todoIndex => {
    const newTodos = [...list];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    updateList(newTodos, index)
  }
  
  const removeTodo = todoIndex => {
    const newTodos = [...list];
    newTodos.splice(todoIndex, 1);
    updateList(newTodos, index)
  }
  return (
      <div className="box" key={index}>
        <h3>
        <div>List {index + 1}</div>
        <button onClick={() => deleteList(index)}>X</button>
        </h3>
        {list.map((todo, index) => (
          <Todo 
            key={index} 
            todo={todo} 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            index={index}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
  )
}





const Todo = ({todo, index, completeTodo, removeTodo}) => {
  return(
    <div 
      className="todo"
      style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
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
        placeholder="Add new to do..."
        onChange={e => setValue(e.target.value)}/>
        <button>Add!</button>
    </form>
  )
}

export default App







