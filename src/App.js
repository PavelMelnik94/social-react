import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer
                               store={props.store}
                           />}/>

                    <Route path='/profile/:userId?'
                           render={() =>
                               < ProfileContainer
                               />}
                    />

                    <Route path='/users'
                           render={() => <UsersContainer />}
                    />

                    <Route path='/news' render={() => < News/>}/>
                    <Route path='/music' render={() => < Music/>}/>
                    <Route path='/settings' render={() => < Settings/>}/>
                </div>

            </div>
        </BrowserRouter>);
}


export default App;
