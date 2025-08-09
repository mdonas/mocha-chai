class CharacterRenderer {
  constructor(resultContainer, templateCard, errorContainer) {
    this.resultContainer = resultContainer;
    this.templateCard = templateCard;
    this.errorContainer = errorContainer;
    this.fragment = document.createDocumentFragment();
  }

  clearCharacters() {
    this.resultContainer.textContent = "";
  }

  calculateState(state) {
    if (state == "Alive") {
      return "Vivo/a"
    } else if (state == "Dead") {
      return "Muerto/a"
    } else {
      return "Desconocido"
    }
  }

  calculateGenre(genre) {
    if (genre == "Male") {
      return "Hombre"
    } else if (genre == "Female") {
      return "Mujer"
    }
  }



  renderCharacters(characters) {
    this.clearCharacters();

    if (
      !characters ||
      !characters.results ||
      !Array.isArray(characters.results) ||
      characters.results.length === 0
    ) {
      this.errorContainer.innerHTML =
        '<div class="alert alert-danger mt-5 mx-auto text-center w-50">No hay resultados para mostrar</div>';
      return characters;
    }

    characters.results.forEach((character) => {
      this.templateCard
        .querySelector("img")
        .setAttribute("src", character.image);
      this.templateCard
        .querySelector("img")
        .setAttribute("alt", character.name);
      this.templateCard.querySelector("h5").textContent = character.name;

      let paragraphs = this.templateCard.querySelectorAll("p");
      paragraphs[0].textContent = `Estado: ${this.calculateState(character.status)}`;
      paragraphs[1].textContent = `Genero: ${this.calculateGenre(character.gender)}`;
      paragraphs[2].textContent = `Especie: ${character.species}`;

      const clone = this.templateCard.cloneNode(true);
      this.fragment.appendChild(clone);
    });

    this.resultContainer.appendChild(this.fragment);
    return characters; // Para encadenamiento
  }
}

export default CharacterRenderer;
