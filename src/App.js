import Header from "./components/Header/Header";
import HomePage from "./components/pages/HomePage/HomePage";
import Page1 from "./components/pages/Page1/Page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<HomePage />} />
          <Route path="/3" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
