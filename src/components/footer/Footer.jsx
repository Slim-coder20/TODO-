import React from 'react'
import styles from "./footer.module.css"

// Ce composant nous sert a afficher le champ de saisie 
export default function Footer() {
  return (
   <footer>
    <code className={styles.footer}>
        Avec Todo-React tu as éliminé x tâche"s". 
    </code>
   </footer>
  )
}
