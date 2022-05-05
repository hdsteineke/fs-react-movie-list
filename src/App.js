import './App.css';
import { useState } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState(['']);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [posterColor, setPosterColor] = useState('');


  function submitMovie(e) {
    e.preventDefault();

    const newMovie = {
      title,
      year,
      director,
      posterColor
    };

    setAllMovies([...allMovies, newMovie]);

    setTitle('');
    setYear('');
    setDirector('');
    setPosterColor('');
  }

  function deleteMovie(title) {
    const deleteIndex = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(deleteIndex, 1);

    setAllMovies([...allMovies]);
  }

  function filterMovies(input) {
    if (input) {
      const matchingMovies = allMovies.filter(movie => movie.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredMovies([...matchingMovies]);
    } else {
      setFilteredMovies([...allMovies]);
    }
  }

  return (
    <div className="App">
      <div className="movie-draft">
        <MovieForm 
          title={title}
          setTitle={setTitle}
          year={year}
          setYear={setYear}
          director={director}
          setDirector={setDirector}
          posterColor={posterColor}
          setPosterColor={setPosterColor}
          submitMovie={submitMovie}
          allMovies={allMovies}
        /> 
        <Movie 
          title={title}
          year={year}
          director={director}
          posterColor={posterColor}/>
      </div>

      <div className="movie-list">
        <MovieList 
          movies={filteredMovies.length ? filteredMovies : allMovies}
          
          deleteMovie={deleteMovie}/>
      </div>
    </div>
  );
}

export default App;
