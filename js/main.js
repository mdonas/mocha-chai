const formulario = document.getElementById("busqueda");
const inputNombre = document.getElementById("nombre");
const divResultados = document.querySelector(".resultados");
const urlCharacters = "https://rickandmortyapi.com/api/character/"
const templateCard = document.getElementById("template-card").content;
const btnLeft = document.querySelector("#left")
const btnRight = document.querySelector("#right")
const inputPage = document.querySelector("#inputPage")
const labelPage = document.querySelector("#labelPage")
let btnN
let btnP

//creamos un fragmento
const fragment = document.createDocumentFragment();

//llamadas a la API
async function getCharactersByName(name) {
    const urlFetch = urlCharacters + "?name=" + name;
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}
async function getCharactersByUrl(urlFetch) {
    const response = await fetch(urlFetch);
    const json = await response.json();
    return json;
}

//Eventos de carga
document.addEventListener('DOMContentLoaded', function () {
    const name = inputNombre.value.trim();
    getCharactersByName(name)
        .then(results => {
            crearBtn(results)
        });
})

formulario.addEventListener("submit", e => {
    e.preventDefault();
    const name = inputNombre.value.trim();
    getCharactersByName(name)
        .then(results => {
            crearBtn(results)
        });
});

buttons.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains("prev") | e.target.classList.contains("next")) {
        getCharactersByUrl(e.target.dataset.url)
            .then(results => {
                crearBtn(results)
            })

    }


})

//Funciones sobre los personajes y/o botones
function pintarPersonajes(personajes) {
    personajes.results.forEach(personaje => {
        templateCard.querySelector("img").setAttribute("src", personaje.image)
        templateCard.querySelector("img").setAttribute("alt", personaje.name)
        templateCard.querySelector("h5").textContent = personaje.name
        let listaP = templateCard.querySelectorAll("p")
        listaP[0].textContent = `Status: ${personaje.status}`
        listaP[1].textContent = `Genre: ${personaje.gender}`
        listaP[2].textContent = `Species: ${personaje.species}`
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    divResultados.appendChild(fragment)
}
function limpiarPersonajes() {
    divResultados.textContent = ""
}

function crearBtn(results) {
    limpiarPersonajes()
    pintarPersonajes(results);
    console.log(results)

    btnP = results.info.prev ? `<button id="prev" class="col-4 btn btn-primary prev btn-sm-height" data-url=${results.info.prev}>Anterior</button>` : ''
    btnN = results.info.next ? `<button id="next" class="col-4 btn btn-primary next btn-sm-height" data-url=${results.info.next} >Siguiente</button>` : ''
    btnLeft.innerHTML = btnP
    btnRight.innerHTML = btnN

    if (results.info.next != null) {
        //cogemos la url
        let url = results.info.next
        //buscamos la posicion de page=
        let posiPage = url.indexOf("page=")
        //cogemos el valor a partir de la posicion de page=
        //sumamos 5 para no coger page=
        let numerPageSlice = url.slice(posiPage + 5)
        //dividimos la cadena en dos por & y cogemos la primera parte que es donde esta el numero
        //restamos uno para que sea la apgina actual
        let page = numerPageSlice.split("&")[0] - 1
        inputPage.value = page
        let numPage = results.info.pages
        labelPage.innerHTML = `de ${numPage}`
    } else if (results.info.next == null & results.info.prev != null) {
        //cogemos la url
        let url = results.info.prev
        //buscamos la posicion de page=
        let posiPage = url.indexOf("page=")
        //cogemos el valor a partir de la posicion de page=
        //sumamos 5 para no coger page=
        let numerPageSlice = url.slice(posiPage + 5)
        //dividimos la cadena en dos por & y cogemos la primera parte que es donde esta el numero
        //sumamos uno para que sea la apgina actual
        let page = parseInt(numerPageSlice.split("&")[0]) + 1
        inputPage.value = page
        let numPage = results.info.pages
        labelPage.innerHTML = `de ${numPage}`
    } else {
        inputPage.value = 1
        labelPage.innerHTML = `de 1`
    }

}
