import { movies } from "../data/movies";

export function addSort(sortBy) {
    const optionsData = [
        { text: "Sort by:", value: "sort-by" },
        { text: "Title alphabetically A-Z.", value: "title-asc" },
        { text: "Title alphabetically Z-A.", value: "title-desc" },
        {
            text: "Director alphabetically A-Z.",
            value: "director-asc",
        },
        {
            text: "Director alphabetically Z-A.",
            value: "director-desc",
        },
        { text: "Year in ascending order.", value: "year-asc" },
        { text: "Year in descending order.", value: "year-desc" },
    ];

    optionsData.forEach((data) => {
        const element = document.createElement("option");
        element.textContent = data.text;
        element.value = data.value;
        sortBy.appendChild(element);
    });
}

export function ordenarPeliculas(copiaMovies, criterio) {
    copiaMovies.sort((a, b) => {
        let valorA, valorB;

        switch (criterio) {
            case "title-asc":
                valorA = a.title;
                valorB = b.title;
                break;
            case "title-desc":
                valorA = b.title;
                valorB = a.title;
                break;
            case "director-asc":
                valorA = a.director;
                valorB = b.director;
                break;
            case "director-desc":
                valorA = b.director;
                valorB = a.director;
                break;
            case "year-asc":
                valorA = a.year;
                valorB = b.year;
                break;
            case "year-desc":
                valorA = b.year;
                valorB = a.year;
                break;
            default:
                return 0;
        }

        if (valorA < valorB) {
            return -1;
        }
        if (valorA > valorB) {
            return 1;
        }
        return 0;
    });

    return copiaMovies;
}