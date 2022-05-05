import React from 'react';

export default function Movie(props) {
  return (
    <div style={{ backgroundColor: props.posterColor }}>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <p>{props.director}</p>
        
    </div>
  );
}
