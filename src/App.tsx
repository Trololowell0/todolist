import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

function App() {

    let tasks1: Array<TasksType> = [
        {id: 1, title: "Css", isDone: true},
        {id: 2, title: "js", isDone: true},
        {id: 3, title: "react", isDone: false}
    ]
    let tasks2: Array<TasksType> = [
        {id: 1, title: "Tr", isDone: true},
        {id: 2, title: "XXX", isDone: true},
        {id: 3, title: "FFF", isDone: false}
    ]
    let tasks3: Array<TasksType> = [
        {id: 1, title: "Troll", isDone: true},
        {id: 2, title: "XXXx", isDone: true},
        {id: 3, title: "FFFf", isDone: false}
    ]


    return (
        <div className="App">
            <Todolist title="what to learn"  tasks={tasks1}/>
            <Todolist title="what to learn2" tasks={tasks2}/>
            <Todolist title="what to learn3" tasks={tasks3}/>
        </div>
    );
}

export default App;
