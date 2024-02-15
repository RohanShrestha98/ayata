import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import BaseLayout from "./layout/BaseLayout";
import CareersPage from "./pages/careers/CareersPage";
import ClientPage from "./pages/clients/ClientPage";
import OurWorkPage from "./pages/ourworks/OurWorkPage";

function App() {
  return (
    <div className="element" id="containerElement">
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/clients" element={<ClientPage />} />
            <Route path="/our-works" element={<OurWorkPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
