import ApiService from "./services/apiService.js";
import CharacterRenderer from "./ui/characterRender.js";
import PaginationController from "./ui/paginationController.js";

document.addEventListener("DOMContentLoaded", () => {
  // Obtener referencias DOM
  const formulario = document.getElementById("busqueda");
  const inputNombre = document.getElementById("nombre");
  const divResultados = document.querySelector(".resultados");
  const divErrores = document.querySelector(".errores");
  const templateCard = document.getElementById("template-card").content;
  const btnLeft = document.querySelector("#left");
  const btnRight = document.querySelector("#right");
  const inputPage = document.querySelector("#inputPage");
  const labelPage = document.querySelector("#labelPage");
  const buttonsContainer = document.getElementById("buttons");

  // Inicializar servicios
  const apiService = new ApiService();
  const renderer = new CharacterRenderer(
    divResultados,
    templateCard,
    divErrores
  );
  const paginationController = new PaginationController(
    btnLeft,
    btnRight,
    inputPage,
    labelPage
  );

  // Función para manejar la búsqueda
  const handleSearch = async (name) => {
    try {
      const results = await apiService.getCharactersByName(name);
      renderer.renderCharacters(results);
      paginationController.updatePagination(results);
    } catch (error) {
      console.error("Error al buscar personajes:", error);
      paginationController.hideOnError();
    }
  };

  // Cargar datos iniciales
  handleSearch(inputNombre.value.trim());

  // Event listeners
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    divErrores.innerHTML = ""; // Clear previous errors
    handleSearch(inputNombre.value.trim());
  });

  buttonsContainer.addEventListener("click", async (e) => {
    e.preventDefault();
    const target = e.target;
    if (
      target.classList.contains("prev") ||
      target.classList.contains("next")
    ) {
      try {
        const results = await apiService.getCharactersByUrl(target.dataset.url);
        renderer.renderCharacters(results);
        paginationController.updatePagination(results);
      } catch (error) {
        console.error("Error al cambiar de página:", error);
        paginationController.hideOnError();
      }
    }
  });
});
