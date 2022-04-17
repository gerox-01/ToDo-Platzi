import React from 'react';
// import {TodoItem} from './TodoItem/TodoItem';

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export {TodoList};