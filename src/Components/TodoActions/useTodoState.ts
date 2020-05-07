import { useState } from 'react';

interface ITodoState {
  todos: string[];
  addTodo: (todoText: string) => void;
  deleteTodo: (todoIndex: number) => void;
}

export default (initialValue: string[]): ITodoState => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText: any) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex: any) => {
      const newTodos = todos.filter((_: any, index: any) => index !== todoIndex);

      setTodos(newTodos);
    }
  }
};