const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4",
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?include_adult=true&include_video=true&language=en-US",
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return undefined; 
  }
};

const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?include_adult=true&include_video=true&language=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const getUpcomingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?include_adult=true&include_video=true&language=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const searchMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=harry poter",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const searchMovieGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const searchTVGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/genre/tv/list?language=en&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  searchMovies,
  searchMovieGenres,
  searchTVGenres,
};
