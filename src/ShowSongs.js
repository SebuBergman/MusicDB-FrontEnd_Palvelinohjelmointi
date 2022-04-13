import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowSongs() {
    const [listsongs, setListSongs] = useState([]);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = () => {
        fetch("https://songdatabase-harjoitustyo.herokuapp.com/songs")
            .then(response => response.json())
            .then(data => setListSongs(data))
    }

    const columns = [
        { field: 'title', sortable: true, filter: true},
        { field: 'genre', sortable: true, filter: true},
        { field: 'album.name', sortable: true, filter: true},
        { field: 'album.artist', sortable: true, filter: true},
        { field: 'album.releaseyear', sortable: true, filter: true},
        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
        }
    ]

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