import React from "react";
import styles from "./taskItem.module.css";

// ce composant va nous servire a afficher une tâche de notre todo //
export default function TaskItem() {
  return (
    <li className={` ${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>1</div>
        <div className={styles.contentDefault}>
          Ranger mon bureau et finir d'apprendre React
        </div>
      </div>
      <button className="button-primary">Supprimer</button>
    </li>
  );
}
