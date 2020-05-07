import React from 'react';
import TodoForm from '../TodoForm/Form';
import TodoList from '../TodoList/List';
import useTodoState from '../TodoActions/useTodoState';

export default (): React.ReactElement<HTMLElement> => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <>
      <TodoForm 
        saveTodo={(todoText: string): void => {
          const trimmedText: string = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }} 
      />

      <TodoList 
        todos={todos}
        deleteTodo={deleteTodo} 
      />
    </>
  );
}