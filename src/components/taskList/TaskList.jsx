import React from "react";
import styles from "./taskList.module.css";
import TaskItem from "../taskItem/TaskItem";
// Ce composant est utilisé pour afficher la liste des tâches
export default function TaskList() {
  return (
    <div className="box">
      <h2 className={styles.title}>
        Il te reset encore x tâches a accomplir !
      </h2>
      <ul className={styles.container}>
        <TaskItem />
      </ul>
    </div>
  );
}
