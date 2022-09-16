import React from 'react';
import { TodosType } from '../types/todo';
import HR from './HR';
import Todo from './Todo';

type Props = {
  todos: TodosType;
};

function Todos({ todos }: Props) {
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
