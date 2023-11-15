
export function filtrarDatos(movies, categories) {
  const categoriesSelected = document.querySelector('#categoriesSelected');
  
  if (categoriesSelected != null && categoriesSelected.value !== "" && Object.keys(categories).includes(categoriesSelected.value)) {
    let filtrado = movies.filter(movie => movie.category.toLowerCase().includes(categoriesSelected.value.toLowerCase()))
    return filtrado;
  } else {
    return copyMovies;
  }
}


