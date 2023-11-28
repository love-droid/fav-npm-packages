import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Master from "./Layout/Master";
import HomePage from "./Pages/HomePage";
import AddFavourite from "./Pages/AddFavourite";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Master />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/AddFavourite" element={<AddFavourite />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
