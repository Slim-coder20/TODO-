import React from "react";
import Header from "./header/Header";
import TaskInput from "./taskinput/TaskInput";
import TaskList from "./taskList/TaskList";
import Footer from "./footer/Footer";

// Ce composant va nous permettre d'affiché l'integralité des composants de notre todo  //
export default function TaskContainer() {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
      <Footer />
    </main>
  );
}
