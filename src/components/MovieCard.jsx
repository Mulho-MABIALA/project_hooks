import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, movieId }) => {
  const { titre, description, posterURL, note } = movie;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-950 cursor-pointer transition-all duration-500 ease-out hover:scale-110 flex-shrink-0 group shadow-2xl hover:shadow-red-600/40"
      style={{ aspectRatio: '9/13', minWidth: '180px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image avec overlay dark */}
      <div className="relative w-full h-full">
        <img
          src={posterURL}
          alt={titre}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 brightness-50' : 'scale-100 brightness-100'
          }`}
        />

        {/* Gradient overlay permanent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Info Box */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 text-white transition-all duration-500 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        {/* Titre */}
        <h3 className="text-sm font-bold mb-2 line-clamp-2 leading-tight">
          {titre}
        </h3>

        {/* Rating Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center bg-yellow-500/80 px-2 py-1 rounded-full">
            <span className="text-xs font-bold text-black">⭐ {note.toFixed(1)}</span>
          </div>
          <span className="text-xs text-gray-300 font-medium">/10</span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Play Button avec animation */}
        <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white border-none py-2.5 px-3 rounded-lg text-xs font-bold cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider">
          <span>▶</span>
          <span>Regarder</span>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
