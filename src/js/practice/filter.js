
//archivo nuevo que se ha creado para añadir el filtrado de las categorías de la películas
//en el archivo main se ha puesto la ruta de este archivo con import

import { movies } from "../data/movies";

console.clear();

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
select.addEventListener('input', filtrarDatos)

Object.entries(categories).forEach(entry => {
  const option = document.createElement('option');
  option.value = entry[0];
  option.textContent = entry[1];
  select.appendChild(option);
})

const div = document.querySelector('#select');
div.appendChild(select);


async function filtrarDatos() {
  let copyMovies = [...movies];

  const categoriesSelected = document.querySelector('#categoriesSelected');
  console.log(categoriesSelected);


  // filtra

  const filtrarCategoria = async (films) => {
    console.log(Object.values(categories));
    if (categoriesSelected != null && categoriesSelected.value !== "" && Object.keys(categories).includes(categoriesSelected.value)) {

      let filtrado = films.filter(movie => movie.category.toLowerCase() === categoriesSelected.value.toLowerCase())


      return filtrado;
      
    } else {
      return films;
    }
  }

  let as = await filtrarCategoria(copyMovies)

  console.log(as);

}


