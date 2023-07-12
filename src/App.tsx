import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navigation from "./reusable-components/Navigation";

function App() {
  return (
    <div className="text-center">
      <Navigation />
      <h1 className="text-3xl text-primary">
        This is the Home Page of the bunch of re-usable components!
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
