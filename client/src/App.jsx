import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import History from "./pages/History";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="city/:city" element={<City />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
