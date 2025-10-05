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
  // On agit sur le rendu au niveau du return à propos de l'affichage de tâches a acomplir //
  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasks > 0 && (
            <>
              Il te reset encore{" "}
              <span className="important">{incompletedTasks}</span> tâches a
              accomplir !
            </>
          )}
          {incompletedTasks === 0 && (
            <>Génial, tu as accompli toutes tes taches !</>
          )}
        </h2>
        {tasksList && tasksList.length > 0 && (
          <ul className={styles.container}>{taskList}</ul>
        )}
      </div>
    );
  }
  // Condition ou pas de tâche a faire //
  return (
    <div className="box">
      <h2 className={styles.title}>
        Tu n'a rien à faire ! Profite de ton temps libre.
      </h2>
      {tasksList && tasksList.length > 0 && (
        <ul className={styles.container}>{taskList}</ul>
      )}
    </div>
  );
}
