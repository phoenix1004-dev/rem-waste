import { BASE_URL } from "../lib/constants";
import type { SkipResponse } from "../types";

export async function getSkipsData(postcode: string, area: string): Promise<SkipResponse> {
  const url = `${BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch skips:', error);
    throw error;
  }
}
