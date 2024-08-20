import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logo_full_light from "../../assets/images/logo-full-white.png";
import logo_pacific_rim from "../../assets/images/pacific-rim-logo.png";
import c_12 from "../../assets/images/c-12.png";
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

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovieGenres,
  searchMovies,
  searchTVGenres,
} from "../../services/movie-api";

import { useEffect, useState } from "react";

const Home = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesList();
  }, []);

  const getPopularMoviesList = async () => {
    const response = await getPopularMovies();
    setPopularMovies(response.results);
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full min-h-screen bg-home-banner bg-cover bg-top bg-no-repeat ">
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
        <aside className="fixed top-0 left-0 flex  flex-col items-center h-screen w-16 px-4 pt-16 pb-4">
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

        <div className="w-full flex h-full min-h-screen items-center justify-center py-20">
          <div className="flex flex-col laptop:w-5/6 gap-24">
            <div className="laptop:w-96 h-fit relative">
              <input
                style={{
                  background: "#99999950",
                  backdropFilter: "blur(13.5px)",
                  WebkitBackdropFilter: "blur(13.5px)",
                  borderRadius: "10px",
                }}
                placeholder="Search"
                className="laptop:w-96 text-gray-100 text-sm outline-none py-2 px-4 pl-12  rounded-md backdrop-blur-sm bg-slate-500 border-2 border-transparent focus-within:border-gray-400 transition ease-in-out delay-150 cursor-pointer focus:cursor-text shadow-md"
                type="text"
              />
              <button title="Search">
                <img
                  className="absolute top-1/2  left-6 transform -translate-y-1/2 -translate-x-1/2 w-7"
                  src={search_icon}
                  alt="..."
                />
              </button>
            </div>
            <div>
              <span className="text-gray-300 text-sm uppercase block mb-4">
                ACTION - SCIENCE FICTION
              </span>
              <img className="w-96 mb-4" src={logo_pacific_rim} alt=".." />
              <div className="flex w-full h-7  items-center gap-3 mb-4">
                <span className="text-sm text-gray-300 font-medium">2013</span>
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <img src={c_12} alt="..." />
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-sm text-gray-300 font-medium">
                  2h 11m
                </span>
                <div className="bg-gray-300 w-0.5 h-full rounded-full"></div>
                <div className="flex items-center gap-1">
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                </div>
              </div>
              <p className="w-1/2 text-sm text-gray-100 font-light mb-8">
                Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra
                ut at duis non justo turpis. Enim interdum etiam feugiat
                egestas. Egestas ipsum in egestas tristique eget. Nibh elementum
                ultrices amet vel commodo aenean lectus fringilla morbi. Elit
                laoreet eu malesuada imperdiet nullam venenatis non nec. Mattis
                netus blandit morbi.
              </p>
              <div className="flex items-center gap-4 mb-16">
                <button className="flex items-center bg-blue-500 text-gray-100 py-2 px-6 gap-2 rounded-md transition ease-in-out hover:scale-110">
                  <img className="w-5" src={play_icon} alt="..." /> PLAY
                </button>
                <button className="flex items-center bg-transparent  text-gray-100 py-2 px-6 gap-2 transition ease-in-out hover:scale-110">
                  <img className="w-5" src={add_icon} alt="..." />
                  MY LIST
                </button>
              </div>

              <button className="flex items-center bg-transparent  text-gray-100 py-2 gap-2 transition ease-in-out hover:scale-110">
                <img className="w-5" src={play_styled_icon} alt="" />
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <main className="w-full  max laptop:w-5/6 flex flex-col items-center">
          <div className="w-full h-40 flex flex-col justify-center items-start gap-4">
            <nav>
              <ul className="flex items-center gap-16">
                <li>
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={trend_icon} alt="" />
                    Trending
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={fire_icon} alt="" />
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={add_icon} alt="" />
                    Recently added
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={star_filled_icon} alt="" />
                    Premium
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full h-0.5 bg-zinc-700 rounded-full"></div>
            <div className="w-full flex items-center justify-start gap-4">
              <button className="py-2 text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Action
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Adventure
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Animation
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Fiction
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Heroes
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Comedy
              </button>
            </div>
          </div>
          <div className="w-full flex overflow-scroll items-center">
            {popularMovies.map((movie) => (
              <div
                key={movie.id}
                className="min-w-64 h-96 bg-zinc-800 rounded-lg overflow-hidden m-4 shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-2/3 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-400">{movie.release_date}</p>
                  <p className="text-sm text-gray-400">
                    {movie.vote_average} / 10
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-40 flex flex-col justify-center items-start gap-4">
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
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={fire_icon} alt="" />
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
            <div className="w-full flex items-center justify-start gap-4">
              <button className="py-2 text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Action
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Adventure
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Animation
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Fiction
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Heroes
              </button>
              <button className="py-2 text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Comedy
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
