import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUsername] = useState();

  useEffect(() => {
    const data = {
      user: "Vrushabh",
    };
    setUsername(data.user);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
