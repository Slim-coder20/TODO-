import React from "react";
import styles from "./taskList.module.css";
import TaskItem from "../taskItem/TaskItem";
// Ce composant est utilisé pour afficher la liste des tâches
export default function TaskList({
  tasksList,
  editTask,
  deleteTask,
  incompletedTasks,
}) {
  const taskList = tasksList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));
  return (
    <div className="box">
      <h2 className={styles.title}>
        Il te reset encore {incompletedTasks} tâches a accomplir !
      </h2>
      {tasksList && tasksList.length > 0 && (
        <ul className={styles.container}>{taskList}</ul>
      )}
    </div>
  );
}
