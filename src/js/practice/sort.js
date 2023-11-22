import { movies } from "../data/movies";

export function sortMovies(movies, sortBy, sortOrder) {
    let sortedMovies = movies.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return sortOrder === "asc" ? -1 : 1;
        } else if (a[sortBy] > b[sortBy]) {
            return sortOrder === "asc" ? 1 : -1;
        } else {
            return 0;
        }
    });

    return sortedMovies;
}


