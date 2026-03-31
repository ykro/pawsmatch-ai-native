import type { Pet } from '../data/pets';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <div className="card bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto">
      <div className="relative">
        <img
          src={pet.photo}
          alt={pet.name}
          className="w-full h-72 object-cover"
        />
        <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
          {pet.type === 'perro' ? '🐕' : '🐈'} {pet.type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{pet.breed} · {pet.age}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{pet.bio}</p>
      </div>
    </div>
  );
}
