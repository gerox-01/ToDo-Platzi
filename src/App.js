// import logo from './logo.svg';
// import './App.css';
import React from 'react';

//Componentes
import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {TodoList} from './components/TodoList/TodoList';
import {TodoItem} from './components/TodoItem/TodoItem';
import {CreateTodoButton} from './components/CreateButton/CreateButton';

const todos = [{ text: 'Caminar', done: false }
  , { text: 'Comer', done: false }
  , { text: 'Dormir', done: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
