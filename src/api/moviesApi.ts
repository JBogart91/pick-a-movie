import { handleResponse, handleError } from "./apiUtils";
import { movie } from "../types/pickAMovieTypes";
const baseUrl = process.env.API_URL + "/movies/";

export function getMovies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveMovie(movie: movie) {
  return fetch(baseUrl + (movie.id || ""), {
    method: movie.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMovie(id: number) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
