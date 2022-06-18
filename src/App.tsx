import React from 'react';
import EventsExample from "./components/event/EventsExample";
import UsersPage from "./components/user/UsersPage";
import TodosPage from "./components/todo/TodosPage";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import CardPage from "./components/card/CardPage";
import UserItemPage from "./components/user/UserItemPage";
import TodoItemPage from "./components/todo/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div style={{paddingBottom: '1rem'}}>
                    <NavLink to={'/users'} style={{marginRight: 10}}>Пользователи</NavLink>
                    <NavLink to={'/todos'} style={{marginRight: 10}}>TODO список</NavLink>
                    <NavLink to={'/events'} style={{marginRight: 10}}>Примеры событий</NavLink>
                    <NavLink to={'/card'}>Карточка</NavLink>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/events'} element={<EventsExample/>}/>
                    <Route path={'/card'} element={<CardPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;