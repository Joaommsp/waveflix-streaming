import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import logo_full_light from "../../assets/images/logo-full-white.png";
import logo_full_branding from "../../assets/images/logo-full-brandname.png";
import logo_pacific_rim from "../../assets/images/pacific-rim-logo.png";
import c_12 from "../../assets/images/c-12.png";
import c_16 from "../../assets/images/c-16.png";
import star_rating from "../../assets/images/star-rating.png";

import notific_icon from "../../assets/images/icons/svg/notification-svgrepo-com.svg";
import user_icon from "../../assets/images/icons/svg/user-circle-svgrepo-com.svg";
import home_icon from "../../assets/images/icons/svg/home-smile-svgrepo-com.svg";
import movie_icon from "../../assets/images/icons/svg/movie-recorder-svgrepo-com.svg";
import music_icon from "../../assets/images/icons/svg/music-note-svgrepo-com.svg";
import download_icon from "../../assets/images/icons/svg/download-minimalistic-svgrepo-com.svg";
import chromecast_icon from "../../assets/images/icons/svg/chromecast-svgrepo-com.svg";
import star_icon from "../../assets/images/icons/svg/star-svgrepo-com.svg";
import menu_icon from "../../assets/images/icons/svg/menu-svgrepo-com.svg";
import search_icon from "../../assets/images/icons/svg/search-alt-svgrepo-com.svg";
import play_icon from "../../assets/images/icons/svg/play-svgrepo-com.svg";
import play_styled_icon from "../../assets/images/icons/svg/play-styled-svgrepo-com.svg";
import add_icon from "../../assets/images/icons/svg/add-svgrepo-com.svg";
import trend_icon from "../../assets/images/icons/svg/trend-up-svgrepo-com.svg";
import fire_icon from "../../assets/images/icons/svg/fire-svgrepo-com.svg";
import star_filled_icon from "../../assets/images/icons/svg/star-filled-svgrepo-com.svg";
import star_yellow_icon from "../../assets/images/icons/svg/star-svgrepo-yellow.svg";
import heart_icon from "../../assets/images/icons/svg/heart-svgrepo-com.svg";
import view_icon from "../../assets/images/icons/svg/eye-svgrepo-com.svg";
import plus_icon_rounded from "../../assets/images/icons/svg/plus-circle-svgrepo-com.svg";
import facebook_icon_white from "../../assets/images/icons/svg/facebook-svgrepo-com-white.svg";
import instagram_icon_white from "../../assets/images/icons/svg/instagram-svgrepo-com-white.svg";
import youtube_icon_white from "../../assets/images/icons/svg/youtube-168-svgrepo-com-white.svg";
import twitter_icon_white from "../../assets/images/icons/svg/twitter-154-svgrepo-com-white.svg";
import send_icon from "../../assets/images/icons/svg/send-svgrepo-com.svg";
import linkedin_icon from "../../assets/images/icons/svg/linkedin-161-svgrepo-com.svg";
import github_icon from "../../assets/images/icons/svg/github-142-svgrepo-com.svg";
import behance_icon from "../../assets/images/icons/svg/behance-svgrepo-com.svg";

import {
  getMovieDetailByID,
  getTopRatedSeries_heroes_dc,
  getArtists,
  getMovieCreditsByID,
} from "../../services/movie-api";

import { useEffect, useState } from "react";

