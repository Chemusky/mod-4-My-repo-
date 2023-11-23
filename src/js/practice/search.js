import { movies } from "../data/movies";
import { clickGrid } from "../practice/practice1"
import { clickList } from "./practice1";

export function mostrarResultadosBusqueda(movies, isListView) {
  if (isListView) {
    clickList(movies);
  } else {
    clickGrid(movies);
  }
}