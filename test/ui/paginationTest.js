// Using global chai from CDN in the browser
import PaginationController from "../../app/ui/paginationController.js";

describe("PaginationController", () => {
  let document;
  let btnLeft;
  let btnRight;
  let inputPage;
  let labelPage;
  let paginationController;

  beforeEach(() => {
    // Use the browser's document directly
    document = window.document;

    // Create pagination elements
    btnLeft = document.createElement("div");
    btnRight = document.createElement("div");
    inputPage = document.createElement("input");
    labelPage = document.createElement("span");

    // Add them to the DOM but make them hidden
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
    inputPage.style.display = "none";
    labelPage.style.display = "none";

    document.body.appendChild(btnLeft);
    document.body.appendChild(btnRight);
    document.body.appendChild(inputPage);
    document.body.appendChild(labelPage);

    // Initialize controller
    paginationController = new PaginationController(
      btnLeft,
      btnRight,
      inputPage,
      labelPage
    );
  });

  afterEach(() => {
    // Clean up DOM elements
    document.body.removeChild(btnLeft);
    document.body.removeChild(btnRight);
    document.body.removeChild(inputPage);
    document.body.removeChild(labelPage);

    btnLeft = null;
    btnRight = null;
    inputPage = null;
    labelPage = null;
    paginationController = null;
  });

  describe("Constructor", () => {
    it("Debe haberse creado correctamente el objeto", () => {
      expect(paginationController.btnLeft).to.equal(btnLeft);
      expect(paginationController.btnRight).to.equal(btnRight);
      expect(paginationController.inputPage).to.equal(inputPage);
      expect(paginationController.labelPage).to.equal(labelPage);
      expect;
    });
  });

  describe("Actualizar botones", () => {
    it("Debe crear botones de 'anterior' y 'siguiente'", () => {
      const results = {
        info: {
          prev: "https://rickandmortyapi.com/api/character/page=1",
          next: "https://rickandmortyapi.com/api/character/page=3",
        },
      };

      paginationController.updatePagination(results);
      expect(btnLeft.innerHTML).to.not.be.empty;
      expect(btnRight.innerHTML).to.not.be.empty;
      expect(btnLeft.firstElementChild.dataset.url).to.equal(results.info.prev);
      expect(btnRight.firstElementChild.dataset.url).to.equal(
        results.info.next
      );
    });

    it("Debe eliminar el boton 'anterior' porque no se da link anterior", () => {
      const results = {
        info: {
          prev: null,
          next: "https://rickandmortyapi.com/api/character/page=2",
        },
      };

      paginationController.updatePagination(results);

      expect(btnLeft.innerHTML).to.be.empty;
      expect(btnRight.innerHTML).to.not.be.empty;
      expect(btnLeft.querySelector("button")).to.be.null;
      expect(btnRight.querySelector("button").dataset.url).to.equal(
        results.info.next
      );
    });

    it("Debe eliminar el boton 'siguiente' porque no se da link siguiente", () => {
      const results = {
        info: {
          prev: "https://rickandmortyapi.com/api/character/page=1",
          next: null,
        },
      };

      paginationController.updatePagination(results);

      expect(btnLeft.innerHTML).to.not.be.empty;
      expect(btnRight.innerHTML).to.be.empty;
      expect(btnLeft.querySelector("button").dataset.url).to.equal(
        results.info.prev
      );
      expect(btnRight.querySelector("button")).to.be.null;
    });
  });

  describe("Actualizar Numero Paginas", () => {
    it("Debe indicar la pagina correcta y actualizar el total bien", () => {
      const results = {
        info: {
          prev: "https://rickandmortyapi.com/api/character/?page=1",
          next: "https://rickandmortyapi.com/api/character/?page=3",
          pages: 5,
        },
      };

      paginationController.updatePagination(results);
      paginationController.updatePageCounter(results);
      expect(inputPage.value).to.equal("2");
      expect(labelPage.textContent).to.equal("de 5");
    });

    it("Debe funcionar la primera página", () => {
      const results = {
        info: {
          prev: null,
          next: "https://rickandmortyapi.com/api/character/?page=2",
          pages: 5,
        },
      };

      paginationController.updatePagination(results);
      paginationController.updatePageCounter(results);

      expect(inputPage.value).to.equal("1");
      expect(labelPage.textContent).to.equal("de 5");
    });

    it("Debe funcionar la ultima página", () => {
      const results = {
        info: {
          prev: "https://rickandmortyapi.com/api/character/?page=4",
          next: null,
          pages: 5,
        },
      };

      paginationController.updatePagination(results);
      paginationController.updatePageCounter(results);

      expect(inputPage.value).to.equal("5");
      expect(labelPage.textContent).to.equal("de 5");
    });
  });

  describe("Esconder cuando hay error", () => {
    it("Debe eliminar los botones y poner bien las paginas ", () => {
      // Set initial values
      btnLeft.innerHTML = "<button data-url='prev-url'>Anterior</button>";
      btnRight.innerHTML = "<button data-url='next-url'>Siguiente</button>";
      inputPage.value = "2";
      labelPage.textContent = " / 5";

      paginationController.hideOnError();
      expect(btnLeft.innerHTML).to.equal("");
      expect(btnRight.innerHTML).to.equal("");
      expect(btnLeft.querySelector("button")).to.be.null;
      expect(btnRight.querySelector("button")).to.be.null;
      expect(inputPage.value).to.equal("1");
      expect(labelPage.textContent).to.equal("de 1");
    });
  });
});
