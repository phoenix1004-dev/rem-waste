export interface Skip {
  id: string;
  name: string;
  size: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export interface SkipResponse {
  skips: Skip[];
  location: {
    postcode: string;
    area: string;
  };
}