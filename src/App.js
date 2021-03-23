import './App.css';
import test from "./google.js";
import React from 'react';

const App = () =>  {
    return (
        <div>
            <newElem
            <h1>ogogo</h1>
          <Alena />
        <div><Header /></div>
        <Technologys />

        </div>
    );
}


const Alena = () => {
  return (
      <div>
      <img src="" alt=""/>
      <h1>ALENA</h1>

      </div>
  )
}
const Technologys = () => {
  return (
    <div></div>
  );
}

const newElem = () => {
    return (
        <p>hello new Elem</p>
    );
}

const Header = () =>  {
  return (
      <div>
        <h2 className="test">promos1 </h2>

        <a href="#">Homes</a> <br/>
        <a href="#">News</a> <br/>
        <a href="#">Messages</a>
      </div>
  );
}


const list = () => {
    return (
        <ul>
            <li>css</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>nodeJs</li>
            <li>engine</li>

        </ul>
    );
}

export default App;
