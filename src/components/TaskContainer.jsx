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
  console.log(tasksList); 

  // Function
  /* Cette fonction nous servira a ajouter une tâche */
  const addTask = (title) => {
    const newTask = {
      id: tasksList.length + 1,
      title: title,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  );
}
