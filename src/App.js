import "./App.css";
import Navbar from "./components/Navbar";
import { Link, BrowserRouter, Route, Routes, Router } from "react-router-dom";
import PocketBase from "pocketbase";
import Footer from "./components/Footer";
import NotificationMessage from "./components/NotificationMessage";
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
      {/*<Home pb={pb}></Home>*/}
      <Footer></Footer>
    </>
  );
}

export default App;
