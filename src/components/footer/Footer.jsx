import React from "react";
import styles from "./footer.module.css";

// Ce composant nous sert a afficher le champ de saisie
export default function Footer({ completedTasks }) {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec Todo-React tu as éliminé {completedTasks} tâche
          { completedTasks > 1 ? "s" : ""} ! 
        </code>
      </footer>
    );
  }
  return null; 
}
