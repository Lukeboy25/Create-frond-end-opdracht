import React from 'react';

function Specie(props) {
    const { specie } = props;

    return (
        <div className="format" key={specie.id}>
            <p>Name : <b>{specie.name}</b></p>
            <p>Classification : {specie.classification}</p>
            <p>Designation : {specie.designation}</p>
            <p>Aerage_height : {specie.average_height}</p>
            <p>Skin_colors : {specie.skin_colors}</p>
            <p>Hair_colors : {specie.hair_colors}</p>
            <p>Average_lifespan : {specie.average_lifespan}</p>
            <p>Language : {specie.language}</p>
            <hr/>

        </div>
    );
}


export default Specie;
