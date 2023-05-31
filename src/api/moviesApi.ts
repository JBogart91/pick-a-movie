import { handleResponse, handleError } from "./apiUtils";
import { movie } from "../types/pickAMovieTypes";

const baseUrl = process.env.API_URL + "/movies";

export const getMovies = async () => {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
}

export const saveMovie = async (movie: movie) =>  {
  try {
    const response = await fetch(baseUrl + (movie.id || ""), {
      method: movie.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(movie)
    });
    return handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
}

export const deleteMovie = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
    return handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
}
