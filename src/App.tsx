import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Headline from "./pages/HeadLine";
import Search from "./pages/Search";
import BySource from "./pages/BySource";
import ByCategory from "./pages/ByCategory";
import MyFavorite from "./pages/MyFavorite";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Headline />
  },
  {
    path:"/search/:keyword",
    element: <Search />
  },
  {
    path:"/source/:sourceid",
    element: <BySource />
  },
  {
    path:"/category/:categoryid",
    element: <ByCategory />
  },
  {
    path:"/country/:countryid",
    element: <Headline />
  },
  {
    path:"/my-favorites",
    element: <MyFavorite />
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
