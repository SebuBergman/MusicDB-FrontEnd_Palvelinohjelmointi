import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowSongs() {
    //Const for the list of songs
    const [listsongs, setListSongs] = useState([]);

    //Fetch to fetch songs. Uses const for less code here
    useEffect(() => {
        fetchSongs();
    }, []);

    //The refered to fetch. Fetches songs from 
    const fetchSongs = () => {
        fetch("https://songdatabase-harjoitustyo.herokuapp.com/songs")
            .then(response => response.json())
            .then(data => setListSongs(data))
    }

    //A const for the columns found in the rendered page. Some ag-grid stuff :DD
    const columns = [
        { field: 'title', sortable: true, filter: true},
        { field: 'genre', sortable: true, filter: true},
        { field: 'album.name', sortable: true, filter: true},
        { field: 'album.artist', sortable: true, filter: true},
        { field: 'album.releaseyear', sortable: true, filter: true},
        {
            headerName: '',
            width: 100,
        }
    ]

    // Return with aggrid and div for style and theme
    return (
        <>
            <div className="ag-theme-material" style={{ height: 600, width: '90%' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={listsongs}
                    pagination={true}
                    paginationPageSize={10}
                    suppressCellFocus={true}
                />
            </div>
        </>
    )

}

export default ShowSongs;