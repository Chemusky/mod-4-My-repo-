import { movies } from "../data/movies";
import { getMoviePosterUrl } from "../utils/movie-utils";








// Add listeners to grid/list buttons
const gridButton = document.querySelector(".grid");
const listButton = document.querySelector(".list");

gridButton.addEventListener("click", clickGrid);
listButton.addEventListener("click", clickList);


function clickGrid() {
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


function clickList() {
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
clickGrid()


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
