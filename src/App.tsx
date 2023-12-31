import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navigation from "./main-components/Navigation";

function App() {
  return (
    <div className="text-center">
      <Navigation />
      <h1 className="text-3xl text-primary font-semibold">
        This is the Home Page of the bunch of re-usable components!
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
