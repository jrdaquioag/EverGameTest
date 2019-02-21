import React from 'react';

function ReleaseDate(props) {
    return <p>Release Date: <span className="badge badge-secondary">{props.date[1]}</span></p>
}

export default ReleaseDate