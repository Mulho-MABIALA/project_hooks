import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="w-full flex flex-col justify-center items-center py-32 bg-gradient-to-b from-gray-900/50 to-black rounded-2xl border border-gray-800/50">
        <div className="text-5xl mb-4 opacity-50">🎬</div>
        <p className="text-gray-500 text-lg font-semibold mb-2">Aucun film trouvé</p>
        <p className="text-gray-600 text-sm">Essayez de modifier vos filtres</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-300 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-gradient-to-b from-red-600 to-red-700 rounded" />
          Films disponibles
          <span className="text-sm font-normal text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full ml-auto">
            {movies.length} film{movies.length > 1 ? 's' : ''}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} movieId={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
