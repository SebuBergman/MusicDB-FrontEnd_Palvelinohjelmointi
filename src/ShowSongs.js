import React, { useState, useEffect } from 'react';

function ShowSongs() {
    const [listsongs, setListSongs] = useState([]);

    const apiUrl = `http://localhost:8080/songs`;

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(items => {
            setListSongs(items)
        })
        .catch(err =>console.error(err))
    }, [apiUrl]);

    return(
        <div>
            <h1>Songs DB</h1>
                {
                listsongs.map((song, index) =>
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