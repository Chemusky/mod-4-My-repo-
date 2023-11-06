 import { movies } from "../data/movies";
 import { getMoviePosterUrl } from "../utils/movie-utils";

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

  //TO BE COMPLETED (Add description, director, etc.)
 function createMovieElement(movieObj) {
   const movieElement = document.createElement("div");
   movieElement.className = "movie";
   movieElement.appendChild(createPosterElement(movieObj.poster));
   movieElement.appendChild(createTitleElement(movieObj.title));
   movieElement.appendChild(createDataElement(movieObj.rating, movieObj.year));
   return movieElement;
 }
 const movieContainer = document.createElement("div");
 movieContainer.className = "movie-container";

 for (let i = 0; i < array.length; i++) {
     const movie = movies[i];
     const movieElement = createMovieElement(movie);
     movieContainer.appendChild(movieElement);
 }




 document.querySelector("#root").appendChild(movieContainer);
