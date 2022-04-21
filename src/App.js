import React from 'react';
import './App.css';
import PeopleWork from './assets/peoplework.png';

//Componentes
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateButton/CreateButton';

const todos = [{ text: 'Caminar', done: false }
  , { text: 'Comer', done: false }
  , { text: 'Dormir', done: false }
];


function App() {
  return (
    <React.Fragment>
      <div className="h-full w-full overflow-x-hidden flex flex-col items-center p-4">
        {/* <div className="md:flex md:flex-col md:w-1/2 md:justify-center md:items-center"> */}
          <h1 className="text-3xl text-blue-700 pt-4 font-bold hover:rotate-12 animate-bounce">ToDo!</h1>
          <div className="shadow-md shadow-blue-700 w-3/4 m-8 p-8 justify-center rounded-md flex flex-col items-center">
            <p className="text-xl font-medium text-blue-700 capitalize decoration-cyan-200 underline">Create new task</p>
            <div className="flex w-full justify-center items-center">
              <input className="border-x-8 border-blue-700 ring-offset-2 focus:ring-4 w-5/6 rounded-md h-8 p-2 m-4" type="text" placeholder="Create task" />
              <CreateTodoButton className="w-1/6" />
            </div>
            <img src={PeopleWork} alt="People Work" />
          </div>
        {/* </div>
        <div className="md:flex md:flex-col md:w-1/2 md:justify-center md:items-center"> */}
          <TodoCounter />
          <TodoSearch />
          <div className="shadow-md shadow-blue-700 w-3/4 flex-col flex p-4 m-4 rounded-md">
            <TodoList>
              {todos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} />
              ))}
            </TodoList>
          </div>
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
