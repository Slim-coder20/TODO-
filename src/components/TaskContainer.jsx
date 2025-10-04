import React from "react";
import Header from "./header/Header";
import TaskInput from "./taskinput/TaskInput";

// Ce composant va nous permettre d'affiché l'integralité de nos taches //
export default function TaskContainer() {
  return (
    <main>
      <Header />
      <TaskInput />
    </main>
  );
}
