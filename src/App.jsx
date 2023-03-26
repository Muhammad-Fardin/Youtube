import React, { useEffect } from "react";
import { AppContext } from "./context/contextApi.jsx";
import {
  Feed,
  Header,
  SearchResult,
  Sidebar,
  VideoDetails,
} from "./components/index";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <AppContext>
      <HashRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </HashRouter>
    </AppContext>
  );
}

export default App;
