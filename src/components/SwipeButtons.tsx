interface SwipeButtonsProps {
  onLike: () => void;
  onPass: () => void;
}

export default function SwipeButtons({ onLike, onPass }: SwipeButtonsProps) {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={onPass}
        className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-semibold transition-all hover:scale-105 cursor-pointer"
      >
        Pasar ✕
      </button>
      <button
        onClick={onLike}
        className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold transition-all hover:scale-105 cursor-pointer"
      >
        Me gusta ♥
      </button>
    </div>
  );
}
