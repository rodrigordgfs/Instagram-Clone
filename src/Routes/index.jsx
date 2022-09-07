import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../Contexts/User";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
