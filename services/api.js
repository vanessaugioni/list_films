const API_URL = "https://ghibliapi.vercel.app/films";

export async function getMovies() {
  const response = await fetch(API_URL);
  return await response.json();
}