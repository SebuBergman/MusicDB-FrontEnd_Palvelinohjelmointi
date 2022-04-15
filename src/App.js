import ShowAlbumsPage from './ShowAlbumsPage';
import ShowSongsPage from './ShowSongsPage';
import ShowTest from './ShowTest';
import Home from './Home';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './App.css';

function App() {
    //App handles tabs - Home/Songs/Albums/TestPage
    //Also render's the whole shabang through index.js ofc
    const [value, setValue] = useState('home');
    const handleTabChange = (event, value) => {
        setValue(value);
    };

    return (
    <div className="App">
        <Tabs value={value} onChange={handleTabChange}>
            <Tab value="home" label="Home" />
            <Tab value="showsongs" label="Songs" />
            <Tab value="showalbums" label="Albums" />
            <Tab value="showtest" label="Test page" />
        </Tabs>
        {value === 'home' && <Home />}
        {value === 'showsongs' && <ShowSongsPage />}
        {value === 'showalbums' && <ShowAlbumsPage />}
        {value === 'showtest' && <ShowTest />}
    </div>);
}

export default App;