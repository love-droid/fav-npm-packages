import React, { useEffect, useState , useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Master from "./Layout/Master";
import HomePage from "./Pages/HomePage";
import AddFavourite from "./Pages/AddFavourite";
import IndexPage from "./Pages/IndexPage";
import { useNavigate } from "react-router-dom";
import FavoriteState from "./Store/FavoriteState";
import {FavoriteContext} from "../Store/FavoriteState";





export default function App() {

  const { data , setData } =  useContext(FavoriteContext);

  return (
    <FavoriteState>
    <Router>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddFavourite" element={<AddFavourite />} />
          <Route path="/IndexPage" element={<IndexPage />} />
        </Route>
      </Routes>
    </Router>
    </FavoriteState>
   
  );
}
