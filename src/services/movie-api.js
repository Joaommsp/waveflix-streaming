const getPopularMovies = async (page) => {
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=5&primary_release_date.gte=2021-01-01&include_video=true",
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

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=500&primary_release_date.gte=2015-01-01&with_genres=28",
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
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

const getTopRatedSeries = async () => {
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
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_average.gte=8.0&first_air_date.gte=2013-01-01",
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};


export {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  searchMovies,
  searchMovieGenres,
  searchTVGenres,
  getTopRatedSeries
};
