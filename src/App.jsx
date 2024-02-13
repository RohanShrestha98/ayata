import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import BaseLayout from "./layout/BaseLayout";
import CareersPage from "./pages/careers/CareersPage";

function App() {
  return (
    <div className="element" id="containerElement">
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
