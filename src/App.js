// import React, {useState} from 'react';
// import './App.css';

// const App = () => {
//   const [lists, setList] = useState([
//       [
//         {
//           text: "Learn ReactHooks",
//           isCompleted: false
//         },
//         {
//           text: "Go get boba",
//           isCompleted: false
//         },
//         {
//           text: "play basketball",
//           isCompleted: false
//         }
//       ]
//   ])

//   const updateList = (list, index) => {
//     const newLists = [...lists];
//     newLists[index] = list;
//     setList(newLists);
//     // console.log(list)
//     // console.log(newLists)
//   }
  
//   const addList = () => {
//     const newLists = [...lists];
//     const newList = [];
//     newLists.push(newList);
//     // newLists.unshift(newList);
//     setList(newLists);
//     console.log(newLists)
//   }
  
//   const deleteList = (index) => {
//     const newLists = [...lists];
//     newLists.splice(index, 1);
//     setList(newLists);
//     console.log(newLists)
//   }

//   return(
//     <div className="app">
//       {lists.map((list, index) => (
//         <div key ={index}>
//           <List 
//           list={list} 
//           key={index}
//           index={index}
//           updateList={updateList}
//           deleteList={deleteList}
//           />
//         </div>
//       ))}
//       <button className="todo-list" onClick={() => addList()}>Add a New List!</button>
//     </div>
//   )

// }



// const List = ({list, index, updateList, deleteList}) => {
//   // want to use the same list from the props
//   // giving it a new variable meant I was modifying a new one, which mean I was still modifitying the state, but the render was rendinging just the number of list, and not the exact values. 
  
  
//   // const [ , setTodos] = useState(
    
//   // )

//   const addTodo = text => {
//     const newTodos = [...list, { text }];
//     // setTodos(newTodos);
//     updateList(newTodos, index)
//   }
  
//   const completeTodo = todoIndex => {
//     const newTodos = [...list];
//     newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
//     // setTodos(newTodos);
//     updateList(newTodos, index)
//   }
  
//   const removeTodo = todoIndex => {
//     const newTodos = [...list];
//     newTodos.splice(todoIndex, 1);
//     // setTodos(newTodos);
//     updateList(newTodos, index)
//   }
//   return (
//       <div className="todo-list" key={index}>
//         <h3>
//         <div>List {index + 1}</div>
//         <button onClick={() => deleteList(index)}>X</button>
//         </h3>
//         {list.map((todo, index) => (
//           <Todo 
//             key={index} 
//             todo={todo} 
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//             index={index}/>
//         ))}
//         <TodoForm addTodo={addTodo}/>
//       </div>
//   )
// }





// const Todo = ({todo, index, completeTodo, removeTodo}) => {
//   return(
//     <div 
//       className="todo"
//       style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
//     >
//       {todo.text}
//       <div>
//         <button onClick={() => completeTodo(index)}>Complete</button>
//         <button onClick={() => removeTodo(index)}>X</button>
//       </div>
//     </div>
//   )
// }



// const TodoForm = ({addTodo}) => {
//   const [value, setValue] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     if(!value) return;
//     addTodo(value);
//     setValue('');
//   };

//   return(
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text"
//         className="input"
//         value={value}
//         placeholder="Add new to do..."
//         onChange={e => setValue(e.target.value)}/>
//         <button>Add!</button>
//     </form>
//   )
// }









import React, { useState, useEffect } from 'react';
// import { start } from 'pretty-error';

// start time,
// hit a button, counts down
// set interval


// 0 .... 20

const App = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMintue] = useState(0);
  const [hour, setHour] = useState(0);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTime = () => {
    // console.log(this)
    if (started) {
      console.log(intervalId)
      clearInterval(intervalId);
      setStarted(false);
      setIntervalId(null);
    } else {
      console.log(intervalId)
      setStarted(true);
      setIntervalId(() => setInterval(
        () => {
          setSecond(second => second + 1)
        }
        , 100))
    }
  }

  useEffect( () => {
    // prevSeconds = prevState.second;
    // prevMinute = prevState.minute;
    // prevHour = prevState.hour;
    if (second > 59) {
    // if (prevSeconds > 59) {
      setSecond(0);
      setMintue(minute + 1);
    }
    // prevState = 60 m 60 s
    // state = 1 h 0 min, 0 sec
    if (minute > 59) {
      setMintue(0);
      setHour(hour + 1);
    }
  })
 
  

  // compinentDidUpdate 
  // prev props, prev states
  // sec 59 -> 60 - >
  // min 1


  // if tine is greater than 60, time % 60  ex 61 1:01 
  // minute = time/ 60

  const formatedHour = hour < 10 ? "0" + hour : hour
  const formatedMinute = minute < 10 ? "0" + minute : minute
  const formatedSecond = second < 10 ? "0" + second : second
  // if hour less then 10, 0 + hour, else hour

  return (
    <div>
      <p>Hour:{formatedHour}</p>
      <p>Minute:{formatedMinute}</p>
      <p>Second:{formatedSecond}</p>
      <button onClick={startTime.bind(this)}>Start Time</button>
    </div>
  )
}


export default App;
