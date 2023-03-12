import React from 'react';
import styles from './main.module.css';
export const Main = ({ todos, deleteOneTodo, deleteList }) => {
  if (!todos.length) {
    return <p>Todo List NULL</p>;
  }

  return (
    <>
      <main className={styles.wrapper}>
        <ul className="list-group">
          {todos.map((todo, index) => {
            return (
              <li
                key={todo.id}
                className="list-group-item bs-purple d-flex justify-content-center align-items-center">
                <span>
                  {index + 1}. {todo.title}
                </span>
                <div data-actions>
                  <button
                    onClick={() => deleteOneTodo(todo.id)}
                    type="submit"
                    className="btn btn-danger mx-3">
                    delete List
                  </button>
                  <button
                    onClick={() => console.log('edit')}
                    type="button"
                    className="btn btn-warning">
                    Edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <button onClick={deleteList} type="submit" className="btn btn-danger m-3">
          ALL DELETE LIST
        </button>
      </main>
    </>
  );
};
