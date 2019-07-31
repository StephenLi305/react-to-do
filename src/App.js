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
      ]
  ])

  // useEffect(() => {
  //   console.log('deleted')
  // })


  const updateList = (list, index) => {
    const newLists = [...lists];
    newLists[index] = list;
    setList(newLists);
    console.log(list)
    console.log(newLists)
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
  }

  const deleteList = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setList(newLists);
 
  }

  return(
    <div className="app">
      {lists.map((list, index) => (
        <div key ={index}>
          <List 
          list={list} 
          key={index}
          index={index}
          updateList={updateList}
          deleteList={deleteList}
          />
        </div>
      ))}
      <button className="todo-list" onClick={() => addList()}>Add a New List!</button>
    </div>
  )

}



const List = ({list, index, updateList, deleteList}) => {
  const [ , setTodos] = useState(
  )

  const addTodo = text => {
    const newTodo = [...list, { text }];
    setTodos(newTodo);
    updateList(newTodo, index)
  }
  
  const completeTodo = todoIndex => {
    const newTodo = [...list];
    newTodo[todoIndex].isCompleted = !newTodo[todoIndex].isCompleted;
    setTodos(newTodo);
    updateList(newTodo, index)
  }
  
  const removeTodo = todoIndex => {
    const newTodo = [...list];
    newTodo.splice(todoIndex, 1);
    setTodos(newTodo);
    updateList(newTodo, index)
  }
  return (
      <div className="todo-list" key={index}>
        <h3>
          List {index + 1}
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



export default App;
