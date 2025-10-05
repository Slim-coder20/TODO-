import React from "react";
import styles from "./taskItem.module.css";

// ce composant va nous servire a afficher une tâche de notre todo //
export default function TaskItem({ task, editTask, deleteTask }) {
  return (
    <li
      className={` ${styles.container} ${
        task?.completed ? styles.success : styles.default
      }`}
      onClick={() => editTask(task.id, !task.completed)}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task?.completed ? styles.idSuccess : styles.idDefault
          }`}
        >
          {task.id}
        </div>
        <div
          className={task?.completed ? styles.contentSuccess : styles.contentDefault}
        >
          {task.title}
        </div>
      </div>
      <button className="button-primary">Supprimer</button>
    </li>
  );
}
