import React from 'react';

function Genre(props) {
    return <>
        {props.genreList.map((elem) => { return <span className="mt-0 mb-0" key={elem.id}>{elem.name}</span> })}
    </>

}

export default Genre;