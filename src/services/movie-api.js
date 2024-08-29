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
    console.log("filmes aqui", data);
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

const getTopRatedSeries_2024 = async (page) => {
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
      `https://api.themoviedb.org/3/discover/tv?language=en-US&page=${page}&sort_by=popularity.desc&first_air_date.gte=2015-01-01&first_air_date.lte=2024-12-31&vote_average.gte=8&include_null_first_air_dates=false&with_genres=10759,18,10765&without_genres=16&with_origin_country=US`,
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

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?include_adult=true&include_video=true&language=en-US",
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
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

const getTopRatedSeries = async (page) => {
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
      `https://api.themoviedb.org/3/discover/tv?language=en-US&page=${page}&sort_by=popularity.desc&first_air_date.gte=2010-01-01&include_null_first_air_dates=false&with_genres=10759,10765&without_genres=16&vote_average.gte=6`,
      options
    );
    const data = await response.json();
    console.log("testant", data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getTopRatedSeries_2014 = async (page) => {
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
      `https://api.themoviedb.org/3/discover/tv?language=en-US&page=${page}&sort_by=popularity.desc&first_air_date.gte=2013-01-01&first_air_date.lte=2018-12-31&vote_average.gte=7&include_null_first_air_dates=false&without_genres=16`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getTopRatedSeries_heroes = async (page) => {
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
      `https://api.themoviedb.org/3/keyword/180547/movies?page=${page}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getTopRatedSeries_heroes_dc = async (page) => {
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
      `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=${page}&with_keywords=9715&without_keywords=180547&with_genres=28,12&include_adult=false&include_video=false`,
      options
    );
    const data = await response.json();
    console.log("cu", data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getArtists = async (page) => {
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
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    console.log("cu", data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getMovieDetailByID = async (movieID) => {
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
      `https://api.themoviedb.org/3/movie/${movieID}`,
      options
    );
    const data = await response.json();
    console.log("detalhes do filmes aqui", data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getMovieCreditsByID = async (movieID) => {
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
      `https://api.themoviedb.org/3/movie/${movieID}/credits?`,
      options
    );
    const data = await response.json();
    console.log("creditos do filme aqui", data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getMovieVideos = async (movieID) => {
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
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      options
    );
    const data = await response.json();
    console.log("OLHA OS VIDEOS DO FILME AQUI", data);
    return data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const getMovieByGenre = async (genreID, page) => {
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
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&vote_average.gte=7&primary_release_date.gte=2010-01-01&page=${page}`,
      options
    );
    const data = await response.json();
    console.log("OLHA OS VIDEOS DO FILME AQUI", data);
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
  searchTVGenres,
  getTopRatedSeries,
  getTopRatedSeries_2014,
  getTopRatedSeries_2024,
  getTopRatedSeries_heroes,
  getTopRatedSeries_heroes_dc,
  getArtists,
  getMovieDetailByID,
  getMovieCreditsByID,
  getMovieVideos,
  getMovieByGenre,
};
