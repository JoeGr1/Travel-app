import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.scss";
import SeasonPage from "./pages/SeasonPage/SeasonPage";
import OccasionPage from "./pages/OccasionPage/OccasionPage";
import DestinationsPage from "./pages/DestinationsPage/DestinationsPage";
import ContinentPage from "./pages/ContinentPage/ContinentPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:season" element={<SeasonPage />} />
          <Route path="/:season/:occasion" element={<OccasionPage />} />
          <Route
            path="/:season/:occasion/:continent"
            element={<DestinationsPage />}
          ></Route>
          <Route
            path="/:season/:occasion/:continent/:countryId"
            element={<DestinationsPage />}
          ></Route>
          <Route path="/:continent-all" element={<ContinentPage />} />
          <Route
            path="/:continent-all/:countryId"
            element={<ContinentPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
