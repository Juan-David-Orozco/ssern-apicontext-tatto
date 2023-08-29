import { BrowserRouter , Route, Routes } from "react-router-dom";
import { HomePage, Prices, Contact, Services, NotFoundPage } from './pages/IndexPages'
import { Navigation } from "./components/Navigation";
import './App.css';

function App() {
  return (
    <div className="container-fluid bg-dark text-white h-100">
      <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/precios" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