const MovieDetails = (props) => {
  const location = useLocation();
  const { movieID } = location.state;

  const [topRatedSeries_heroes_dc, setTopRatedSeries_heroes_dc] = useState([]);
  const [topRatedSeries_heroes_dcPageTwo, setTopRatedSeries_heroes_dcPageTwo] =
    useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const [popularArtistsPageTwo, setPopularArtistsPageTwo] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

  useEffect(() => {
    geTopRatedSeriesList_heroes_dc(1);
    geTopRatedSeriesList_heroes_dcPageTwo(2);
    getPopularArtists(1);
    getPopularArtistsPageTwo(2);
    getMovieDetails(movieID);
    getMovieCredits(movieID);
  }, []);

  const getMovieDetails = async (movieID) => {
    const response = await getMovieDetailByID(movieID);
    console.log(movieID);
    console.log(response);
    setMovieDetails({
      backdrop_path: response.backdrop_path,
      title: response.title,
      original_language: response.original_language,
      overview: response.overview,
      popularity: response.popularity,
      poster_path: response.poster_path,
      release_date: response.release_date,
      origin_country: response.origin_country[0],
      genres: response.genres,
      tagline: response.tagline,
      homepage: response.homepage,
      runtime: response.runtime,
    });
  };

  const getMovieCredits = async (movieID) => {
    const response = await getMovieCreditsByID(movieID);
    console.log(movieID);
    console.log(response);
    setMovieCredits({
      cast: response.cast,
    });
  };

  const geTopRatedSeriesList_heroes_dc = async (page) => {
    const response = await getTopRatedSeries_heroes_dc(page);
    setTopRatedSeries_heroes_dc(response.results);
  };

  const geTopRatedSeriesList_heroes_dcPageTwo = async (page) => {
    const response = await getTopRatedSeries_heroes_dc(page);
    setTopRatedSeries_heroes_dcPageTwo(response.results);
  };

  const getPopularArtists = async (page) => {
    const response = await getArtists(page);
    setPopularArtists(response.results);
  };

  const getPopularArtistsPageTwo = async (page) => {
    const response = await getArtists(page);
    setPopularArtistsPageTwo(response.results);
  };

  const handleMouseDrag = (e) => {
    const container = e.currentTarget;
    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const onMouseMove = (e) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      container.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const getOnlyYearDate = (date) => {
    const [year, month, day] = date.split("-");

    return `${year}`;
  };

  const formatRating = (rating) => {
    return parseFloat(Number(rating).toFixed(1));
  };

  return (
    <div className="w-full h-full select-none">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
        }}
        className="relative w-full h-full min-h-screen bg-cover bg-top bg-no-repeat "
      >
        <header className="w-full flex py-3 px items-center justify-center ">
          <div className="laptop:w-5/6 flex items-center justify-between">
            <div className="flex items-center gap-16">
              <img src={logo_full_light} className="w-24" alt="" />
              <nav className="flex items-center">
                <ul className="flex items-center gap-8">
                  <li>
                    <a
                      className="text-sm font-light text-gray-100 hover:text-blue-200 transition ease-in-out"
                      href=""
                    >
                      New
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm font-light text-gray-300 hover:text-blue-200 transition ease-in-out"
                      href=""
                    >
                      Movies
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm font-light text-gray-300 hover:text-blue-200 transition ease-in-out"
                      href=""
                    >
                      Series
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm font-light text-gray-300 hover:text-blue-200 transition ease-in-out"
                      href=""
                    >
                      Cartoons
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <a href="">
                  <img
                    className="w-7 hover:scale-125 transition ease-in-out"
                    src={notific_icon}
                    alt="..."
                  />
                </a>
                <a href="">
                  <img
                    className="w-7 hover:scale-125 transition ease-in-out"
                    src={user_icon}
                    alt="..."
                  />
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white">João M</span>
                <img
                  className="rounded-full w-8 border-white border-2"
                  src="https://i.redd.it/lph9nhgtv6pb1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>
        <aside
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%)",
          }}
          className="fixed top-0 left-0 flex  flex-col items-center h-screen w-16 px-4 pt-16 pb-4 z-50"
        >
          <nav className="flex flex-col h-full items-center justify-between">
            <ul className="w-full flex flex-col items-center gap-7">
              <li>
                <Link to={""}>
                  <img
                    className="w-6 hover:opacity-50 transition ease-in-out"
                    src={home_icon}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <img
                    className="w-6 hover:opacity-50 transition ease-in-out"
                    src={movie_icon}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <img
                    className="w-6 hover:opacity-50 transition ease-in-out"
                    src={music_icon}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <img
                    className="w-6 hover:opacity-50 transition ease-in-out"
                    src={download_icon}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <img
                    className="w-6 hover:opacity-50 transition ease-in-out"
                    src={chromecast_icon}
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <img
                    className="w-6 hover:opacity-50 transition ease-in-out"
                    src={star_icon}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
            <button className="hover:opacity-70 transition ease-in-out w-12 h-12 flex justify-center items-center hover:scale-125">
              <img className="w-6" src={menu_icon} alt="" />
            </button>
          </nav>
        </aside>

        <div>
          <div>
            <h2 className="text-5xl text-gray-100">{movieDetails.title}</h2>
            <p className="text-gray-100">{movieDetails.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <p className="text-gray-100">
              Linguagem: {movieDetails.original_language}
            </p>
            <p className="text-gray-100">
              Popularidade: {movieDetails.popularity}
            </p>
            <p className="text-gray-100">
              Lançamento: {movieDetails.release_date}
            </p>
            <p className="text-gray-100">
              País de Origem: {movieDetails.origin_country}
            </p>
            <p className="text-gray-100">
              Gêneros:{" "}
              {movieDetails.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-gray-100">Tagline: {movieDetails.tagline}</p>
            <p className="text-gray-100">
              Duração: {movieDetails.runtime} minutos
            </p>
            <a
              href={movieDetails.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Visitar página oficial
            </a>
          </div>
          <div className="flex items-center">
            {movieCredits.cast && movieCredits.cast.length > 0 ? (
              movieCredits.cast.map((actor) =>
                actor.profile_path ? (
                  <div key={actor.id}>
                    <span>{actor.name}</span>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
                  </div>
                ) : null
              )
            ) : (
              <p>No cast information available.</p> // Mensagem alternativa para quando não há elenco
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <main className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center p-4">
            <div className="w-full laptop:w-5/6 h-96 bg-cover bg-center rounded-xl bg-hod-poster  m-4 p-8 flex flex-col items-start justify-between">
              <div className="flex w-full h-7  items-center gap-3 mb-4">
                <img className="w-8" src={c_16} alt="..." />
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-sm text-gray-300 font-medium">2022</span>
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-sm text-gray-300 font-medium">
                  2 Seasons
                </span>
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <div className="flex items-center gap-1">
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-100 text-4xl font-medium">
                  House of the Dragon
                </h2>
                <p className="text-gray-300 font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur. Rutrum ultrices amet{" "}
                  <br />
                  cursus hac viverra semper tincidunt condimentum. Est mattis{" "}
                  <br />
                  bibendum euismod sed facilisis laoreet.
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <nav>
                  <ul className="flex items-center gap-4">
                    <li>
                      <button className="text-gray-100 font-light text-sm">
                        Informations
                      </button>
                    </li>
                    <li>
                      <button className="text-gray-300 font-light text-sm">
                        Trailer
                      </button>
                    </li>
                    <li>
                      <button className="text-gray-300 font-light text-sm">
                        Reviews
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className="flex">
                  <button className="flex items-center bg-blue-500 text-gray-100 py-2 px-6 gap-2 rounded-md transition ease-in-out hover:scale-110">
                    <img className="w-5" src={play_icon} alt="..." /> PLAY
                  </button>
                  <button className="flex items-center bg-transparent  text-gray-100 py-2 px-6 gap-2 transition ease-in-out hover:scale-110">
                    <img className="w-5" src={add_icon} alt="..." />
                    MY LIST
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseDown={handleMouseDrag}
            style={{ cursor: "grab" }}
          >
            {topRatedSeries_heroes_dc.map((movie) => (
              <div
                key={movie.id}
                className=" hover:scale-110 transition ease-in-out duration-500 relative min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-4 shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-44 h-64 object-cover mb-1"
                />
                <div className="absolute w-full h-full top-0 bg-transparent"></div>
                <div className="">
                  <h3 className="text-sm truncate font-medium text-white mb-2">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium text-gray-300">
                      {getOnlyYearDate(movie.release_date)}
                    </p>
                    <div className="flex items-center gap-1 z-40">
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={heart_icon} alt="" />
                      </button>
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={view_icon} alt="" />
                      </button>
                    </div>
                    <span className="text-xs flex gap-1 items-center text-yellow-500 font-medium">
                      <img className="w-3" src={star_yellow_icon} alt="..." />{" "}
                      {formatRating(movie.vote_average)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseDown={handleMouseDrag}
            style={{ cursor: "grab" }}
          >
            {topRatedSeries_heroes_dcPageTwo.map((movie) => (
              <div
                key={movie.id}
                className=" hover:scale-110 transition ease-in-out duration-500 relative min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-4 shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-44 h-64 object-cover mb-1"
                />
                <div className="absolute w-full h-full top-0 bg-transparent"></div>
                <div className="">
                  <h3 className="text-sm truncate font-medium text-white mb-2">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium text-gray-300">
                      {getOnlyYearDate(movie.release_date)}
                    </p>
                    <div className="flex items-center gap-1 z-40">
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={heart_icon} alt="" />
                      </button>
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={view_icon} alt="" />
                      </button>
                    </div>
                    <span className="text-xs flex gap-1 items-center text-yellow-500 font-medium">
                      <img className="w-3" src={star_yellow_icon} alt="..." />{" "}
                      {formatRating(movie.vote_average)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="laptop:w-5/6 h-24 flex flex-col justify-center items-start gap-4">
            <nav>
              <ul className="flex items-center gap-16">
                <li>
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={trend_icon} alt="" />
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 text-base flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-6" src={fire_icon} alt="" />
                    Series
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={add_icon} alt="" />
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={star_filled_icon} alt="" />
                    Documentaires
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full h-0.5 bg-zinc-700 rounded-full"></div>
          </div>
          <div
            className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseDown={handleMouseDrag}
            style={{ cursor: "grab" }}
          >
            {popularArtists.map((person) => (
              <div
                key={person.id}
                className=" hover:scale-110 transition ease-in-out duration-500 relative min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-4 shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  className="w-44 h-64 object-cover mb-1"
                />
                <div className="absolute w-full h-full top-0 bg-transparent"></div>
                <div className="">
                  <h3 className="text-sm truncate font-medium text-white mb-2">
                    {person.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 z-40">
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={heart_icon} alt="" />
                      </button>
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={view_icon} alt="" />
                      </button>
                    </div>
                    <span className="text-xs flex gap-1 items-center text-yellow-500 font-medium">
                      <img className="w-3" src={star_yellow_icon} alt="..." />{" "}
                      {formatRating(person.popularity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseDown={handleMouseDrag}
            style={{ cursor: "grab" }}
          >
            {popularArtistsPageTwo.map((person) => (
              <div
                key={person.id}
                className=" hover:scale-110 transition ease-in-out duration-500 relative min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-4 shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  className="w-44 h-64 object-cover mb-1"
                />
                <div className="absolute w-full h-full top-0 bg-transparent"></div>
                <div className="">
                  <h3 className="text-sm truncate font-medium text-white mb-2">
                    {person.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 z-40">
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={heart_icon} alt="" />
                      </button>
                      <button className="p-1">
                        {" "}
                        <img className="w-4" src={view_icon} alt="" />
                      </button>
                    </div>
                    <span className="text-xs flex gap-1 items-center text-yellow-500 font-medium">
                      <img className="w-3" src={star_yellow_icon} alt="..." />{" "}
                      {formatRating(person.popularity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center p-4 mb-16">
            <div className="laptop:w-5/6 h-12 bg-neutral-800 w-full flex justify-center items-center">
              <button className="flex items-center text-gray-300 font-normal gap-2">
                <img className="w-5" src={plus_icon_rounded} alt="..." />
                Show More
              </button>
            </div>
          </div>
          <footer className="w-full flex flex-col gap-16 bg-neutral-800 justify-center items-center py-16">
            <div className=" flex items-start justify-between gap-16 laptop:w-5/6">
              <div className="flex items-start gap-16 laptop:w-5/6">
                <div className="flex flex-col items-center">
                  <img
                    className="w-56 mb-4"
                    src={logo_full_branding}
                    alt="..."
                  />
                  <div>
                    <ul className="flex items-center gap-4">
                      <li>
                        <a href="">
                          <img
                            className="w-7"
                            src={instagram_icon_white}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            className="w-7"
                            src={facebook_icon_white}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            className="w-7"
                            src={twitter_icon_white}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            className="w-7"
                            src={youtube_icon_white}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <ul className="flex flex-col justify-start items-start">
                    <li>
                      <a
                        href="#about-us"
                        className="text-base text-gray-100 font-medium block  mb-4"
                      >
                        For Users
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className="text-sm text-gray-300 font-light"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investors"
                        className="text-sm text-gray-300 font-light"
                      >
                        Suppor Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#careers"
                        className="text-sm text-gray-300 font-light"
                      >
                        Request Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blog"
                        className="text-sm text-gray-300 font-light"
                      >
                        Invite Friend
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col justify-start items-start">
                    <li>
                      <a
                        href="#about-us"
                        className="text-base text-gray-100 font-medium block  mb-4"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className="text-sm text-gray-300 font-light"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investors"
                        className="text-sm text-gray-300 font-light"
                      >
                        Investors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#careers"
                        className="text-sm text-gray-300 font-light"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blog"
                        className="text-sm text-gray-300 font-light"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#faq"
                        className="text-sm text-gray-300 font-light"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col justify-start items-start">
                    <li>
                      <a
                        href="#about-us"
                        className="text-base text-gray-100 font-medium block  mb-4"
                      >
                        Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className="text-sm text-gray-300 font-light"
                      >
                        Movies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investors"
                        className="text-sm text-gray-300 font-light"
                      >
                        Series
                      </a>
                    </li>
                    <li>
                      <a
                        href="#careers"
                        className="text-sm text-gray-300 font-light"
                      >
                        Actors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blog"
                        className="text-sm text-gray-300 font-light"
                      >
                        Writers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <span className="text-gray-100 block mb-4">
                  Sign up with our NewsLetter
                </span>
                <div className="flex">
                  <input
                    className="p-2 outline-none bg-neutral-950 text-gray-100"
                    type="text"
                    placeholder="Email here"
                  />
                  <button className="bg-gray-100 p-2">
                    <img className="w-14" src={send_icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="w-96 block text-gray-300 font-light text-xs text-center">
                Website developed by João Marcos for personal and non
                -commercial purposes, follow me on social media
              </span>
              <div className="flex items-center gap-8">
                <a href="https://www.instagram.com/jao.mms" target="_blank">
                  <img className="w-6" src={instagram_icon_white} alt="..." />
                </a>
                <a
                  href="https://www.linkedin.com/in/joaomarcos10oficial/"
                  target="_blank"
                >
                  <img className="w-6" src={linkedin_icon} alt="..." />
                </a>
                <a href="https://github.com/Joaommsp" target="_blank">
                  <img className="w-6" src={github_icon} alt="..." />
                </a>
                <a
                  href="https://www.behance.net/joaomarcos10oficial"
                  target="_blank"
                >
                  <img className="w-8" src={behance_icon} alt="..." />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
