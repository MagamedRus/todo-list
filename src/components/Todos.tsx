import React from 'react';
import { useAppSelector } from '../hooks/redux';
import HR from './HR';
import Todo from './Todo';

function Todos() {
  const todos = useAppSelector(state => state.todos);

  return (
    <>
      {todos.map((todo, index) => (
        <>
          {index !== 0 && <HR />}
          <Todo key={String(todo.id)} todo={todo} />
        </>
      ))}
    </>
  );
}

export default Todos;
