import React from 'react';

export default function MovieForm(props) {
  return (
    <div className="movie-form">MovieForm
      <form onSubmit={props.submitMovie}>
        <label>Title:
          <input required value={props.title} onChange={((e) => 
            props.setTitle(e.target.value))}>

          </input>
        </label>

        <label>Year:
          <input required value={props.year} onChange={((e) => 
            props.setYear(e.target.value))}>
          </input>
        </label>

        <label>Director:
          <input required value={props.director} onChange={((e) => 
            props.setDirector(e.target.value))}>
          </input>
        </label>

        <label>Poster Color:
          <select required value={props.posterColor} onChange={((e) => 
            props.setPosterColor(e.target.value))}>
  
            <option value='yellow'>Yellow</option>
            <option value='orange'>Orange</option>
            <option value='pink'>Pink</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </label>
      </form>
    </div>
  );
}
