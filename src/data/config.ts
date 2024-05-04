export class Config {
  constructor(private readonly env = import.meta.env) {}

  getEndpoint(endpoint = "/") {
    return new URL(endpoint, this.env.VITE_API_ENDPOINT).toString();
  }
}
