const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const search = document.getElementById("search");

search.addEventListener("keydown", async (e) => {
  if (e.key === 'Enter' && search.value) {
    const searchParam = search.value;
  
    const response = await fetch(SEARCH_API + searchParam);
    const json = await response.json();
  
    insertMovies(json.results);

    search.value = '';
  }
});

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();

  insertMovies(json.results);
}

function insertMovies(movies) {
  let template = '';
  
  Array.from(movies).forEach(movie => {
    template += `
    <article class="movie">
      <figure class="movie-poster">
        <img
          src="${IMG_PATH + movie.poster_path}"
          alt="${movie.title}"
        />
        <figcaption>${movie.title} <span class="movie-rating ${getColorRating(movie.vote_average)}">${movie.vote_average}</span></figcaption>
      </figure>
  
      <section class="movie-overview">
        <div class="movie-overview__title">Overview</div>
  
        <div class="movie-overview__content">${movie.overview}</div>
      </section>
    </article>
    `;
  });
  
  document.querySelector(".movies-container").innerHTML = template;
}

function getColorRating(voteAverage) {
  if (+voteAverage > 8) {
    return 'green';
  } else if (+voteAverage > 5) {
    return 'orange';
  } else {
    return 'red'
  }
}

getMovies();
