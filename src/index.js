// for router we have to create the route configuration with createBrowserRouter where we mention the path and the element which we want to render
// to render in root level we use RouterProvider these both we import from react-rout-dom.
//Outlet is used in parent  to render the children route component.
// Here AppLayout is parent inside it we have to render the children using Outlet component.
// : in route tell this is dynamic

// Lazy loading is also called
// Chunking, COde Splitting, Dynamic Bundling,Lazy Loading, On demand Loading, dynamic import
// here we import {lazy,suspense} :- const About = lazy(() => import("./components/About"));
// <Suspense fallback={<h1>Loading.....</h1>}> <About /> </Suspense>
// we can use shimmer or jsx instead of Loading...
// fallback we use to show some jsx or shimmer.
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

//lazy loading import:
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  //fake data for context api i.e. authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    // Dumy we call an API for user authentication after that we got the data,we send the state and setState as value in context.provider the context which we created i.e UserContext
    const data = {
      name: "Shubham",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
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
          <Suspense fallback={<h1>Loading.....</h1>}>
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

// export default App;
