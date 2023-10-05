import PageNotFound from "./Pages/PageNotFound";
import FullPageSpinner from "./Components/FullPageSpinner";
import Form from "./Components/Form";
import CountriesBox from "./Components/CountriesBox";
import CitiesBox from "./Components/CitiesBox";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SelectedAddedCityBox from "./Components/SelectedAddedCityBox";

const Homepage = lazy(() => import("./Pages/Homepage"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Product = lazy(() => import("./Pages/Product"));
const Login = lazy(() => import("./Pages/Login"));
const AppLayout = lazy(() => import("./Pages/AppLayout"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer position="top-center" />
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
                <Route path="city" element={<SelectedAddedCityBox />} />
                <Route path="form" element={<Form />} />
                <Route path="countries" element={<CountriesBox />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
