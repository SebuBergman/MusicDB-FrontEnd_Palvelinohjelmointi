import logo from './logo.svg';
import ShowAlbums from './ShowAlbums';
import ShowSongs from './ShowSongs';
import ShowTest from './ShowTest';
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
            <Tab value="showsongs" label="Songs" />
            <Tab value="showalbums" label="Albums & Songs" />
            <Tab value="showtest" label="Test page" />
        </Tabs>
        {value === 'home' && <Home />}
        {value === 'showsongs' && <ShowSongs />}
        {value === 'showalbums' && <ShowAlbums />}
        {value === 'showtest' && <ShowTest />}
    </div>);
}

export default App;
