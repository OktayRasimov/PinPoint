import PageNotFound from "./Pages/PageNotFound";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import FullPageSpinner from "./Components/FullPageSpinner";
import AppLayout from "./Pages/AppLayout";
import Form from "./Components/Form";
import CountriesBox from "./Components/CountriesBox";
import CitiesBox from "./Components/CitiesBox";

const Homepage = lazy(() => import("./Pages/Homepage"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Product = lazy(() => import("./Pages/Product"));
const Login = lazy(() => import("./Pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageSpinner />}>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CitiesBox />} />
            {/* <Route path="cities/id" element={<CitiesBox />} /> */}
            <Route path="form" element={<Form />} />
            <Route path="countries" element={<CountriesBox />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
