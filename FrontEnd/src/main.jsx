import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import AdminMiddleware from "./middleware/AdminMiddleware.jsx";
// import ListBuku from "./pages/ListBuku.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Register from "./pages/Register.jsx";
import Employee from "./pages/Employee.jsx";
import Recruitment from "./pages/Recruitment.jsx";
import DetailPegawai from "./pages/DetailPegawai.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/recruitment",
        element: <Recruitment />,
      },
      {
        path: "/detailpegawai/:id",
        element: <DetailPegawai />,
      },
      // {
      //   path: '/',
      //   element:
      //   <AdminMiddleware>
      //     {" "}
      //     <ListBuku/>
      //   </AdminMiddleware>
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
