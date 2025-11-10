import { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: 5
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseFloat(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.titre.trim() || !formData.description.trim() || !formData.posterURL.trim()) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Vérifier la note est entre 0 et 10
    if (formData.note < 0 || formData.note > 10) {
      alert('La note doit être entre 0 et 10');
      return;
    }

    // Ajouter le film
    onAddMovie(formData);

    // Réinitialiser le formulaire
    setFormData({
      titre: '',
      description: '',
      posterURL: '',
      note: 5
    });

    // Fermer le modal
    setIsOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      titre: '',
      description: '',
      posterURL: '',
      note: 5
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton pour ouvrir le modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/50 active:translate-y-0 flex items-center justify-center shadow-xl hover:scale-110 z-40"
        title="Ajouter un film"
      >
        +
      </button>

      {/* Modal Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCancel}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-red-600/30 rounded-2xl p-8 shadow-2xl shadow-red-600/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-red-600 to-pink-600 rounded"></span>
                Ajouter un film
              </h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-300"
              >
                ✕
              </button>
            </div>

            {/* Form with Image Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Titre */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="titre" className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                    🎬 Titre du film
                  </label>
                  <input
                    id="titre"
                    type="text"
                    name="titre"
                    placeholder="Ex: Mon super film"
                    value={formData.titre}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-white/5 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:bg-red-600/10 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="description" className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                    📝 Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Décrivez votre film..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="px-4 py-3 bg-white/5 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:bg-red-600/10 transition-all duration-300 backdrop-blur-sm resize-none"
                  />
                </div>

                {/* URL du poster */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="posterURL" className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                    🖼️ URL du poster
                  </label>
                  <input
                    id="posterURL"
                    type="url"
                    name="posterURL"
                    placeholder="https://example.com/image.jpg"
                    value={formData.posterURL}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-white/5 border border-red-600/20 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:bg-red-600/10 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                {/* Note */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="note" className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                    ⭐ Note ({formData.note.toFixed(1)}/10)
                  </label>
                  <input
                    id="note"
                    type="range"
                    name="note"
                    min="0"
                    max="10"
                    step="0.5"
                    value={formData.note}
                    onChange={handleInputChange}
                    className="w-full h-1 bg-gradient-to-r from-red-600/20 to-red-600/5 rounded-full appearance-none accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>0</span>
                    <span className="text-red-600 font-bold">{formData.note.toFixed(1)}</span>
                    <span>10</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg text-sm transition-all duration-300 uppercase tracking-wider"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 uppercase tracking-wider"
                  >
                    Ajouter
                  </button>
                </div>
              </form>

              {/* Right side - Image Preview */}
              <div className="flex flex-col items-center justify-start">
                <div className="w-full mb-4">
                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3 text-center">
                    📸 Aperçu du poster
                  </h3>

                  {/* Poster Card Preview */}
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl" style={{ aspectRatio: '9/13' }}>
                    {formData.posterURL ? (
                      <>
                        <img
                          src={formData.posterURL}
                          alt="Aperçu du film"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-950">
                        <span className="text-5xl mb-3 opacity-50">🎬</span>
                        <p className="text-gray-500 text-sm text-center px-4">
                          Entrez une URL de poster pour voir l'aperçu
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Info Preview */}
                  <div className="mt-4 p-4 bg-white/5 border border-red-600/20 rounded-lg backdrop-blur-sm">
                    <h4 className="text-white font-bold text-sm line-clamp-2 mb-2">
                      {formData.titre || 'Titre du film'}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3">
                      {formData.description || 'Description du film'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-yellow-500/80 px-2 py-1 rounded-full">
                        <span className="text-xs font-bold text-black">⭐ {formData.note.toFixed(1)}</span>
                      </div>
                      <span className="text-xs text-gray-400">/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMovie;
