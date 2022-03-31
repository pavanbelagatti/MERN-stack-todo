// src/App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";   //changed
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
            -------------------------- ✔️My Todo App✔️️-------------------------
                <Routes>   
                    <Route exact path="/" element={<ShowTodoList/>} />  
                    <Route path="/create-todo" element={<CreateTodo/>} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
