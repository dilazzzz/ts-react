import React from 'react';
import './App.css';
import {data , getData} from "./data";

function App() {



  return (
    <div className="App">
        {data.map( data => {
            const initialData = getData(data)
            return (
                <div>
                    <h1>{initialData.initials}</h1>
                    <h2>{initialData.age}</h2>
                    <h2>{initialData.address}</h2>
                    <h2>{initialData.favGames.join(', ')}</h2>
                    <h2>{initialData.isDaun}</h2>
                    <h2>{initialData.work}</h2>
                </div>
            )
        })}
    </div>
  );
}

export default App;
