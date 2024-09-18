import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import MainLayouts from "./components/mainlayout/MainLayouts";
import About from "./pages/about/About";
import News1 from "./pages/news/News1";
import News2 from "./pages/news/News2";
import News3 from "./pages/news/News3";
import ProductsLayout from "./components/productsLayout/ProductsLayout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<MainLayouts />} />
          <Route path={`/products/:id`} element={<ProductsLayout />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/news/1`} element={<News1 />} />
          <Route path={`/news/2`} element={<News2 />} />
          <Route path={`/news/3`} element={<News3 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
