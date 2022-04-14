import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowAlbum() {
    const [listalbums, setListAlbums] = useState([]);
    const [listalbumtitle, setListAlbumTitle] = useState([]);
    const [getSearch, setGetSearch] = React.useState('');
    const [userSearch, setUserSearch] = React.useState('1');

    const apiUrl = `https://songdatabase-harjoitustyo.herokuapp.com/albums/${userSearch}`;

    const inputHandler = (e) => {
        e.preventDefault();
        setGetSearch(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setUserSearch(getSearch);
    };

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                setListAlbums(responseData.songs)
            })
            .catch(err => console.error(err))
    }, [apiUrl]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
            return response.json();
            })
            .then(album => {
                console.log(album)
                document.getElementById('album_name').innerHTML = album.name;
                document.getElementById('album_year').innerHTML = album.releaseyear;
                document.getElementById('album_artist').innerHTML = album.artist;
            }).catch(e => console.log(e))
    }, [apiUrl]);

    return (
        <div>   
            <div>
                    <h1>Search for album (By Id)</h1>
                    <input type="text" id="inputalbum" className="form-control" onChange={inputHandler} value={getSearch}/>
                    <button type="submit" className="btn btn-primary" id="searchbutton" onClick={submitHandler}>Search</button>
                </div>
                <div id="albumsongsdiv">
                            <h1 id="albumnameh1"><p id="album_name"></p>(<p id="album_year"></p>)</h1>
                            <h4 id="artistunderline"><p id="album_artist"></p></h4>
                            <img src="https://en.wikipedia.org/wiki/Sigh_No_More_(Mumford_%26_Sons_album)#/media/File:Mumfordsonssighnomore.jpg" width="100" height="100"/>
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td></td>
                                </tr>
                                {
                                    listalbums.map((songs, index) =>
                                        <tr key={index} >
                                            <td>{songs.title}</td>
                                            <td>{songs.genre}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
        </div>
    )
}

export default ShowAlbum;