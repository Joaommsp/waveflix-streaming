import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import logo_full_light from "../../assets/images/logo-full-white.png";
import logo_full_branding from "../../assets/images/logo-full-brandname.png";
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
import play_icon from "../../assets/images/icons/svg/play-svgrepo-com.svg";
import play_bluish_icon from "../../assets/images/icons/svg/play-1003-svgrepo-com.svg";
import add_icon from "../../assets/images/icons/svg/add-svgrepo-com.svg";
import trend_icon from "../../assets/images/icons/svg/trend-up-svgrepo-com.svg";
import fire_icon from "../../assets/images/icons/svg/fire-svgrepo-com.svg";
import star_filled_icon from "../../assets/images/icons/svg/star-filled-svgrepo-com.svg";
import star_yellow_icon from "../../assets/images/icons/svg/star-svgrepo-yellow.svg";
import heart_icon from "../../assets/images/icons/svg/heart-svgrepo-com.svg";
import heart_red_icon from "../../assets/images/icons/svg/heart-red-svgrepo-com.svg";
import clock_icon from "../../assets/images/icons/svg/clock-two-thirty-svgrepo-com.svg";
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
import arrow_prev_icon from "../../assets/images/icons/svg/arrow-prev-svgrepo-com.svg";
import arrow_next_icon from "../../assets/images/icons/svg/arrow-next-svgrepo-com.svg";

import {
  getTopRatedSeries_heroes_dc,
  getArtists,
  getSerieCreditsByID,
  getMovieByGenre,
  getShowDetailByID,
  getSeriesVideos,
  getSimilarSeries,
} from "../../services/movie-api";

import { useEffect, useState, useRef } from "react";

