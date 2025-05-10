import type { Skip } from "../../types";

interface SkipCardProps {
  skip: Skip;
  onSelect: (skipId: number) => void;
}

export default function SkipCard({ skip, onSelect }: SkipCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
      <div className="relative bg-gray-300">
        <img
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
          alt={"image-" + skip.size}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
          {skip.size} Yards
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-4xl font-bold text-white mb-2">
          {skip.size + " Yard Skip"}
        </h2>
        <p className="text-xl text-gray-400 mb-6">
          {skip.hire_period_days + " day hire period"}
        </p>

        <div className="text-5xl font-bold text-blue-600 mb-6">
          £{skip.price_before_vat}
        </div>

        <button
          onClick={() => onSelect(skip.id)}
          className="w-full bg-[#222] hover:bg-[#333] text-white text-xl py-4 rounded-md transition-colors flex items-center justify-center"
        >
          Select This Skip <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}
