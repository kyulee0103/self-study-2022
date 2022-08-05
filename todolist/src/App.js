import { useState } from "react";
import styles from "./Todo.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodoList((now) => [todo, ...now]);
  };
  const gettodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <div className={styles.box}>
        <form onSubmit={onSubmit}>
          <p className={styles.fontfamily}>My ToDo</p>
          <input
            onChange={gettodo}
            value={todo}
            type="text"
            className={styles.input}
            placeholder="write your todo list"
          ></input>
          <button className={styles.btn}>Add</button>
        </form>
        <ul className={styles.list}>
          {todoList.map((work, num) => (
            <li className={styles.listitem} key={num}>
              {work}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
