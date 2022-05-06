import React from 'react';

export default function Movie(props) {
  return (
    <div className="movie-poster" onClick={() => props.deleteMovie && props.deleteMovie(props.title)} style={{ backgroundColor: props.posterColor }}>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <p>{props.director}</p>
        
    </div>
  );
}
