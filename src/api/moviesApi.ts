import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getMovies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveMovies(movie: { id: number; }) {
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
