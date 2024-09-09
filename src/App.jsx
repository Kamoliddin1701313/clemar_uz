import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import MainLayouts from "./components/mainlayout/MainLayouts";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<MainLayouts />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
