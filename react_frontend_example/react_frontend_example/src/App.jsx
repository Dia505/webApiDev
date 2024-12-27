import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./public/home_page";
import { InfoContext } from "./context/infoContext";
// import Register from "./public/register";
import LoginPage from "./public/login";
 
function App() {
  const token = false;
  const privateRoutes = [];
  const publicRoutes = [
    // { path: "/register", element: <Register /> },
    { path: "/", element: <HomePage/> },
    { path: "/login", element: <LoginPage/> },
  ];
 
  const router = token ? privateRoutes : publicRoutes;

  const [text, setText] = useState("");
 
  return (
    <>
      <InfoContext.Provider value={{text, setText}}>

        {/* Pages are created from RouteProvider */}
        <RouterProvider router={createBrowserRouter(router)} />

      </InfoContext.Provider>
    </>
  );
}
 
export default App;
 