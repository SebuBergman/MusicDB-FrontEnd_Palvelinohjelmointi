import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchAlbums from "./FetchAlbums"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowAlbum() {
    //Get a list of songs from each album (Shows just one albums details)
    const [listalbums, setListAlbums] = useState([]);

    //Get Album details - One per album
    const [listalbumyear, setListAlbumYear] = useState([]);
    const [listalbumname, setListAlbumName] = useState([]);
    const [listalbumartist, setListAlbumArtist] = useState([]);
    const [listalbumart, setListAlbumArt] = useState([]);

    //Const for search
    const [getSearch, setGetSearch] = React.useState('');
    const [userSearch, setUserSearch] = React.useState('1');
    
    //Api Urls for finding album and song details
    const apiUrlAlbums = `https://songdatabase-harjoitustyo.herokuapp.com/api/albums/${userSearch}`;
    const apiUrlSongs = `https://songdatabase-harjoitustyo.herokuapp.com/api/albums/${userSearch}/songs`;

    //Input handler for user search input
    const inputHandler = (e) => {
        e.preventDefault();
        setGetSearch(e.target.value);
    };

    //Submit handler for user search input. Get's the inputed ID
    const submitHandler = (e) => {
        e.preventDefault();
        setUserSearch(getSearch);
    };

    //Fetch for song details - To list
    useEffect(() => {
        fetch(apiUrlSongs)
            .then(response => response.json())
            .then(responseData => {
                setListAlbums(responseData._embedded.songs)
            })
            .catch(err => console.error(err))
    }, [apiUrlSongs]);

    //Fetch for albums details - Into individual consts for one info for each item
    useEffect(() => {
        fetch(apiUrlAlbums)
            .then(response => response.json())
            .then(album => {
                setListAlbumArtist(album.artist);
                setListAlbumYear(album.releaseyear);
                setListAlbumName(album.name);
                setListAlbumArt(album.albumart);
            })
            .catch(err => console.error(err))
    }, [apiUrlAlbums]);

    //Return statement for rendering html. It has buttons, tables, headings and more
    return (
        <div>   
            <div>
                <h1>Search for album (By Id)</h1>
                <input type="text" id="inputalbum" className="form-control" onChange={inputHandler} value={getSearch}/>
                <button type="submit" className="btn btn-primary" id="searchbutton" onClick={submitHandler}>Search</button>
                <FetchAlbums />
            </div>
            <div className="container" id="divcontainer">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <img src={listalbumart} alt="AlbumArt" width="240" height="240" id="imgcss"/>
                    </div> 
                    <div id="albumh1songsdiv" className="col-md-auto">
                        <h3>{listalbumname} ({listalbumyear})</h3>
                        <h5>{listalbumartist}</h5>
                        <table id="tablecss">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Genre</td>
                                    <td>Length</td>
                                </tr>
                                {
                                listalbums.map((songs, index) =>
                                    <tr key={index} >
                                        <td>{songs.title}</td>
                                        <td>{songs.genre}</td>
                                        <td>{songs.length}</td>
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