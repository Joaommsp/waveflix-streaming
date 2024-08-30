import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Signin from "./pages/signin";
import Login from "./pages/login";
import MovieDetails from "./pages/movieDetails";
import ShowDetails from "./pages/tvShowDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-details" element={<MovieDetails />} />
      <Route path="/show-details" element={<ShowDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
