import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MovieDetail from './components/MovieDetail'
import moviesData from './data/movies.json'

function App() {
  // State pour gérer les films (initialiser avec les données JSON)
  const [movies, setMovies] = useState(moviesData)

  // Fonction pour ajouter un nouveau film
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Fonction pour gérer les changements de filtre
  const handleFilterChange = () => {
    // Cette fonction peut être utilisée pour d'autres traitements si nécessaire
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            movies={movies}
            onAddMovie={handleAddMovie}
            onFilterChange={handleFilterChange}
          />
        }
      />
      <Route
        path="/movie/:id"
        element={
          <MovieDetail movies={movies} />
        }
      />
    </Routes>
  )
}

export default App
