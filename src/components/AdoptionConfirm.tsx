import type { Pet } from '../data/pets';

interface AdoptionConfirmProps {
  pet: Pet;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AdoptionConfirm({ pet, onConfirm, onCancel }: AdoptionConfirmProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-auto text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        ¡Quieres adoptar a {pet.name}!
      </h3>
      <img
        src={pet.photo}
        alt={pet.name}
        className="w-32 h-32 rounded-full mx-auto my-4 object-cover border-4 border-pink-200"
      />
      <p className="text-gray-600 mb-4">
        Confirmar adopción de {pet.name} ({pet.breed})
      </p>
      <div className="bg-pink-50 rounded-lg p-4 mb-6 text-left space-y-2">
        <p className="text-sm text-gray-700">📍 Agenda tu visita al refugio</p>
        <p className="text-sm text-gray-700">📞 Contacto del refugio: +502 2222-3333</p>
        <p className="text-sm text-gray-700">🕐 Horario: Lun-Sáb 9am-5pm</p>
        <p className="text-sm text-gray-700">📋 Agendar cita de adopción</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition cursor-pointer"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition cursor-pointer"
        >
          Confirmar adopción
        </button>
      </div>
    </div>
  );
}
