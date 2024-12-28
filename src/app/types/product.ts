import { Product } from "../models/product";

export interface ProductParams {
  page?: number;
  categoria?: string;
  search?: string;
}

export interface ResponseProduct {
  products: Product[];
  numberOfPages: number;
}
