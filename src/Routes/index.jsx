import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StorieProvider } from "../Contexts/Storie";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <StorieProvider>
              <Home />
            </StorieProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
