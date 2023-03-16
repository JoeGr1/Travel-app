import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:season" element={<SeasonPage />}>
            <Route path="/:occasion" element={<OccasionPage />}>
              <Route path="/:continent" element={<DestinationsPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
