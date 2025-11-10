import { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({
      searchTerm: value,
      minRating: minRating
    });
  };

  const handleRatingChange = (e) => {
    const value = parseFloat(e.target.value);
    setMinRating(value);
    onFilterChange({
      searchTerm: searchTerm,
      minRating: value
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setMinRating(0);
    onFilterChange({
      searchTerm: '',
      minRating: 0
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-red-600/30 rounded-2xl p-8 mb-10 shadow-2xl shadow-red-600/10 backdrop-blur-md transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
          <span className="w-1 h-10 bg-gradient-to-b from-red-600 to-pink-600 rounded"></span>
          Filtrer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {/* Search Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="titre-input" className="text-xs font-bold text-gray-300 uppercase tracking-widest">
            🔍 Rechercher
          </label>
          <input
            id="titre-input"
            type="text"
            placeholder="Titre du film..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-3 bg-white/5 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:bg-red-600/10 transition-all duration-300 focus:-translate-y-0.5 backdrop-blur-sm"
          />
        </div>

        {/* Rating Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="note-input" className="text-xs font-bold text-gray-300 uppercase tracking-widest">
            ⭐ Note minimale
          </label>
          <div className="flex items-center gap-3">
            <input
              id="note-input"
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={minRating}
              onChange={handleRatingChange}
              className="flex-1 h-1 bg-gradient-to-r from-red-600/20 to-red-600/5 rounded-full appearance-none accent-red-600 cursor-pointer slider-thumb"
            />
            <div className="bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-600/20 px-3 py-1.5 rounded-lg min-w-16 text-center backdrop-blur-sm">
              <span className="text-sm font-bold text-red-600 block">
                {minRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleReset}
            className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold uppercase tracking-wider rounded-lg text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/50 active:translate-y-0 active:shadow-lg relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            <span className="relative flex items-center justify-center gap-2">
              <span>↻</span>
              <span>Réinitialiser</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter; 
