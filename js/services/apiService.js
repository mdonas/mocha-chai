class ApiService {
  constructor(baseUrl = "https://rickandmortyapi.com/api/character/") {
    this.baseUrl = baseUrl;
  }

  async getCharactersByName(name) {
    const url = `${this.baseUrl}?name=${name}`;
    const response = await fetch(url);
    return await response.json();
  }

  async getCharactersByUrl(url) {
    const response = await fetch(url);
    return await response.json();
  }
}

export default ApiService;
