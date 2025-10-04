import React from "react";
import styles from "./taskInput.module.css";
import { useState } from "react";

// Ce composant va nous permettre de créer des tâches
export default function TaskInput({ addTask }) {
  // State //
  const [taskTitle, setTaskTitle] = useState("");

  // On commence par créer une fonction qui va nous permettre de récupérer ce qui est saisie dans l'input //
  // Function
  const handleInputChange = (event) => {
    //event.preventDefault();
    setTaskTitle(event.target.value);
  };

  // cette fonction va nous permettre de soumettre l'ajout d'une nvelle Tâche //
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine Tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          onChange={handleInputChange}
          type="text"
          className={styles.input}
          placeholder=" Indiquez un titre à votre tâche. "
          value={taskTitle}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}
