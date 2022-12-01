import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
