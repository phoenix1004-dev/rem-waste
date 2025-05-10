import { useEffect, useState } from "react";
import { getSkipsData } from "../api";
import type { SkipResponse } from "../types";
import { AREA, POSTCODE } from "../lib/constants";
import LoadingSkeleton from "../components/Loading";

export default function Homepage() {
  const [skipsData, setSkipsData] = useState<SkipResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSkipsData(POSTCODE, AREA);
        setSkipsData(data);
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
    </div>
  );
}
