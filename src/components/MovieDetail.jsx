import { Link } from 'react-router-dom';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900">
        <div className="text-5xl mb-4 opacity-50">🎬</div>
        <p className="text-gray-500 text-lg font-semibold mb-4">Film non trouvé</p>
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const { titre, description, posterURL, note, trailerURL } = movie;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-red-600/30 shadow-2xl shadow-red-600/20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90" />

        <div className="relative z-10 text-center py-12 px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors duration-300 mb-6 font-semibold"
          >
            <span>←</span>
            <span>Retour à l'accueil</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4 leading-tight">
            {titre}
          </h1>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center bg-yellow-500/80 px-4 py-2 rounded-full">
              <span className="text-lg font-bold text-black">⭐ {note.toFixed(1)}</span>
              <span className="text-black font-bold ml-1">/10</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Poster */}
          <div className="lg:col-span-1">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl" style={{ aspectRatio: '9/13' }}>
              <img
                src={posterURL}
                alt={titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60" />
            </div>
          </div>

          {/* Right side - Description and Trailer */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Description Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-red-600/20 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-red-600 to-red-700 rounded" />
                Description
              </h2>
              <p className="text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
                {description}
              </p>
            </div>

            {/* Trailer Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-red-600/20 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-red-600 to-red-700 rounded" />
                Bande-annonce
              </h2>

              <div className="relative w-full bg-black rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={trailerURL}
                  title={`Bande-annonce de ${titre}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Return Button */}
      <footer className="relative border-t border-red-600/30 bg-gradient-to-t from-black to-transparent">
        <div className="text-center py-8 px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 mb-6"
          >
            <span>←</span>
            <span>Retour à la page d'accueil</span>
          </Link>

          <p className="text-gray-600 text-xs md:text-sm tracking-widest uppercase mb-2">
            MovieFlix © 2024
          </p>
          <p className="text-gray-700 text-xs">
            Votre plateforme de streaming préférée
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MovieDetail;
