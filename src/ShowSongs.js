import React, { useState, useEffect } from 'react';

function ShowSongs() {
    const [listkysely, setListKysely] = useState([]);

    useEffect(() => {
        fetch('https://songdatabase-harjoitustyo.herokuapp.com/songs')
        .then(res => res.json())
        .then(items => {
            setListKysely(items)
        })
        .catch(err =>console.error(err))
    }, []);

    return(
        <div>
            <h1>Songs DB</h1>
                {
                listkysely.map((song, index) =>
                <ul key={index}>{song.title}
                    <li>{song.genre}</li>
                    <li>{song.length}</li>
                    <li>{song.album.name}</li>
                    <li>{song.album.artist}</li>
                </ul>
                )
                }
            
        </div>
    )

}

export default ShowSongs;