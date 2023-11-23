import { movies } from "../data/movies";
import { getMoviePosterUrl } from "../utils/movie-utils";
import { filtrarDatos } from "./filter";
import { addSort } from "./sort";
import { mostrarResultadosBusqueda } from "../practice/search";
import { ordenarPeliculas } from "./sort";
export let copiaMovies = movies.slice();
export let isListView;




//**Sort Button**//

let sortMovies = document.querySelector("#sortSelect");
let selectSort = document.createElement("select");
selectSort.className = "sort-button";
selectSort.addEventListener("change", showSortedMovies);

addSort(selectSort);
sortMovies.appendChild(selectSort);

function showSortedMovies() {
  copiaMovies = ordenarPeliculas(copiaMovies, selectSort.value);
  if (isListView === true) {
    clickList(copiaMovies);
  } else {
    clickGrid(copiaMovies);
  }
}
showSortedMovies();
const categories = Object.freeze({
  drama: "Drama",
  action: "Action",
  crime: "Crime",
  biography: "Biography",
  adventure: "Adventure",
  comedy: "Comedy",
});


const select = document.createElement('select');
select.name = 'categories';
select.id = 'categoriesSelected'
select.addEventListener('change', () => {
  const movieFilter = filtrarDatos(movies, categories)
  clickGrid(movieFilter)
})

Object.entries(categories).forEach(entry => {
  const option = document.createElement('option');
  option.value = entry[0];
  option.textContent = entry[1];
  select.appendChild(option);
})

const div = document.querySelector('#select');
div.appendChild(select);






// Search button
const inputSearch = document.querySelector("#searchSelect");

inputSearch.addEventListener("keyup", () => {
  let valor = inputSearch.value.toLowerCase();
  copiaMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(valor) ||
      movie.director.toLowerCase().includes(valor) ||
      movie.actors.toLowerCase().includes(valor) ||
      movie.year.toString().includes(valor)
    );
  });
  mostrarResultadosBusqueda(copiaMovies, isListView);
});













// Add listeners to grid/list buttons
const gridButton = document.querySelector(".grid");
const listButton = document.querySelector(".list");

gridButton.addEventListener("click", clickGrid);
listButton.addEventListener("click", clickList);


export function clickGrid(movies) {
  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container";
  document.querySelector("#root").innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieElement = createMovieElementGrid(movie);
    movieContainer.appendChild(movieElement);
  }
  document.querySelector("#root").appendChild(movieContainer);
  // addMoviesGrid();
}


export function clickList() {
  const movieContainer = document.createElement("div");
  movieContainer.className = "list-movie-container";
  document.querySelector("#root").innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieElement = createMovieElementList(movie);
    movieContainer.appendChild(movieElement);
  }
  document.querySelector("#root").appendChild(movieContainer);
  // addMoviesList();
}


// al poner aquí esta funcion addMoviesGrid() hace que la página cargue automaticamente con la rejilla
// addMoviesGrid();
clickGrid(movies)


/*********************************************************************************/



//  Grid elements

function createPosterElement(path) {
  const moviePosterWidth = 400;
  const element = document.createElement("img");
  element.src = getMoviePosterUrl(path, moviePosterWidth);
  element.className = "movie-poster";
  return element;
}

function createTitleElement(title) {
  const element = document.createElement("div");
  element.className = "movie-title";
  element.textContent = title;
  return element;
}

function createDataElement(rating, year) {
  const element = document.createElement("div");
  element.className = "movie-data";
  element.textContent = `Rating: ${rating} | ${year}`;
  return element;
}

function createDescriptionElement(description) {
  const element = document.createElement("div");
  element.className = "movie-other";
  element.textContent = description;
  return element;
}

function createDirectorElement(director) {
  const element = document.createElement("div");
  element.className = "movie-other";
  element.textContent = `Director: ${director} `;
  return element;
}

function createActorsElement(actors) {
  const element = document.createElement("div");
  element.className = "movie-other span";
  element.textContent = `Actors: ${actors}`;
  return element;
}

function createSumaryElement() {
  const element = document.createElement("div");
  element.className = "movie-description-heading";
  element.textContent = `Sumary`;
  return element;
}

function createCategoryElement(category) {
  const element = document.createElement("div");
  element.className = "movie-other";
  element.textContent = category;
  return element;
}

// TO BE COMPLETED (Add description, director, etc.)
function createMovieElementGrid(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";
  movieElement.appendChild(createPosterElement(movieObj.poster));
  movieElement.appendChild(createTitleElement(movieObj.title));
  movieElement.appendChild(createDataElement(movieObj.rating, movieObj.year));
  movieElement.appendChild(createSumaryElement());
  movieElement.appendChild(createDescriptionElement(movieObj.description));
  movieElement.appendChild(createDirectorElement(movieObj.director));
  movieElement.appendChild(createActorsElement(movieObj.actors));
  movieElement.appendChild(createCategoryElement(movieObj.category));
  return movieElement;
}



/*********************************************************************************/




//  List elements



function createPosterElementList(path) {
  const moviePosterWidth = 200;
  const element = document.createElement("img");
  element.src = getMoviePosterUrl(path, moviePosterWidth);
  element.className = "list-movie-img";
  return element;
}


function createTitleElementList(title) {
  const element = document.createElement("div");
  element.className = "list-movie-title";
  element.textContent = title;
  return element;
}


function createDataElementList(rating, year) {
  const element = document.createElement("div");
  element.className = "list-movie-data";
  element.textContent = `Rating: ${rating} | ${year}`;
  return element;
}

function createOtherElement1List(director) {
  const element = document.createElement("div");
  element.className = "list-movie-other";
  element.textContent = `Director: ${director}`;
  return element
}

function createOtherElement2List(actors) {
  const element = document.createElement("div");
  element.className = "list-movie-other";
  element.textContent = `Actores: ${actors}`;
  return element
}

function createMovieElementList(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "list-movie";
  movieElement.appendChild(createPosterElementList(movieObj.poster));
  movieElement.appendChild(createTitleElementList(movieObj.title));
  movieElement.appendChild(createDataElementList(movieObj.rating, movieObj.year));
  movieElement.appendChild(createOtherElement1List(movieObj.director));
  movieElement.appendChild(createOtherElement2List(movieObj.actors));
  return movieElement;
}
