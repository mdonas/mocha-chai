// Importaciones para Node.js usando sintaxis de ES modules
import { expect } from "chai";
import ApiService from "../../app/services/apiService.js";

describe("ApiService test de Integración", () => {
  let apiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  afterEach(() => {
    apiService = null;
  });

  // Prueba  para verificar la conexión a la API
  it("La respuesta tiene la estrucutura correcta", async () => {
    // Act - Realizar la llamada a la API
    const result = await apiService.getCharactersByName("Rick");

    // Assert - Comprobar que la respuesta tiene la estructura correcta
    // 1. Verificar que existe un objeto info no vacío
    expect(result).to.have.property("info").that.is.an("object").that.is.not
      .empty;
    // 2. Verificar que existe un array results no vacío
    expect(result).to.have.property("results").that.is.an("array").that.is.not
      .empty;
    // 3. Verificar que existe al menos un objeto dentro de results que tenga el campo name
    expect(result.results.some((item) => item.hasOwnProperty("name"))).to.be
      .true;
  });

  it("getCharactersByName debe manejar errores", async () => {
    let error = await apiService.getCharactersByName(9999);
    expect(error).to.have.property("error");
    expect(error.error).to.be.equal("There is nothing here");
  });

  it("getCharactersByUrl debe manejar errores", async () => {
    try {
      await apiService.getCharactersByUrl(999);
    } catch (error) {
      expect(error).to.be.an("error");
      expect(error.cause.message).to.include("Invalid");
    }
  });
});
