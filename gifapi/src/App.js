import './App.css';
import SearchGif from './components/searchGif';
import React, { useState } from 'react';

function App() {
    const [term, setTerm] = useState('');

    const updateTerm = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder='search' onChange={updateTerm}></input>
            <SearchGif txt={term} />
        </div>
    );
}

export default App;