import { ResponseProduct } from "../models/product";
import { ProductParams } from "../types/product";
import { HttpClient } from "./httpclient";

class ProductService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3300");
  }

  async listProducts(params?: ProductParams): Promise<ResponseProduct> {
    const url = new URL("/products", this.httpClient["baseURL"]);
    if (params) {
      if (params.page) {
        url.searchParams.set("page", params.page.toString());
      }
      if (params.categoria) {
        url.searchParams.set("categoria", params.categoria);
      }

      if (params.search) {
        url.searchParams.set("search", params.search);
      }
    }
    return this.httpClient.get(url.pathname + url.search);
  }

  async productDetails(id: string) {
    return this.httpClient.get(`/product/${id}`);
  }
}

export default new ProductService();
