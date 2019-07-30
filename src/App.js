import React, {useState} from 'react';
import './App.css';



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
          text: "play basketball",
          isCompleted: false
        }
      ],
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
        text: "play basketball",
        isCompleted: false
      }
    ]
  ])

  const updateList = (list, index) => {
    const newList = [...lists];
    newList[index] = list;
    setList(newList);

  }


  return(
    <div className="app">
      {lists.map((list, index) => (
        <List 
        list={list} 
        key={index}
        index={index}
        updateList={updateList}
        />
      ))}
      <div>add new list</div>
    </div>
  )

}



const List = ({list, index, updateList}) => {
  const [todos, setTodos] = useState(
    list
  )

  // console.log(todos, index)
  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
    updateList(newTodo, index)
  }

  const completeTodo = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo);
  }
  
  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }
  return (
      <div className="todo-list" key={index}>
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
        placeholder="Add things..."
        onChange={e => setValue(e.target.value)}/>
        <button>Add!</button>
    </form>
  )
}


export default App;