import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import Header from "./componants/Header";
import Footer from "./componants/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieName" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
