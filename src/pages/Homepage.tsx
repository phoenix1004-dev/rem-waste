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
    <div className="w-full h-full max-w-7xl py-12">
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
    </div>
  );
}
