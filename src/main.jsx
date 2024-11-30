import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import Root from "./Root.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./components/Signup.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <App/>,
        loader:()=>fetch('http://localhost:5000/coffee')
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ],
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
 
 
]);

createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
);
