import React from 'react';

function Person(props) {
    const { person } = props;

    return (
        <div className="format" key={person.id}>
            <p>Name : <b>{person.name}</b></p>
            <p>Height :{person.height}</p>
            <p>Mass : {person.mass}</p>
            <p>Hair_color : {person.hair_color}</p>
            <p>Skin_color : {person.skin_color}</p>
            <p>Birth_year : {person.birth_year}</p>
            <p>Gender : {person.gender}</p>
            <hr/>
        </div>
    );
}

export default Person;
