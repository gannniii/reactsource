import { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App2() {
  const todoList = [
    {
      id: 1,
      title: "react 기초 알아보기",
      completed: true,
    },
    {
      id: 2,
      title: "가지 산책하기",
      completed: false,
    },
    {
      id: 3,
      title: "망원동 가기",
      completed: false,
    },
    {
      id: 4,
      title: "쿨쿨 자기",
      completed: false,
    },
  ];

  // 화면 재랜더링 시 값 기억
  const nextId = useRef(5);

  const [todos, setTodos] = useState(todoList);

  // 할 일 입력 시 todoList에 추가

  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        completed: false,
      };

      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  // 할 일 제거 시 todoList wprj
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  // completed : true
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;
