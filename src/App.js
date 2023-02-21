import "./App.css";
import GameComponent from "./components/GameComponent";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import PocketBase from "pocketbase";
import GameLoader from "./components/GameLoader";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import NotificationMessage from "./components/NotificationMessage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Games from "./containers/Games";
import NotFound from "./containers/NotFound";

const pb = new PocketBase("http://127.0.0.1:8090");

function App() {
  return (
    <>
      <NotificationMessage></NotificationMessage>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home pb={pb} />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
