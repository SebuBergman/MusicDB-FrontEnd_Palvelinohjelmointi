import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUp from './PopUp.js'

function FetchSongs() {
    //Get Album names for Id popup / also popupbutton
    const [listalbumnames, setListAlbumNames] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);

    const apiUrlListAlbums = `https://songdatabase-harjoitustyo.herokuapp.com/albums/`;

    useEffect(() => {
        fetch(apiUrlListAlbums)
            .then(response => response.json())
            .then(responseData => {
                setListAlbumNames(responseData)
            })
            .catch(err => console.error(err))
    }, [apiUrlListAlbums]);

    return (
        <div className="btn">
            <button className="btn btn-outline-info" onClick={() => setButtonPopup(true)}>Album ID's here</button>
            <div>
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <table id="tablecss">
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Artist</td>
                            </tr>
                            {
                            listalbumnames.map((album, index) => 
                                <tr key={index} >
                                    <td>{album.albumid}</td>
                                    <td>{album.name}</td>
                                    <td>{album.artist}</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </PopUp>
            </div>
        </div>
    )
}
export default FetchSongs;