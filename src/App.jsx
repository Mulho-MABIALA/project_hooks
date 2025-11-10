import { useState } from 'react'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import moviesData from './data/movies.json'

function App() {
  // State pour gérer les films (initialiser avec les données JSON)
  const [movies, setMovies] = useState(moviesData)
  const [filters, setFilters] = useState({
    searchTerm: '',
    minRating: 0
  });

  // Fonction pour gérer les changements de filtre
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Fonction pour ajouter un nouveau film
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Appliquer les filtres aux films
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.titre.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesRating = movie.note >= filters.minRating;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-950 to-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-red-600/30 shadow-2xl shadow-red-600/20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90" />

        <div className="relative z-10 text-center py-16 px-6">
          <div className="inline-block mb-4">
            <span className="text-6xl">🎬</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4 leading-tight">
            MOVIEFLIX
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
            <p className="text-gray-400 text-lg font-light tracking-widest">VOTRE CINÉMA À DOMICILE</p>
            <div className="w-12 h-1 bg-gradient-to-l from-red-600 to-transparent rounded-full" />
          </div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Découvrez une sélection de films exceptionnels triés sur le volet.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        <Filter onFilterChange={handleFilterChange} />
        <MovieList movies={filteredMovies} />
      </main>

      {/* Add Movie Button */}
      <AddMovie onAddMovie={handleAddMovie} />

      {/* Footer */}
      <footer className="relative border-t border-red-600/30 bg-gradient-to-t from-black to-transparent">
        <div className="text-center py-8 px-6">
          <p className="text-gray-600 text-xs md:text-sm tracking-widest uppercase mb-2">
            MovieFlix © 2024
          </p>
          <p className="text-gray-700 text-xs">
            Votre plateforme de streaming préférée
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
