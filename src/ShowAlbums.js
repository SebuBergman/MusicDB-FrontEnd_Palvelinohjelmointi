import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowAlbum() {
    const [listalbums, setListAlbums] = useState([]);
    const [listalbumyear, setListAlbumYear] = useState([]);
    const [listalbumname, setListAlbumName] = useState([]);
    const [listalbumartist, setListAlbumArtist] = useState([]);
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
                setListAlbumArtist(album.artist);
                setListAlbumYear(album.releaseyear);
                setListAlbumName(album.name);
            }).catch(e => console.log(e))
    }, [apiUrl]);

    return (
        <div>   
            <div>
                    <h1>Search for album (By Id)</h1>
                    <input type="text" id="inputalbum" className="form-control" onChange={inputHandler} value={getSearch}/>
                    <button type="submit" className="btn btn-primary" id="searchbutton" onClick={submitHandler}>Search</button>
                </div>
                <div claasName="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Mumfordsonssighnomore.jpg" alt="AlbumArt" width="400" height="400" id="imgcss"/>
                            </div>
                        
                        <div id="albumh1songsdiv" className="col-md-auto">
                            <h3>{listalbumname}({listalbumyear})</h3>
                            <h5>{listalbumartist}</h5>
                            <table id="tablecss">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>Genre</td>
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
                </div>
        </div>
    )
}

export default ShowAlbum;