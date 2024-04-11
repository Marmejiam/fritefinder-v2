import React from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import BarsList from "./BarsList";
import HomePage from "./HomePage";
import BarDetails from "./BarDetails";
import NewBar from "./NewBar";
import ReviewsList from "./ReviewsList";


function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/bars/:id" element={<BarDetails />}></Route>
      <Route path="/bars" element={<BarsList />}></Route>
      <Route path="/new" element={<NewBar />}></Route>
      <Route path="/reviews" element={<ReviewsList />}></Route>
    </Routes>
  );
}
export default AppRoutes
