import "./App.css";
import PocketBase from "pocketbase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotificationMessage from "./components/NotificationMessage";
import Home from "./containers/Home";
import GameList from "./containers/GameList";
import Game from "./containers/Game";
import PageNotFound from "./components/404page/PageNotFound";
import ContactUs from "./components/ContactUs/ContactUs";

const pb = new PocketBase("http://127.0.0.1:8090");

function App() {
  return (
    <>
      <NotificationMessage></NotificationMessage>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home pb={pb} />}></Route>
          <Route path="/gamelist" element={<GameList pb={pb} />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact-us" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
