import { Link } from "react-router-dom";

import login_banner from "../../assets/images/login-banner.png";
import logo_sm from "../../assets/images/logo/logo-full-sm.png";
import logo_words_md from "../../assets/images/logo/logo-word-md.png";

import google_icon from "../../assets/images/icons/svg/google-color-svgrepo-com.svg";
import facebook_icon from "../../assets/images/icons/svg/facebook-1-svgrepo-com.svg";
import microsoft_icon from "../../assets/images/icons/svg/microsoft-svgrepo-com.svg";
import facebook_icon_gray from "../../assets/images/icons/svg/facebook-svgrepo-com-gray.svg";
import instagram_icon_gray from "../../assets/images/icons/svg/instagram-svgrepo-com-gray.svg";
import youtube_icon_gray from "../../assets/images/icons/svg/youtube-168-svgrepo-com-gray.svg";
import twitter_icon_gray from "../../assets/images/icons/svg/twitter-154-svgrepo-com-gray.svg";

const Login = () => {
  return (
    <div className="w-ful h-fit flex laptop:flex-row tablet:flex-col justify-center align-top laptop:p-4 min-h-screen">
      <div
        style={{
          backgroundImage: `url(${login_banner})`,
          backgroundSize: "cover",
        }}
        className="relative hidden laptop:flex flex-grow shrink-0 laptop:w-1/2 tablet:w-full talet:bg-top tablet:flex-none overflow-hidden laptop:rounded-3xl bg-no-repeat bg-right"
      >
        <span className="absolute top-8 left-8 block text-gray-300 font-light z-50">
          Lights, Camera, Streaming: <br /> Your Ultimate Movie <br />{" "}
          Destination!
        </span>
        <div className="absolute bottom-8 left-8 w-full flex items-center gap-16">
          <div className="flex gap-4">
            <Link
              className="text-gray-100 py-2 px-8  text-xs  rounded-full hover:text-gray-200"
              to={""}
            >
              Login
            </Link>
            <Link
              className="text-gray-100 py-2 px-8 border border-gray-100 text-xs rounded-full hover:bg-gray-100 hover:text-gray-900 transition ease-in-out"
              to={"/signin"}
            >
              Sign In
            </Link>
          </div>
          <img src={logo_sm} alt="" />
        </div>
      </div>
      <div className="relative laptop:w-3/ w-full 4 h-full tablet:bg-login-banner laptop:bg-none bg-cover min-h-screen bg-no-repeat tablet:flex laptop:rounded-3xl tablet:justify-center tablet:items-center tablet:py-24 laptop:py-16">
        <div
          style={{ backgroundColor: "#090909" }}
          className="container flex flex-col items-center justify-center pb-24 pt-24 py-24 laptop:pb-8 tablet:justify-center tablet:w-fit tablet:h-fit tablet:p-16 tablet:rounded-3xl laptop:p-2 px-4"
        >
          <img className="mb-4" src={logo_words_md} alt="" />
          <span className="text-gray-400 font-light mb-16 text-sm">
            Welcome to your best streaming web site
          </span>
          <form className="tablet:w-8/12 w-full flex flex-col items-center gap-3">
            <input
              placeholder="Email"
              className="w-full text-sm text-gray-100 py-4 px-2 border bg-transparent outline-none border-gray-100 rounded-md tablet:w-96 focus:border-blue-500 hover:border-gray-500 transition ease-in-out hover:cursor-pointer focus:cursor-text focus:placeholder-gray-50 "
              type="email"
            />
            <input
              placeholder="Password"
              className="w-full text-sm text-gray-100 py-4 px-2 border bg-transparent outline-none border-gray-100 rounded-md tablet:w-96 focus:border-blue-500 hover:border-gray-500 transition ease-in-out hover:cursor-pointer focus:cursor-text focus:placeholder-gray-50 "
              type="password"
            />
            <a
              className=" w-full text-right laptop:w-96 tablet:w-96 text-blue-400 font-light text-xs mb-8 hover:text-blue-300 transition ease-in-out"
              href=""
            >
              Forgot your password?
            </a>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-0.5 bg-gray-400"></div>
              <span className="text-gray-100 text-sm">or</span>
              <div className="w-20 h-0.5 bg-gray-400"></div>
            </div>
            <div className="flex items-center gap-8 mb-8">
              <a href="">
                <img className="w-8" src={google_icon} alt="" />
              </a>
              <a href="">
                <img className="w-9" src={facebook_icon} alt="" />
              </a>
              <a href="">
                <img className="w-8" src={microsoft_icon} alt="" />
              </a>
            </div>
            <button className="w-full tablet:w-96 text-sm bg-blue-500 text-gray-100 rounded-full py-3 hover:bg-blue-400 transition ease-in-out mb-8">
              Login
            </button>
          </form>
          <span className="block text-xs text-gray-200 font-light text-center mb-8">
            Dont´t you have an account ?{" "}
            <Link
              className="text-blue-400 hover:text-blue-300 transition ease-in-out"
              to={"/signin"}
            >
              Sign in
            </Link>
          </span>
          <div className="flex items-center gap-8">
            <a href="">
              <img className="w-7" src={instagram_icon_gray} alt="" />
            </a>
            <a href="">
              <img className="w-7" src={facebook_icon_gray} alt="" />
            </a>
            <a href="">
              <img className="w-7" src={youtube_icon_gray} alt="" />
            </a>
            <a href="">
              <img className="w-7" src={twitter_icon_gray} alt="" />
            </a>
          </div>
        </div>
        <img
          className="absolute w-16 tablet:w-24 bottom-2 left-1/2 transform -translate-x-1/2 laptop:hidden"
          src={logo_sm}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
