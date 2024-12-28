import { ApiError } from "./errors";

export class HttpClient {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  async get(path: string) {
    const response = await fetch(`${this.baseURL}${path}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new ApiError(response.status, errorData.message);
    }
    return response.json();
  }
}
