import { Link } from "react-router-dom";
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
import arrow_prev_icon from "../../assets/images/icons/svg/arrow-prev-svgrepo-com.svg";
import arrow_next_icon from "../../assets/images/icons/svg/arrow-next-svgrepo-com.svg";

import movie_menu_icon from "../../assets/images/icons/svg/movie-svgrepo-com.svg";
import serie_menu_icon from "../../assets/images/icons/svg/kanban-svgrepo-com.svg";
import tv_menu_icon from "../../assets/images/icons/svg/tv-svgrepo-com.svg";
import info_menu_icon from "../../assets/images/icons/svg/info-circle-svgrepo-com.svg";
import nav_menu_icon from "../../assets/images/icons/svg/menu-alt-01-svgrepo-com.svg";
import close_menu_icon from "../../assets/images/icons/svg/close-circle-svgrepo-com.svg";
import home_menu_icon from "../../assets/images/icons/svg/home-page-svgrepo-com.svg"

import home_banner from "../../assets/images/home-screen-banner.png";
import hod_banner from "../../assets/images/hod-poster.png";
import tb_banner from "../../assets/images/tb-poster.png";

import {
  getPopularMovies,
  getTopRatedMovies,
  getTopRatedSeries,
  getTopRatedSeries_2014,
  getTopRatedSeries_2024,
  getTopRatedSeries_heroes,
  getTopRatedSeries_heroes_dc,
  getArtists,
} from "../../services/movie-api";

