import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className='movie-list'>
        MovieList
      {props.movies.map((movie, i) =>
        <Movie key={`${movie.title}-${movie.director}-${i}`}
          movie={movie}
          deleteMovie={props.deleteMovie}
        />
      )}
    </div>
  );
}
