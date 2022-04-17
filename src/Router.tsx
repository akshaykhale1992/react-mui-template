import { Routes, Route } from "react-router-dom";
import { Home, About, Users } from './pages';

const Router = () => (
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Router;