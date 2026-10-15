// ---- Data ----
const movies = [
  { id: 1,  name: "Resident Evil 2026",             genres: ["Horror", "Science Fiction", "Adventure"], year: 2026, rating: "7.3/10" },
  { id: 2,  name: "Obsesion",                       genres: ["Horror", "Thriller"],                      year: 2023, rating: "8.2/10" },
  { id: 3,  name: "Police Story 2",                 genres: ["Thriller", "Action", "Crime"],             year: 1988, rating: "7.0/10" },
  { id: 4,  name: "Thor",                           genres: ["Action", "Thriller", "Fantasy"],            year: 2011, rating: "6.8/10" },
  { id: 5,  name: "Wild Child",                     genres: ["Comedy", "Family"],                        year: 2008, rating: "6.8/10" },
  { id: 6,  name: "Mr. Woodcock",                   genres: ["Comedy", "Romance"],                       year: 2007, rating: "5.1/10" },
  { id: 7,  name: "Scary Movie 2",                  genres: ["Comedy", "Horror"],                        year: 2001, rating: "5.9/10" },
  { id: 8,  name: "Transcendence",                  genres: ["Thriller", "Science Fiction"],             year: 2014, rating: "6.1/10" },
  { id: 9,  name: "Goosebumps 2: Haunted Halloween",genres: ["Comedy", "Horror"],                        year: 2018, rating: "6.1/10" },
  { id: 10, name: "Pineapple Express",              genres: ["Action", "Crime"],                         year: 2008, rating: "6.6/10" }
];

// ---- Elements ----

const movieGrid = document.querySelector("#movie-grid");
const resultsCount = document.querySelector("#results-count");
const searchBar = document.querySelector("#search-bar");
const genreFilter = document.querySelector("#genre-filter");
const movieForm = document.querySelector("#movie-controls");


// --- Data ------
function getFilteredMovies() {
  const query = searchBar.value.trim().toLowerCase();
  const selectedGenre = genreFilter.value;

return movies
.filter(movie => selectedGenre === "All" || movie.genre === selectedGenre)
.filter(movie => movie.title.toLowerCase().includes(query));

// 4. ---- Render UI ----
function renderMovies(movieList) {
  movieGrid.innerHTML = ""; // clear out old card


resultsCount.textContent = movieList.length === 0 
    ? "No movies found." 
    : `Showing ${movieList.length} movie(s)`;

    movieList.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    const titleElement = document.createElement("h3");
    titleElement.textContent = movie.name;

    const infoElement = document.createElement("p");
    // Joins multiple genres with commas (e.g., "Action, Crime")
    const genreString = movie.genres.join(", ");
    infoElement.textContent = `${genreString} · ${movie.year} · ⭐ ${movie.rating}`;

    card.append(titleElement, infoElement);
    movieGrid.appendChild(card);
  });
