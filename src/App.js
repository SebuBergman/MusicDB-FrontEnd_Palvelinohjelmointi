import ShowAlbumsPage from './components/ShowAlbumsPage';
import ShowSongsPage from './components/ShowSongsPage';
import Home from './components/Home';
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
        </Tabs>
        {value === 'home' && <Home />}
        {value === 'showsongs' && <ShowSongsPage />}
        {value === 'showalbums' && <ShowAlbumsPage />}
    </div>);
}

export default App;