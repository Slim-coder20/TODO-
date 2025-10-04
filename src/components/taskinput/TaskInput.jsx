import React from "react";
import styles from "./taskInput.module.css";

export default function TaskInput() {
  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine Tache</h2>
      <form className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder=" Indiquez un titre à votre tâche. "
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}
