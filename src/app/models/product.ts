export type Product = {
  name: string;
  description: string;
  image_url: string;
  id: number;
  price_in_cents: number;
  sales: number;
  category: "mugs" | "t-shirts";
};

export type ResponseProduct = {
  products: Product[];
  numberOfPages: number;
};