const ShowDetails = (props) => {
  const location = useLocation();

  const showID = location.state ? location.state.showID : null;
  const showGenreId = location.state ? location.state.showGenreId : null;

  const [topRatedSeries_heroes_dc, setTopRatedSeries_heroes_dc] = useState([]);
  const [topRatedSeries_heroes_dcPageTwo, setTopRatedSeries_heroes_dcPageTwo] =
    useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const [popularArtistsPageTwo, setPopularArtistsPageTwo] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarMovies_page2, setSimilarMovies_page2] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [showButtons_2, setShowButtons_2] = useState(false);

  const carrouselRef = useRef(null);
  const carrouselRef_2 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLocalMovieID();
    setLocalMovieGenreID();
    geTopRatedSeriesList_heroes_dc(1);
    geTopRatedSeriesList_heroes_dcPageTwo(2);
    getPopularArtists(1);
    getPopularArtistsPageTwo(2);
    verifyLocalShowID();
  }, []);

  const setLocalMovieID = () => {
    console.log("SITUACAO DO SHOW ID ID", showID);
    return showID != null ? localStorage.setItem("localShowID", showID) : null;
  };

  const setLocalMovieGenreID = () => {
    console.log("SITUACAO DO SHOW ID", showGenreId);
    return showGenreId != null
      ? localStorage.setItem("localShowGenreID", showGenreId)
      : null;
  };

  const verifyLocalShowID = () => {
    const localShowID = localStorage.getItem("localShowID");

    if (localShowID != null) {
      console.log("ID LOCAL EXISTE E ESTA AQUI O ", localShowID);
      getMovieDetails(localShowID);
      getMovieCredits(localShowID);
      getMovieVideosByID(localShowID);
      getMoviesByGenreID(showGenreId, 1);
    } else {
      console.log("ID LOCAL N EXISTE e foi criado agora ", showID);
      localStorage.setItem("localShowID", showID);
      getMovieDetails(showID);
      getMovieCredits(showID);
      getMovieVideosByID(showID);
      getMoviesByGenreID(showGenreId, 1);
    }
  };

  const getMovieDetails = async (showID) => {
    const response = await getShowDetailByID(showID);
    console.log(showID);
    console.log(response);
    setMovieDetails({
      backdrop_path: response.backdrop_path,
      title: response.name,
      original_language: response.original_language,
      overview: response.overview,
      popularity: response.popularity,
      poster_path: response.poster_path,
      release_date: getOnlyYearDate(response.first_air_date),
      origin_country: response.origin_country[0],
      genres: response.genres,
      tagline: response.tagline,
      homepage: response.homepage,
      runtime: response.number_of_seasons,
    });
  };

  const getMovieCredits = async (movieID) => {
    const response = await getSerieCreditsByID(movieID);
    console.log(movieID);
    console.log(response);
    setMovieCredits({
      cast: response.cast,
    });
  };

  const getMovieVideosByID = async (movieID) => {
    const response = await getSeriesVideos(movieID);
    console.log(movieID);
    console.log(response);
    setMovieVideos(response.results);
  };

  const getMoviesByGenreID = async (genreId, page) => {
    const response = await getSimilarSeries(genreId, page);
    const response_page2 = await getSimilarSeries(genreId, page + 1);
    console.log(genreId);
    console.log(response);
    setSimilarMovies(response.results);
    setSimilarMovies_page2(response_page2.results);
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
      const walk = (x - startX) * 2;
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

  const formatMinutes = (minutes) => {
    const hour = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;

    return `${hour}h ${minutesLeft}min`;
  };

  const scrollContentLeft = () => {
    carrouselRef.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carrouselRef.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_2 = () => {
    carrouselRef_2.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_2 = () => {
    carrouselRef_2.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full select-none">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
        }}
        className="relative w-full h-fit min-h-screen bg-cover bg-bottom bg-no-repeat mb-8 "
      >
        <header className="absolute z-50 w-full flex py-3 px items-center justify-center ">
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

        <div className="w-full h-fit min-h-screen bg-no-repeat bg-cover bg-bottom flex flex-col items-center ">
          <div className="w-full laptop:min-h-96 flex justify-center items-center z-40">
            <a
              href="#"
              className="bg-gray-100 p-5 pl-5 rounded-full hover:scale-110 transition ease-in-out duration-300"
            >
              <img
                className="w-5 ml-0.5 rotate-center transition ease-in-out duration-300"
                src={play_bluish_icon}
                alt="..."
              />
            </a>
          </div>

          <div className="h-full laptop:min-h-96 laptop:w-5/6 z-40">
            <div className="w-full flex items-center justify-between border-b border-gray-500 pb-1 mb-5">
              <div className="flex items-center gap-4 w-full flex-wrap justify-start">
                <h2 className="text-3xl font-light text-gray-100">
                  {movieDetails.title}
                </h2>
                <p className="text-sm font-light text-gray-300">
                  {movieDetails.tagline}
                </p>
              </div>
              <div className="flex w-full h-7 justify-end  items-center gap-3 mb-4">
                <span className="text-sm text-gray-300 font-medium">
                  {movieDetails.release_date}
                </span>
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <img src={c_12} alt="..." />
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-sm text-gray-300 font-medium">
                  {movieDetails.runtime} Seasons
                </span>
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <div className="flex items-center gap-1">
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                </div>
              </div>
            </div>
            <div className="flex gap-8 justify-between h-fit items-center">
              <div className="flex gap-4 items-center">
                <div className="flex min-w-fit flex-col items-center gap-2">
                  <img
                    className="w-48 rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                  />
                  <div className="w-full flex flex-col gap-1">
                    <button className=" w-full text-xs rounded-md py-2 px-2 flex items-center gap-2 bg-neutral-800 text-gray-100">
                      {" "}
                      <img className="w-5" src={heart_red_icon} alt="" /> Watch
                      later
                    </button>
                    <button className=" w-full text-xs rounded-md py-2 px-2 flex items-center gap-2 bg-neutral-900 text-gray-100">
                      {" "}
                      <img className="w-5" src={add_icon} alt="" /> Add to List
                    </button>
                    <button className=" w-full text-xs rounded-md py-2 px-2 flex items-center gap-2 bg-neutral-900 text-gray-100">
                      {" "}
                      <img className="w-5" src={clock_icon} alt="" /> Schedule
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-4 min-h-fit h-full justify-between ">
                  <span className="text-gray-100 text-xl">
                    {movieDetails.title}
                  </span>
                  <p className="text-gray-300 text-sm font-medium uppercase">
                    {movieDetails.genres
                      ?.map((genre) => genre.name)
                      .join(" - ")}
                  </p>
                  <p className="text-gray-300 text-sm font-light">
                    {movieDetails.overview}
                  </p>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="text-gray-100">
                      <span className="text-gray-100">Country: </span>
                      <span className="uppercase text-gray-300">
                        {movieDetails.origin_country}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-100">Language: </span>
                      <span className="uppercase text-gray-300">
                        {movieDetails.original_language}
                      </span>
                    </div>
                    <div className="text-gray-100">
                      <span className="text-gray-100">Popularity: </span>
                      <span className="uppercase text-gray-300">
                        {movieDetails.popularity}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={movieDetails.homepage}
                      className="flex items-center text-sm bg-blue-500 text-gray-100 py-2 px-6 gap-2 rounded-md transition ease-in-out hover:scale-110"
                    >
                      <img className="w-4" src={play_icon} alt="..." /> PLAY
                    </a>
                    <button className="flex items-center text-sm bg-transparent  text-gray-100 py-2 px-6 gap-2 transition ease-in-out hover:scale-110">
                      <img className="w-4" src={add_icon} alt="..." />
                      MY LIST
                    </button>
                  </div>
                  <div>
                    <span className="block text-gray-100 mb-1">Cast:</span>
                    <div className="flex items-center gap-2">
                      {movieCredits.cast && movieCredits.cast.length > 0 ? (
                        movieCredits.cast.map((actor, index) =>
                          actor.profile_path && index < 5 ? (
                            <div key={actor.id}>
                              <img
                                className="w-10 h-10 object-cover rounded-full border-2"
                                title={actor.name}
                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                alt=""
                              />
                            </div>
                          ) : null
                        )
                      ) : (
                        <p>No cast information available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col gap-2">
                <span className="text-gray-100 font-light">Gallery</span>
                <div className="flex flex-col h-full  gap-4">
                  {movieVideos.map((video, index) => {
                    if (video.id && index < 2) {
                      return (
                        <div key={index}>
                          {" "}
                          <iframe
                            width="274"
                            height="154"
                            src={`https://www.youtube.com/embed/${video.key}?si=${video.id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        </div>
                      );
                    }
                    return null; // Retorna `null` se a condição não for satisfeita
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full min-h-screen top-0 bg-cover-content-gradient bg-no-repeat bg-cover bg-bottom flex flex-col items-center z-10"></div>
      </div>

      <div className="w-full h-full flex justify-center">
        <main className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center ">
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
              }}
              className="w-full laptop:w-5/6 h-96 bg-cover bg-center rounded-xl m-4 flex flex-col items-start justify-between"
            >
              <div
                style={{
                  backgroundColor: "#00000090",
                }}
                className="w-full  h-full rounded-xl p-8 flex flex-col items-start justify-between"
              >
                <div className="flex w-full h-7  items-center gap-3 mb-4">
                  <span className="text-sm text-gray-300 font-medium">
                    {movieDetails.release_date}
                  </span>
                  <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                  <span className="text-sm text-gray-300 font-medium">
                    {formatMinutes(movieDetails.runtime)}
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
                    {movieDetails.title}
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
          </div>
          <div
            className="relative hide-scrollbar flex overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_2(true)}
            onMouseLeave={() => setShowButtons_2(false)}
          >
            <div
              ref={carrouselRef_2}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {showButtons_2 && (
                <>
                  <div
                    className="hover:bg-black carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full flex justify-center items-center p-2 transition ease-in-out"
                    onClick={() => scrollContentLeft_2()}
                  >
                    <button className="text-white">
                      <img
                        className="w-10 shadow-2xl"
                        src={arrow_prev_icon}
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className="hover:bg-black  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full flex justify-center items-center p-2 transition ease-in-out"
                    onClick={() => scrollRight_2()}
                  >
                    <button className="text-white">
                      <img
                        className="w-10 shadow-2xl"
                        src={arrow_next_icon}
                        alt=""
                      />
                    </button>
                  </div>
                </>
              )}
              {similarMovies.map((movie) => (
                <div
                  key={movie.id}
                  className=" hover:scale-110 transition ease-in-out duration-500 relative min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-44 h-64 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                    onClick={() => {
                      setInterval(() => {
                        window.location.reload();
                      }, 1000);
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-sm truncate font-medium text-white mb-2">
                      {movie.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-medium text-gray-300">
                        {getOnlyYearDate(movie.first_air_date)}
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
                        {movie.vote_average}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative hide-scrollbar flex overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
          >
            <div
              ref={carrouselRef}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {showButtons && (
                <>
                  <div
                    className="hover:bg-black carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full flex justify-center items-center p-2 transition ease-in-out"
                    onClick={() => scrollContentLeft()}
                  >
                    <button className="text-white">
                      <img
                        className="w-10 shadow-2xl"
                        src={arrow_prev_icon}
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className="hover:bg-black  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full flex justify-center items-center p-2 transition ease-in-out"
                    onClick={() => scrollRight()}
                  >
                    <button className="text-white">
                      <img
                        className="w-10 shadow-2xl"
                        src={arrow_next_icon}
                        alt=""
                      />
                    </button>
                  </div>
                </>
              )}
              {similarMovies_page2.map((movie) => (
                <div
                  key={movie.id}
                  className=" hover:scale-110 transition ease-in-out duration-500 relative min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    className="w-44 h-64 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                    onClick={() => {
                      setInterval(() => {
                        window.location.reload();
                      }, 1000);
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-sm truncate font-medium text-white mb-2">
                      {movie.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-medium text-gray-300">
                        {getOnlyYearDate(movie.first_air_date)}
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
                        {movie.vote_average}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                BR Skip navigation Search 9+ Avatar image Website developed by
                João Marcos for personal and non -commercial purposes, follow me
                on social media
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

ShowDetails.propTypes = {};

export default ShowDetails;