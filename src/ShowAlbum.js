import React, { useState, useEffect } from 'react';

function ShowAlbum() {
    const [listkysely, setListKysely] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/kaikki')
        .then(res => res.json())
        .then(items => {
            setListKysely(items)
        })
        .catch(err =>console.error(err))
    }, []);

    return(
        <div>
            <h1>Kyselyt - Front end</h1>
            <p>{listkysely.id}</p>
            <p>{listkysely.nimi}</p>
            
                {
                listkysely.map((kysely, index) =>
                <ul key={index}>{kysely.kysely.nimi}
                    <li>{kysely.kysymysteksti}</li>
                </ul>
                )
                }
            
        </div>
    )

}

export default ShowAlbum;