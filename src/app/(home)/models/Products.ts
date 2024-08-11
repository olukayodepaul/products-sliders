export interface Review {
  user_id: number;
  rating: number;
  comment: string;
}

export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  discount: number;
  availability: boolean;
  brand: string;
  category: string;
  rating: number;
  reviews?: Review[];
}
