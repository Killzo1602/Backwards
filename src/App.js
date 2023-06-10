import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotificationMessage from "./components/NotificationMessage";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import GameList from "./containers/GameList";
import Game from "./containers/Game";

import PocketBase from "pocketbase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/About"></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
