import { useEffect, useState } from "react";
import { getSkipsData } from "../api";
import type { Skip } from "../types";
import { AREA, POSTCODE } from "../lib/constants";
import LoadingSkeleton from "../components/Loading";
import SkipCard from "../components/Cards/SkipCard";

export default function Homepage() {
  const [skips, setSkips] = useState<Skip[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  // Find the selected skip from the skips array
  const selectedSkip = skips?.find((skip) => skip.id === selectedSkipId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSkipsData(POSTCODE, AREA);
        setSkips(data);
        console.log("API Response:", data);
      } catch (err) {
        setError("Failed to fetch skips data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectSkip = (skipId: number) => {
    console.log("Selected skip:", skipId);
    setSelectedSkipId(skipId);
  };

  return (
    <div className="w-full h-full max-w-7xl px-4 py-12 pb-20">
      <h1 className="text-5xl font-bold text-center mb-6 text-white">
        Choose Your Skip Size
      </h1>
      <p className="text-xl text-center text-gray-300">
        Select the skip size that best suits your needs
      </p>

      {loading && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      )}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {!loading && skips && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              onSelect={handleSelectSkip}
              isSelected={skip.id === selectedSkipId}
            />
          ))}
        </div>
      )}

      {/* Fixed position selected skip bar */}
      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-500 py-4 px-6 justify-items-center">
          <div className="w-full max-w-7xl md:flex md:justify-between md:items-center">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <span className="text-white font-bold">
                {selectedSkip.size} Yard Skip
              </span>
              <span className="text-blue-600 font-bold text-xl">
                £{selectedSkip.price_before_vat}
              </span>
              <span className="text-gray-400">
                {selectedSkip.hire_period_days} day hire
              </span>
            </div>
            <div className="grid grid-cols-2 md:flex items-center gap-4 mt-4 md:mt-0">
              <button className="text-white bg-[#666666] rounded-lg hover:bg-[#888888] px-6 py-2">
                Back
              </button>
              <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center justify-center">
                Continue <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
