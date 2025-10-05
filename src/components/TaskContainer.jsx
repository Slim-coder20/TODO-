import React from "react";
import Header from "./header/Header";
import TaskInput from "./taskinput/TaskInput";
import TaskList from "./taskList/TaskList";
import Footer from "./footer/Footer";
import { useState } from "react";
// Ce composant va nous permettre d'affiché l'integralité des composants de notre todo  //
export default function TaskContainer() {
  /*State : ce State va ête l'état de la liste des tâches qui va nous servir 
  dans toutes les opérations c'est à dire modifier ou supprimer ou ajouter une Tâche .
  */
  const [tasksList, setTasksList] = useState([]);
  //console.log(tasksList);

  // Function
  /* Cette fonction nous servira a ajouter une tâche */
  const addTask = (title) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length - 1 ].id + 1 : 1, 
      title: title,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  // Cette fonction va nous permettre d'éditer une tache //
  const editTask = (id, completedValue) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  // Cette fonction va nous servire a supprimer la tâche //
  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  // Cette fonction a compter les tâches à accomplir //
  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks,
    };
  };

  const { completedTasks, incompletedTasks } = getTaskCounts();
  console.log(completedTasks, incompletedTasks);

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
}