import { useEffect, useState, useRef } from "react";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [topRatedSeriesPageTwo, setTopRatedSeriesPageTwo] = useState([]);
  const [topRatedSeriesPageThree, setTopRatedSeriesPageThree] = useState([]);
  const [topRatedSeries_2014, setTopRatedSeries_2014] = useState([]);
  const [topRatedSeries_2024, setTopRatedSeries_2024] = useState([]);
  const [topRatedSeries_heroes, setTopRatedSeries_heroes] = useState([]);
  const [topRatedSeries_heroesPageTwo, setTopRatedSeries_heroesPageTwo] =
    useState([]);
  const [topRatedSeries_heroes_dc, setTopRatedSeries_heroes_dc] = useState([]);
  const [topRatedSeries_heroes_dcPageTwo, setTopRatedSeries_heroes_dcPageTwo] =
    useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const [popularArtistsPageTwo, setPopularArtistsPageTwo] = useState([]);

  const [showButtons, setShowButtons] = useState(false);
  const [showButtons_2, setShowButtons_2] = useState(false);
  const [showButtons_3, setShowButtons_3] = useState(false);
  const [showButtons_4, setShowButtons_4] = useState(false);
  const [showButtons_5, setShowButtons_5] = useState(false);
  const [showButtons_6, setShowButtons_6] = useState(false);
  const [showButtons_7, setShowButtons_7] = useState(false);
  const [showButtons_8, setShowButtons_8] = useState(false);
  const [showButtons_9, setShowButtons_9] = useState(false);
  const [showButtons_10, setShowButtons_10] = useState(false);
  const [showButtons_11, setShowButtons_11] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [menuIcon, setMenuIcon] = useState(nav_menu_icon);

  const carrouselRef = useRef(null);
  const carrouselRef_2 = useRef(null);
  const carrouselRef_3 = useRef(null);
  const carrouselRef_4 = useRef(null);
  const carrouselRef_5 = useRef(null);
  const carrouselRef_6 = useRef(null);
  const carrouselRef_7 = useRef(null);
  const carrouselRef_8 = useRef(null);
  const carrouselRef_9 = useRef(null);
  const carrouselRef_10 = useRef(null);
  const carrouselRef_11 = useRef(null);

  useEffect(() => {
    getPopularMoviesList();
    geTopRatedMoviesList();
    geTopRatedSeriesList(1);
    geTopRatedSeriesListPageTwo(2);
    geTopRatedSeriesListPageThree(3);
    geTopRatedSeriesList_2014(1);
    geTopRatedSeriesList_2024(1);
    geTopRatedSeriesList_heroes(2);
    geTopRatedSeriesList_heroesPageTwo(1);
    geTopRatedSeriesList_heroes_dc(1);
    geTopRatedSeriesList_heroes_dcPageTwo(2);
    getPopularArtists(1);
    getPopularArtistsPageTwo(2);
  }, []);

  const getPopularMoviesList = async () => {
    const response = await getPopularMovies();
    setPopularMovies(response.results);
  };

  const geTopRatedMoviesList = async () => {
    const response = await getTopRatedMovies();
    setTopRatedMovies(response.results);
  };

  const geTopRatedSeriesList = async (page) => {
    const response = await getTopRatedSeries(page);
    setTopRatedSeries(response.results);
  };

  const geTopRatedSeriesListPageTwo = async (page) => {
    const response = await getTopRatedSeries(page);
    setTopRatedSeriesPageTwo(response.results);
  };

  const geTopRatedSeriesListPageThree = async (page) => {
    const response = await getTopRatedSeries(page);
    setTopRatedSeriesPageThree(response.results);
  };

  const geTopRatedSeriesList_2014 = async (page) => {
    const response = await getTopRatedSeries_2014(page);
    setTopRatedSeries_2014(response.results);
  };

  const geTopRatedSeriesList_2024 = async (page) => {
    const response = await getTopRatedSeries_2024(page);
    setTopRatedSeries_2024(response.results);
  };

  const geTopRatedSeriesList_heroes = async (page) => {
    const response = await getTopRatedSeries_heroes(page);
    setTopRatedSeries_heroes(response.results);
  };

  const geTopRatedSeriesList_heroesPageTwo = async (page) => {
    const response = await getTopRatedSeries_heroes(page);
    setTopRatedSeries_heroesPageTwo(response.results);
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

  const getOnlyYearDate = (date) => {
    const [year, month, day] = date.split("-");

    return `${year}`;
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

  const scrollContentLeft_3 = () => {
    carrouselRef_3.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_3 = () => {
    carrouselRef_3.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_4 = () => {
    carrouselRef_4.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_4 = () => {
    carrouselRef_4.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_5 = () => {
    carrouselRef_5.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_5 = () => {
    carrouselRef_5.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_6 = () => {
    carrouselRef_6.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_6 = () => {
    carrouselRef_6.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_7 = () => {
    carrouselRef_7.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_7 = () => {
    carrouselRef_7.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_8 = () => {
    carrouselRef_8.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_8 = () => {
    carrouselRef_8.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_9 = () => {
    carrouselRef_9.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_9 = () => {
    carrouselRef_9.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_10 = () => {
    carrouselRef_10.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_10 = () => {
    carrouselRef_10.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const scrollContentLeft_11 = () => {
    carrouselRef_11.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight_11 = () => {
    carrouselRef_11.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const formatRating = (rating) => {
    return parseFloat(Number(rating).toFixed(1));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed multiplier
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  const controlMenuMobile = () => {
    const menu = document.querySelector(".mobileMenu");

    menu.classList.toggle("hidden");

    if (menuIcon == nav_menu_icon) {
      setMenuIcon(close_menu_icon);
    } else {
      setMenuIcon(nav_menu_icon);
    }
  };

  return (
    <div className="w-full h-full select-none">
      <div
        style={{
          backgroundImage: `url(${home_banner})`,
        }}
        className="relative w-full h-full min-h-screen  bg-cover bg-top bg-no-repeat "
      >
        <header
          // style={{
          //   backgroundColor: "#090909",
          // }}
          className="fixed laptop:static z-50 bg-neutral-950 laptop:bg-transparent w-full flex py-2 laptop:py-3 px items-center justify-center "
        >
          <div className="relative   min-h-8 w-full px-5 laptop:px-0 laptop:w-5/6 flex items-start laptop:items-center justify-between">
            <div className="flex absolute left-2 laptop:static items-center gap-16">
              <img
                src={logo_full_light}
                className="w-20 laptop:w-24 mr-12"
                alt=""
              />
            </div>
            <div className="mobileMenu mt-12 laptop:mt-0 hidden laptop:flex flex-col laptop:flex-row items-center w-full justify-end laptop:justify-between gap-4 tablet:gap-10">
              <nav className=" mb-8 laptop:mb-0 laptop:flex laptop:items-center items-end justify-end">
                <ul className="flex flex-col laptop:flex-row items-end laptop:items-center justify-end  gap-2 laptop:gap-8">
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
              <div className="flex flex-col h-full justify-center laptop:flex-row items-end laptop:items-center gap-4 laptop:gap-4 tablet:gap-2">
                
                  <div className="flex-col laptop:flex-row justify-center w-fit flex items-center gap-4 mb-4 laptop:mb-0">
                  <Link to={"/signin"} className="text-gray-100 font-light w-full text-end"  href="">Logout</Link>
                  <Link to={"/login"} c className="text-gray-100 font-light shrink-0 text-end" href="">Change Account</Link>
                  </div>
                <div className="flex flex-row items-center gap-2 laptop:gap-4">

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
                <div className="flex  items-center gap-4 mb-8 laptop:mb-0">
                  <span className="text-white shrink-0">João M</span>
                  <img
                    className="rounded-full w-8 border-white border-2"
                    src="https://i.redd.it/lph9nhgtv6pb1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mb-8 laptop:hidden">
                <ul className="flex flex-col justify-start items-end">
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
                    <a href="#faq" className="text-sm text-gray-300 font-light">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <span className="w-full block text-gray-50 font-light text-xs text-center mb-4 laptop:hidden">
                Website developed by João Marcos for personal and non
                -commercial purposes, follow me on social media
              </span>
            </div>
            <div  className="flex absolute top-0 right-2 laptop:hidden gap-2">
              <Link
              to={"/"}
                className="flex laptop:hidden justify-center items-center"
              >
              
                <img className="w-6"  src={home_menu_icon} alt="..." />
              </Link>
              <button
                onClick={() => controlMenuMobile()}
                className="flex laptop:hidden justify-center items-center"
              >
                <img className="w-8" src={menuIcon} alt=".." />
              </button>
            </div>
          </div>
        </header>
        <aside
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%)",
          }}
          className="hidden desktop:flex fixed top-0 left-0   flex-col items-center h-screen w-16 px-4 pt-16 pb-4 z-50"
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
        <div className="w-full px-3 tablet:px-5 laptop:px-0 flex h-full min-h-screen items-center justify-center py-20">
          <div className="flex flex-col laptop:w-5/6 gap-24">
            <div className="tablet:w-96 h-fit relative">
              <input
                style={{
                  background: "#99999950",
                  backdropFilter: "blur(13.5px)",
                  WebkitBackdropFilter: "blur(13.5px)",
                  borderRadius: "10px",
                }}
                placeholder="Search"
                className="w-full laptop:w-96 text-gray-100 text-sm outline-none py-2 px-4 pl-12  rounded-md backdrop-blur-sm bg-slate-500 border-2 border-transparent focus-within:border-gray-400 transition ease-in-out delay-150 cursor-pointer focus:cursor-text shadow-md"
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
              <span className="text-gray-300 text-xs  tablet:text-sm uppercase block mb-4">
                ACTION - SCIENCE FICTION
              </span>
              <img
                className="w-64 tablet:w-96 mb-4"
                src={logo_pacific_rim}
                alt=".."
              />
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
              <p className="w-full tablet:w-full text-xs tablet:text-sm text-gray-100 font-light mb-8">
                Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra
                ut at duis non justo turpis. Enim interdum etiam feugiat
                egestas. Egestas ipsum in egestas tristique eget. Nibh elementum
                ultrices amet vel commodo aenean lectus fringilla morbi. Elit
                laoreet eu malesuada imperdiet nullam venenatis non nec. Mattis
                netus blandit morbi.
              </p>
              <div className="flex items-center gap-4 mb-16">
                <Link
                  to="/movie-details"
                  state={{ movieID: 68726, movieGenreId: 28 }}
                  className="text-xs tablet:text-sm flex items-center bg-blue-500 text-gray-100 py-2 px-6 gap-2 rounded-md transition ease-in-out hover:scale-110"
                >
                  <img className="w-5" src={play_icon} alt="..." /> PLAY
                </Link>
                <button className="text-xs tablet:text-sm flex items-center bg-transparent  text-gray-100 py-2 px-6 gap-2 transition ease-in-out hover:scale-110">
                  <img className="w-5" src={add_icon} alt="..." />
                  MY LIST
                </button>
              </div>
              <button className="text-xs tablet:text-sm flex items-center bg-transparent  text-gray-100 py-2 gap-2 transition ease-in-out hover:scale-110">
                <img className="w-5" src={play_styled_icon} alt="" />
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <main className="w-full flex flex-col items-center px-1 tablet:px-5 laptop:px-0">
          <div className="h-fit py-4 laptop:py-0 laptop:h-40 w-full  px-2 laptop:px-0 laptop:w-5/6 flex flex-col justify-center items-start gap-4">
            <nav
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden tablet:block hide-scrollbar overflow-scroll overflow-y-hidden"
            >
              <ul className="flex items-center gap-16">
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-base flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-6" src={trend_icon} alt="" />
                    Trending
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={fire_icon} alt="" />
                    Popular
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={add_icon} alt="" />
                    Recently added
                  </Link>
                </li>
                <li className="min-w-fit">
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
            <div className="w-full hidden laptop:block h-0.5 bg-zinc-700 rounded-full"></div>
            <div
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden tablet:flex overflow-scroll hide-scrollbar overflow-y-hidden laptop:w-5/6 items-center justify-start gap-4"
            >
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out tablet:hover:scale-110">
                Action
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out tablet:hover:scale-110">
                Adventure
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out tablet:hover:scale-110">
                Animation
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out tablet:hover:scale-110">
                Fiction
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out tablet:hover:scale-110">
                Heroes
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out tablet:hover:scale-110">
                Comedy
              </button>
            </div>
            <div className="flex items-center gap-2 tablet:hidden">
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Trending
                  </option>
                  <option className="text-gray-950" value="saab">
                    Popular
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    Recently added
                  </option>
                  <option className="text-gray-950" value="audi">
                    Premium
                  </option>
                </select>
              </div>
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Action
                  </option>
                  <option className="text-gray-950" value="saab">
                    Adventure
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    Animation
                  </option>
                  <option className="text-gray-950" value="audi">
                    Fiction
                  </option>
                  <option className="text-gray-950" value="audi">
                    Heroes
                  </option>
                  <option className="text-gray-950" value="audi">
                    Comedy
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
          >
            {showButtons && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
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
            <div
              ref={carrouselRef}
              className="carrousel relative hide-scrollbar  w-fit overflow-y-hidden overflow-scroll flex laptop:overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ scrollBehavior: "smooth" }}
            >
              {popularMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/movie-details"
                    state={{
                      movieID: movie.id,
                      movieGenreId: movie.genre_ids[0],
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
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
                    className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
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
                    className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
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
              {topRatedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/movie-details"
                    state={{
                      movieID: movie.id,
                      movieGenreId: movie.genre_ids[0],
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
          </div>
          <div className="h-fit py-4 laptop:py-0 laptop:h-40 w-full laptop:w-5/6 px-2 laptop:px-0 flex flex-col justify-center items-start gap-4">
            <nav
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden laptop:block hide-scrollbar overflow-scroll overflow-y-hidden"
            >
              <ul className="flex items-center gap-16">
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={movie_menu_icon} alt="" />
                    Movies
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-base flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-6" src={serie_menu_icon} alt="" />
                    Series
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={tv_menu_icon} alt="" />
                    TV Shows
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={info_menu_icon} alt="" />
                    Documentaires
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full hidden laptop:block h-0.5 bg-zinc-700 rounded-full"></div>
            <div
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden  hide-scrollbar overflow-scroll overflow-y-hidden laptop:w-5/6 laptop:flex items-center justify-start gap-4"
            >
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out tablet:hover:scale-110">
                Action
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out tablet:hover:scale-110">
                Adventure
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out tablet:hover:scale-110">
                Animation
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Fiction
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Heroes
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Comedy
              </button>
            </div>
            <div className="flex items-center gap-2 laptop:hidden">
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Movies
                  </option>
                  <option className="text-gray-950" value="saab">
                    Series
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    TV Shows
                  </option>
                  <option className="text-gray-950" value="audi">
                    Documentaries
                  </option>
                </select>
              </div>
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Action
                  </option>
                  <option className="text-gray-950" value="saab">
                    Adventure
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    Animation
                  </option>
                  <option className="text-gray-950" value="audi">
                    Fiction
                  </option>
                  <option className="text-gray-950" value="audi">
                    Heroes
                  </option>
                  <option className="text-gray-950" value="audi">
                    Comedy
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_3(true)}
            onMouseLeave={() => setShowButtons_3(false)}
          >
            {showButtons_3 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_3()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_3()}
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
            <div
              ref={carrouselRef_3}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                  >
                    {" "}
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
                        {formatRating(movie.vote_average)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center p-0 laptop:p-4 mb-8 laptop:mb-0">
            <div
              style={{
                backgroundImage: `url(${hod_banner})`,
              }}
              className="w-full laptop:w-5/6 h-full laptop:h-96 bg-cover tablet:bg-center rounded-xl   m-2 laptop:m-4 p-4 laptop:p-8 flex flex-col items-start justify-between"
            >
              <div className="flex w-full h-7  items-center gap-3 mb-4">
                <img className="w-5 laptop:w-8" src={c_16} alt="..." />
                <div className="hidden laptop:block bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-xs laptop:text-sm text-gray-300 font-medium">2022</span>
                <div className="hidden laptop:block  bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-xs laptop:text-sm w-fit text-gray-300 font-medium">
                  2 Seasons
                </span>
                <div className="hidden laptop:block bg-gray-300 w-0.5 h-full rounded-full"></div>
                <div className=" hidden laptop:flex items-center gap-1">
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-100 text-xl laptop:text-4xl font-medium">
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
              <div className="flex flex-col laptop:flex-row laptop:items-center justify-between w-full">
                <nav className="mb-8 mt-8 laptop:mb-0 laptop:mt-0">
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
                  <Link
                    to="/show-details"
                    state={{
                      showID: 94997,
                      showGenreId: 10765,
                    }}
                    className="text-xs tablet:text-sm flex items-center bg-blue-500 text-gray-100 py-2 px-6 gap-2 rounded-md transition ease-in-out hover:scale-110"
                    >
                    <img className="w-5" src={play_icon} alt="..." /> PLAY
                  </Link>
                  <button className="text-xs tablet:text-sm flex items-center bg-transparent  text-gray-100 py-2 px-6 gap-2 transition ease-in-out hover:scale-110">
                  <img className="w-5" src={add_icon} alt="..." />
                    MY LIST
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_4(true)}
            onMouseLeave={() => setShowButtons_4(false)}
          >
            {showButtons_4 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_4()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_4()}
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
            <div
              ref={carrouselRef_4}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeriesPageTwo.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                  >
                    {" "}
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
                        {formatRating(movie.vote_average)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_5(true)}
            onMouseLeave={() => setShowButtons_5(false)}
          >
            {showButtons_5 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_5()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_5()}
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
            <div
              ref={carrouselRef_5}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeriesPageThree.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                  >
                    {" "}
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
                        {formatRating(movie.vote_average)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-fit py-4 laptop:h-40 w-full laptop:w-5/6 px-2 laptop:px-0 flex flex-col justify-center items-start gap-4">
            <nav
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden laptop:block hide-scrollbar overflow-scroll overflow-y-hidden"
            >
              <ul className="flex items-center gap-16">
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={movie_menu_icon} alt="" />
                    Movies
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-base flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-6" src={serie_menu_icon} alt="" />
                    Series
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={tv_menu_icon} alt="" />
                    TV Shows
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={info_menu_icon} alt="" />
                    Documentaires
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full h-0.5 hidden  laptop:block bg-zinc-700 rounded-full"></div>
            <div
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden  hide-scrollbar overflow-scroll overflow-y-hidden laptop:w-5/6 laptop:flex items-center justify-start gap-4"
            >
              <button className="py-2  min-w-32 text-xs tablet:text-sm  w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Action
              </button>
              <button className="py-2  min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Adventure
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm   w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Animation
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Fiction
              </button>
              <button className="py-2  min-w-32 text-xs tablet:text-sm  w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Heroes
              </button>
              <button className="py-2  min-w-32 text-xs tablet:text-sm  w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Comedy
              </button>
            </div>
            <div className="flex items-center gap-2 laptop:hidden">
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Movies
                  </option>
                  <option className="text-gray-950" value="saab">
                    Series
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    TV Shows
                  </option>
                  <option className="text-gray-950" value="audi">
                    Documentaries
                  </option>
                </select>
              </div>
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Action
                  </option>
                  <option className="text-gray-950" value="saab">
                    Adventure
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    Animation
                  </option>
                  <option className="text-gray-950" value="audi">
                    Fiction
                  </option>
                  <option className="text-gray-950" value="audi">
                    Heroes
                  </option>
                  <option className="text-gray-950" value="audi">
                    Comedy
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_6(true)}
            onMouseLeave={() => setShowButtons_6(false)}
          >
            {showButtons_6 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_6()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_6()}
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
            <div
              ref={carrouselRef_6}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries_2024.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                  >
                    {" "}
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
                        {formatRating(movie.vote_average)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_7(true)}
            onMouseLeave={() => setShowButtons_7(false)}
          >
            {showButtons_7 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_7()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_7()}
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
            <div
              ref={carrouselRef_7}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries_2014.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    to="/show-details"
                    state={{
                      showID: movie.id,
                      showGenreId: movie.genre_ids[0],
                    }}
                  >
                    {" "}
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
                        {formatRating(movie.vote_average)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
          <div className="h-fit py-4 laptop:h-40 w-full laptop:w-5/6 px-2 laptop:px-0 flex flex-col justify-center items-start gap-4">
            <nav
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden laptop:block hide-scrollbar overflow-scroll overflow-y-hidden"
            >
              <ul className="flex items-center gap-16">
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={movie_menu_icon} alt="" />
                    Movies
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-base flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-6" src={serie_menu_icon} alt="" />
                    Series
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={tv_menu_icon} alt="" />
                    TV Shows
                  </Link>
                </li>
                <li className="min-w-fit">
                  <Link
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-5" src={info_menu_icon} alt="" />
                    Documentaires
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full hidden laptop:block h-0.5 bg-zinc-700 rounded-full"></div>
            <div
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden  hide-scrollbar overflow-scroll overflow-y-hidden laptop:w-5/6 laptop:flex items-center justify-start gap-4"
            >
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Action
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Adventure
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-smw-full text-gray-100  bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Animation
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-sm w-full text-gray-100  bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Fiction
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-smw-full text-gray-100 bg-blue-500 rounded-full transition ease-in-out hover:scale-110">
                Heroes
              </button>
              <button className="py-2 min-w-32 text-xs tablet:text-smw-full text-gray-100 bg-zinc-900 rounded-full transition ease-in-out hover:scale-110">
                Comedy
              </button>
            </div>
            <div className="flex items-center gap-2 laptop:hidden">
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Movies
                  </option>
                  <option className="text-gray-950" value="saab">
                    Series
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    TV Shows
                  </option>
                  <option className="text-gray-950" value="audi">
                    Documentaries
                  </option>
                </select>
              </div>
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Action
                  </option>
                  <option className="text-gray-950" value="saab">
                    Adventure
                  </option>
                  <option className="text-gray-950" value="mercedes">
                    {" "}
                    Animation
                  </option>
                  <option className="text-gray-950" value="audi">
                    Fiction
                  </option>
                  <option className="text-gray-950" value="audi">
                    Heroes
                  </option>
                  <option className="text-gray-950" value="audi">
                    Comedy
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_8(true)}
            onMouseLeave={() => setShowButtons_8(false)}
          >
            {showButtons_8 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_8()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_8()}
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
            <div
              ref={carrouselRef_8}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries_heroes.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/movie-details"
                    state={{
                      movieID: movie.id,
                      movieGenreId: movie.genre_ids[0],
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_9(true)}
            onMouseLeave={() => setShowButtons_9(false)}
          >
            {showButtons_9 && (
              <>
                <div
                  className="hover:bg-black carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_9()}
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
                  onClick={() => scrollRight_9()}
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
            <div
              ref={carrouselRef_9}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries_heroesPageTwo.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/movie-details"
                    state={{
                      movieID: movie.id,
                      movieGenreId: movie.genre_ids[0],
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
          </div>
          <div className="w-full flex justify-center p-0 laptop:p-4 mb-8 laptop:mb-0">
            <div
              style={{
                backgroundImage: `url(${tb_banner})`,
              }}
              className="w-full laptop:w-5/6 h-full laptop:h-96 bg-cover bg-center rounded-xl  m-2 laptop:m-4 p-4 laptop:p-8 flex flex-col items-start justify-between"
            >
              <div className="flex w-full h-7  items-center gap-3 mb-4">
                <img className="w-5 laptop:w-8" src={c_16} alt="..." />
                <div className="hidden laptop:block bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-xs laptop:text-sm text-gray-300 font-medium">2019</span>
                <div className="hidden laptop:block bg-gray-300 w-0.5 h-full rounded-full"></div>
                <span className="text-xs laptop:text-sm w-fit text-gray-300 font-medium">
                  4 Seasons
                </span>
                <div className="hidden laptop:block bg-gray-300 w-0.5 h-full rounded-full"></div>
                <div className=" hidden laptop:flex items-center gap-1">
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                  <img className="w-5" src={star_rating} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-100 text-xl laptop:text-4xl font-medium">
                  The Boys
                </h2>
                <p className="text-gray-300 font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur. Rutrum ultrices amet{" "}
                  <br />
                  cursus hac viverra semper tincidunt condimentum. Est mattis{" "}
                  <br />
                  bibendum euismod sed facilisis laoreet.
                </p>
              </div>
              <div className="flex flex-col laptop:flex-row laptop:items-center justify-between w-full">
                <nav className="mb-8 mt-8 laptop:mb-0 laptop:mt-0">
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
                  <Link
                    to="/show-details"
                    state={{
                      showID: 76479,
                      showGenreId: 10765,
                    }}
                    className="text-xs tablet:text-sm flex items-center bg-blue-500 text-gray-100 py-2 px-6 gap-2 rounded-md transition ease-in-out hover:scale-110"
                    >
                    <img className="w-5" src={play_icon} alt="..." /> PLAY
                  </Link>
                  <button className="text-xs tablet:text-sm flex items-center bg-transparent  text-gray-100 py-2 px-6 gap-2 transition ease-in-out hover:scale-110">
                  <img className="w-5" src={add_icon} alt="..." />
                    MY LIST
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_10(true)}
            onMouseLeave={() => setShowButtons_10(false)}
          >
            {showButtons_10 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_10()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_10()}
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
            <div
              ref={carrouselRef_10}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries_heroes_dc.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/movie-details"
                    state={{
                      movieID: movie.id,
                      movieGenreId: movie.genre_ids[0],
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
          </div>
          <div
            className="w-full relative hide-scrollbar flex laptop:overflow-x-auto justify-start laptop:w-5/6 items-center select-none"
            onMouseEnter={() => setShowButtons_11(true)}
            onMouseLeave={() => setShowButtons_11(false)}
          >
            {showButtons_11 && (
              <>
                <div
                  className="hover:bg-black hidden carrouselBtn  hover:opacity-85 rounded-s-xl cursor-pointer absolute z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollContentLeft_11()}
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
                  className="hover:bg-black hidden  carrouselBtn  hover:opacity-85 rounded-e-xl cursor-pointer absolute -right-0.5  z-50 h-full laptop:flex justify-center items-center p-2 transition ease-in-out"
                  onClick={() => scrollRight_11()}
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
            <div
              ref={carrouselRef_11}
              className="hide-scrollbar flex overflow-x-auto justify-start laptop:w-full items-center select-none"
              style={{ cursor: "grab" }}
            >
              {topRatedSeries_heroes_dcPageTwo.map((movie) => (
                <div
                  key={movie.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <Link
                    key={movie.id}
                    to="/movie-details"
                    state={{
                      movieID: movie.id,
                      movieGenreId: movie.genre_ids[0],
                    }}
                  >
                    <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  </Link>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
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
          </div>

          <div className="h-fit py-4 w-full laptop:w-5/6 px-2 laptop:px-0 flex flex-col justify-center items-start gap-4">
            <nav
              style={{
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              className="w-full hidden laptop:block hide-scrollbar overflow-scroll overflow-y-hidden"
            >
              <ul className="flex items-center gap-16">
                <li>
                  <Link
                    className="text-gray-100 text-base flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                    to={""}
                  >
                    <img className="w-6" src={fire_icon} alt="" />
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="text-gray-100 text-xs flex items-center gap-2 hover:opacity-60 transition ease-in-out"
                  >
                    <img className="w-5" src={fire_icon} alt="" />
                    Trending
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full hidden laptop:block h-0.5 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center gap-2 laptop:hidden">
              <div className="bg-transparent border-2 text-sm border-gray-300 py-2 min-w-36 px-1 rounded-full">
                <select
                  className="bg-transparent text-sm text-gray-100 outline-none px-3 "
                  name="category"
                  id="category"
                >
                  <option className="text-gray-950" value="volvo">
                    Trending
                  </option>
                  <option className="text-gray-950" value="saab">
                    Popular
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="scroll-container flex overflow-x-scroll hide-scrollbar  justify-start w-full laptop:w-5/6 items-center select-none"
            style={{ cursor: "grab" }}
          >
            {popularArtists.map((person) =>
              person.profile_path != null ? (
                <div
                  key={person.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt={person.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
                      {person.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 z-40">
                        <button className="p-1">
                          {" "}
                          <img className="w-4" src={heart_icon} alt="" />
                        </button>
                      </div>
                      <span className="text-xs flex gap-1 items-center text-yellow-500 font-medium">
                        <img className="w-3" src={star_yellow_icon} alt="..." />{" "}
                        {formatRating(person.popularity)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="scroll-container flex overflow-x-scroll hide-scrollbar  justify-start w-full laptop:w-5/6 items-center select-none"
            style={{ cursor: "grab" }}
          >
            {popularArtistsPageTwo.map((person) =>
              person.profile_path != null ? (
                <div
                  key={person.id}
                  className="laptop:hover:scale-110 transition ease-in-out duration-500 relative min-w-32 laptop:min-w-40 h-fit bg-transparent rounded-lg overflow-hidden  m-2 laptop:m-4 shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt={person.name}
                    className="laptop:w-44 laptop:h-64 w-full h-48 object-cover mb-1"
                  />
                  <div className="absolute w-full h-full top-0 bg-transparent"></div>
                  <div className="">
                    <h3 className="text-xs laptop:text-sm truncate font-medium text-white mb-2">
                      {person.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 z-40">
                        <button className="p-1">
                          {" "}
                          <img className="w-4" src={heart_icon} alt="" />
                        </button>
                      </div>
                      <span className="text-xs flex gap-1 items-center text-yellow-500 font-medium">
                        <img className="w-3" src={star_yellow_icon} alt="..." />{" "}
                        {formatRating(person.popularity)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="w-full flex justify-center p-2 laptop:p-4 laptop:mb-16 mb-4">
            <div className="laptop:w-5/6 h-8 laptop:h-12 bg-neutral-800 w-full flex justify-center items-center">
              <button className="flex text-xs laptop:text-base items-center text-gray-300 font-normal gap-2">
                <img className="w-5" src={plus_icon_rounded} alt="..." />
                Show More
              </button>
            </div>
          </div>
          <footer className="w-full flex flex-col gap-16 bg-neutral-800 justify-center items-center rounded-t-xl laptop:rounded-t-none py-16 px-8">
            <div className="flex flex-col laptop:flex-row items-start justify-between gap-16 laptop:w-5/6">
              <div className="flex flex-wrap  items-start gap-8 laptop:gap-16 laptop:w-5/6">
                <div className="flex flex-col items-center">
                  <img
                    className="max-w-24 laptop:min-w-56 mb-4"
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
                        className="text-sm laptop:text-base text-gray-100 font-medium block  mb-4"
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
                        className="text-sm laptop:text-base text-gray-100 font-medium block  mb-4"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investors"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Investors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#careers"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blog"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#faq"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
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
                        className="text-sm laptop:text-base text-gray-100 font-medium block  mb-4"
                      >
                        Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Movies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#investors"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Series
                      </a>
                    </li>
                    <li>
                      <a
                        href="#careers"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
                      >
                        Actors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blog"
                        className=" text-xs laptop:text-sm text-gray-300 font-light"
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
                    <img className="w-8  laptop:w-14" src={send_icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="w-full tablet:w-96 block text-gray-300 font-light text-xs text-center">
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

export default Home;
