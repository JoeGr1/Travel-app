import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.scss";
import SeasonPage from "./pages/SeasonPage/SeasonPage";
import OccasionPage from "./pages/OccasionPage/OccasionPage";
import DestinationsPage from "./pages/DestinationsPage/DestinationsPage";

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
            path="//:season/:occasion/:continent/:countryId"
            element={<DestinationsPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
