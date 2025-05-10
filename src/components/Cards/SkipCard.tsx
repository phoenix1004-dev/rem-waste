import type { Skip } from "../../types";
import checkIcon from "../../assets/check.svg";

interface SkipCardProps {
  skip: Skip;
  onSelect: (skipId: number) => void;
  isSelected: boolean;
}

export default function SkipCard({
  skip,
  onSelect,
  isSelected,
}: SkipCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
      <div className="relative p-4">
        <img
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
          alt={"image-" + skip.size}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
          {skip.size} Yards
        </div>

        {isSelected && (
          <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
            <img src={checkIcon} alt="Selected" className="h-6 w-6" />
          </div>
        )}
      </div>

      <div className="px-6 pt-2 pb-6 text-left">
        <h2 className="text-3xl font-bold text-white mb-2">
          {skip.size + " Yard Skip"}
        </h2>
        <p className="text-base text-gray-400 mb-6">
          {skip.hire_period_days + " day hire period"}
        </p>

        <div className="text-2xl font-bold text-blue-600 mb-6">
          £{skip.price_before_vat}
        </div>

        <button
          onClick={() => onSelect(skip.id)}
          className={`w-full text-white text-lg py-3 rounded-md transition-colors flex items-center justify-center cursor-pointer
            ${
              isSelected
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-[#222] hover:bg-[#333]"
            }`}
        >
          {isSelected ? "Selected" : "Select This Skip"}{" "}
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}
