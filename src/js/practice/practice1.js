import { movies } from "../data/movies";
import { getMoviePosterUrl } from "../utils/movie-utils";


const movieContainer = document.createElement("div");
movieContainer.className = "movie-container";





// Add listeners to grid/list buttons
const gridButton = document.querySelector(".grid");
const listButton = document.querySelector(".list");

gridButton.addEventListener("click", clickGrid);
listButton.addEventListener("click", clickList);


function addMoviesGrid(params) {
  // este bucle sirve para poner todas las pelis
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieElement = createMovieElement(movie);
    movieContainer.appendChild(movieElement);
  }
}

function addMoviesList(params) {
  // este bucle sirve para poner todas las pelis
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieElement = createMovieElement(movie);
    movieContainer.appendChild(movieElement);
  }
}

function clickGrid() {
  movieContainer.innerHTML = "";
  addMoviesGrid();
}


function clickList() {
  movieContainer.innerHTML = "";
  addMoviesList();
}


// al poner aquí esta funcion addMoviesGrid() hace que la página cargue automaticamente con la rejilla
addMoviesGrid();
document.querySelector("#root").appendChild(movieContainer);

/*********************************************************************************/




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
function createMovieElement(movieObj) {
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


