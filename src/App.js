import logo from './logo.svg';
import ShowAlbum from './ShowAlbum';
import ShowSongs from './ShowSongs';
import Home from './Home';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './App.css';

function App() {
  const [value, setValue] = useState('home');
    const handleTabChange = (event, value) => {
        setValue(value);
    };

    return (
    <div className="App">
        <Tabs value={value} onChange={handleTabChange}>
            <Tab value="home" label="Home" />
            <Tab value="showalbum" label="ShowAlbum" />
            <Tab value="showsongs" label="ShowSongs" />
        </Tabs>
        {value === 'home' && <Home />}
        {value === 'showalbum' && <ShowAlbum />}
        {value === 'showsongs' && <ShowSongs />}
    </div>);
}

export default App;
