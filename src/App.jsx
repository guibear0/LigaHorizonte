import React, { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Competition from "./pages/Competition";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </BrowserRouter>
  );
}
