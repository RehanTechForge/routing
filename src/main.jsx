import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About";
import Services from "./components/Services/Services.jsx";
import Product from "./components/Product/Product.jsx";
import Blog from "./components/Blog/Blog.jsx";
import ProductDetails from "./components/ProductDetails/productDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "productsdetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
