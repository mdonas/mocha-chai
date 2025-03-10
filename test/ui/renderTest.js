import CharacterRenderer from "../../app/ui/characterRender.js";

// Suite de pruebas para CharacterRenderer
describe("CharacterRenderer", function () {
  let characterRenderer;
  let resultsContainer;
  let cardTemplate;
  let errorContainer;

  // Configuración antes de cada prueba
  beforeEach(function () {
    // Crear elementos DOM para las pruebas
    resultsContainer = document.createElement("div");
    resultsContainer.id = "results-container";

    cardTemplate = document.createElement("div");
    cardTemplate.id = "card-template";
    cardTemplate.innerHTML = `
      <div
        class="card col-xl-3 col-lg-4 col-md-6 col-sm-12 rounded-0 border-brown"
      >
        <div class="card-body">
          <img class="img-fluid w-100" src="" alt="" />
          <h5 class="card-title"></h5>
          <p class="estado"></p>
          <p class="genero"></p>
          <p class="especies"></p>
        </div>
      </div>
    `;

    errorContainer = document.createElement("div");
    errorContainer.id = "error-container";

    // Agregar elementos al DOM
    document.body.appendChild(resultsContainer);
    document.body.appendChild(cardTemplate);
    document.body.appendChild(errorContainer);

    // Crear instancia de CharacterRenderer
    characterRenderer = new CharacterRenderer(
      resultsContainer,
      cardTemplate,
      errorContainer
    );
  });

  // Limpieza después de cada prueba
  afterEach(function () {
    // Eliminar elementos del DOM
    document.body.removeChild(resultsContainer);
    document.body.removeChild(cardTemplate);
    document.body.removeChild(errorContainer);
  });

  // Prueba para clearCharacters()
  describe("Limpiar personajes", function () {
    it("Debe limpiar el contenedor de resultados", function () {
      // Agregar algunos elementos al contenedor de resultados
      resultsContainer.innerHTML = "<div>Personaje de prueba</div>";
      expect(resultsContainer.children.length).to.be.greaterThan(0);

      // Ejecutar el método a probar
      characterRenderer.clearCharacters();

      // Verificar que el contenedor esté vacío
      expect(resultsContainer.innerHTML).to.equal("");
    });
  });

  // Pruebas para renderCharacters()
  describe("Renderizar personajes", function () {
    it("Debe renderizar personajes cuando se proporcionan datos válidos", function () {
      // Datos de prueba
      const characters = {
        results: [
          {
            name: "Rick Sanchez",
            species: "Human",
            status: "Alive",
            gender: "Male",
            image: "https://example.com/rick.jpg",
          },
          {
            name: "Morty Smith",
            species: "Human",
            status: "Alive",
            gender: "Male",
            image: "https://example.com/morty.jpg",
          },
        ],
      };

      // Ejecutar el método a probar
      characterRenderer.renderCharacters(characters);

      // Verificar que se hayan creado las tarjetas
      expect(resultsContainer.children.length).to.equal(2);
      console.log(resultsContainer.querySelectorAll(".card"));
      expect(
        resultsContainer.querySelector(".card-title").textContent
      ).to.equal("Rick Sanchez");
      expect(
        resultsContainer
          .querySelectorAll(".card")[1]
          .querySelector(".card-title").textContent
      ).to.equal("Morty Smith");

      // Verificar que el contenedor de errores esté vacío
      expect(errorContainer.style.display).to.equal("");
    });

    it("Debe mostrar un mensaje de error cuando no hay datos válidos", function () {
      // Ejecutar el método a probar con datos no válidos
      characterRenderer.renderCharacters({});

      // Verificar que se muestre el mensaje de error
      expect(errorContainer.style.display).to.not.equal("none");
      expect(errorContainer.textContent).to.include(
        "No hay resultados para mostrar"
      );

      // Verificar que el contenedor de resultados esté vacío
      expect(resultsContainer.innerHTML).to.equal("");
    });

    it("Debe mostrar un mensaje de error cuando se proporciona un array vacío", function () {
      // Ejecutar el método a probar con array vacío
      characterRenderer.renderCharacters({ results: [] });
      // Verificar que se muestre el mensaje de error
      expect(errorContainer.style.display).to.not.equal("none");
      expect(errorContainer.textContent).to.include(
        "No hay resultados para mostrar"
      );

      // Verificar que el contenedor de resultados esté vacío
      expect(resultsContainer.innerHTML).to.equal("");
    });
  });
});
