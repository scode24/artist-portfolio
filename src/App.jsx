import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArtWorkContainer from "./components/ArtWorkContainer";
import ArtWorkSearchContainer from "./components/ArtWorkSearchContainer";
import Dialog from "./components/Dialog";
import Header from "./components/Header";
import PhotoInfoBoxContainer from "./components/PhotoInfoBoxContainer";
import AboutMe from "./pages/AboutMe";
import ArtWork from "./pages/ArtWork";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const images = [
    "../public/images/bg1.jpg",
    "../public/images/bg2.jpg",
    "../public/images/bg3.jpg",
    "../public/images/bg4.jpg",
    "../public/images/bg5.jpg",
  ];

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className="font-style text-sm md:text-[1rem]">
      <Dialog />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutme" exact element={<AboutMe />} />
          <Route path="/artwork" exact element={<ArtWork />}>
            <Route path=":tag" element={<ArtWorkContainer />} />
            <Route
              path="photoinfo/:photoId"
              element={<PhotoInfoBoxContainer />}
            />
            <Route
              path="photoinfo/search"
              element={<ArtWorkSearchContainer />}
            />
          </Route>
          <Route path="/contactme" exact element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
