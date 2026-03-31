import { useState } from 'react';
import { pets } from './data/pets';
import PetCard from './components/PetCard';
import SwipeButtons from './components/SwipeButtons';
import AdoptionConfirm from './components/AdoptionConfirm';
import './index.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedPets, setLikedPets] = useState<number[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const currentPet = pets[currentIndex];
  const isFinished = currentIndex >= pets.length;

  const handleLike = () => {
    setLikedPets((prev) => [...prev, currentPet.id]);
    setShowConfirmation(true);
  };

  const handlePass = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleCancelAdoption = () => {
    setShowConfirmation(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setLikedPets([]);
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600">🐾 PawsMatch</h1>
        <p className="text-gray-600 mt-1">Encuentra a tu compañero perfecto</p>
      </header>

      <main className="max-w-md mx-auto">
        {isFinished ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Has visto todas las mascotas!</h2>
            <p className="text-gray-600 mb-2">
              Te gustaron {likedPets.length} de {pets.length} mascotas.
            </p>
            <button
              onClick={handleRestart}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition cursor-pointer"
            >
              Ver de nuevo
            </button>
          </div>
        ) : showConfirmation ? (
          <AdoptionConfirm
            pet={currentPet}
            onConfirm={handleConfirm}
            onCancel={handleCancelAdoption}
          />
        ) : (
          <>
            <PetCard pet={currentPet} />
            <SwipeButtons onLike={handleLike} onPass={handlePass} />
            <p className="text-center text-sm text-gray-400 mt-4">
              {currentIndex + 1} de {pets.length}
            </p>
          </>
        )}
      </main>

      {/* Adoption info footer - always visible */}
      <footer className="max-w-md mx-auto px-4 pb-8 mt-4">
        <div className="bg-white/80 rounded-xl p-4 text-center text-sm text-gray-500">
          <p>¿Quieres adoptar? Visita tu refugio local para confirmar la adopción.</p>
          <p className="mt-1">Contacto del refugio: +502 2222-3333 | Agendar visita</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
