import React, { useState, useEffect } from 'react';

function ShowAlbum() {
    const [listkysely, setListKysely] = useState([]);

    useEffect(() => {
        fetch('https://songdatabase-harjoitustyo.herokuapp.com/albums')
        .then(res => res.json())
        .then(items => {
            setListKysely(items)
        })
        .catch(err =>console.error(err))
    }, []);

    return(
        <div>
            <h1>Albums DB</h1>
                {
                listkysely.map((album, index) =>
                <ul key={index}>{album.name}
                    <li>{album.songs.title}</li>
                    <li>{album.songs.genre}</li>
                    <li>{album.songs.length}</li>
                </ul>
                )
                }
            
        </div>
    )

}

export default ShowAlbum;