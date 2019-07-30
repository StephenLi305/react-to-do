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
  
  const addList = () => {
    const newLists = [...lists];
    const newList = [{
      text: "play basketball",
      isCompleted: false
    }];
    newLists.push(newList);
    setList(newLists);
    console.log(newLists)
    // console.log("hi")
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
      <ListForm className="todo-list" addList={addList}/>
    </div>
  )

}



const List = ({list, index, updateList}) => {
  const [todos, setTodos] = useState(
    list
  )

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
    updateList(newTodo, index)
  }
  
  const completeTodo = todoIndex => {
    const newTodo = [...todos];
    newTodo[todoIndex].isCompleted = !newTodo[todoIndex].isCompleted;
    setTodos(newTodo);
    updateList(newTodo, index)
  }
  
  const removeTodo = todoIndex => {
    const newTodo = [...todos];
    newTodo.splice(todoIndex, 1);
    setTodos(newTodo);
    updateList(newTodo, index)
  }
  return (
      <div className="todo-list" key={index}>
        <h3>List {index + 1}</h3>
        {todos.map((todo, index) => (
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

const ListForm = ({addList}) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setValue('')
    addList();
  };

  return(
    <form onSubmit={handleSubmit}>
        <button>Add!</button>
    </form>
  )
}


export default App;
