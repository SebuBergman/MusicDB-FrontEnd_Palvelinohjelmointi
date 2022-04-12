import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowAlbum() {
    const [listalbums, setListAlbums] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchAlbums();
    }, []);

    const fetchAlbums = () => {
        fetch("https://songdatabase-harjoitustyo.herokuapp.com/albums")
            .then(response => response.json())
            .then(data => setListAlbums(data))
    }

    const columns = [
        { field: 'name', sortable: true, filter: true},
        { field: 'artist', sortable: true, filter: true},
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
                    rowData={listalbums}
                    pagination={true}
                    paginationPageSize={10}
                    suppressCellFocus={true}
                />
            </div>
        </>
    )
}

export default ShowAlbum;