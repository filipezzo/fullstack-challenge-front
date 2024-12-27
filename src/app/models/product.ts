export type Product = {
  name: string;
  description: string;
  image_url: string;
  id: string;
  price_in_cents: number;
  sales: number;
  category: "mugs" | "t-shirts";
  quantity: number;
};

export type ResponseProduct = {
  products: Product[];
  numberOfPages: number;
};
