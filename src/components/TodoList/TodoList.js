import React from 'react';
// import {TodoItem} from './TodoItem/TodoItem';

function TodoList(props) {
  return (
    <section>
      <ul>
        <div>
          {props.children}
        </div>
      </ul>
    </section>
  );
}

export {TodoList};