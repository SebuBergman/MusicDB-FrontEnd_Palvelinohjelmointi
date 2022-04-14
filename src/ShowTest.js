import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ShowSongs() {
    const [listsongs, setListSongs] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = () => {
        fetch("https://songdatabase-harjoitustyo.herokuapp.com/api/songs")
            .then(response => response.json())
            .then(data => setListSongs(data._embedded.songs))
    }

    const deleteSong = (link) => {
    if (window.confirm('Are you sure?')) {
      fetch(link, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            setOpen(true);
            fetchSongs();
          }
          else {
            alert('Something went wrong');
          }
        })
    }
  }

    const columns = [
        { field: 'title', sortable: true, filter: true},
        { field: 'genre', sortable: true, filter: true},
        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params =>
                <IconButton color="error" onClick={() => deleteSong(params.value)}>
                <DeleteIcon />
                </IconButton>
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
                <Snackbar
                    open={open}
                    message="Song deleted"
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
            />
        </>
    )

}

export default ShowSongs;