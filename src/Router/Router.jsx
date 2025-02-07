
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Users from './../Pages/Users/UserDashboard';
import Products from './../Pages/Products/Products';
import MyProfile from './../Pages/Profile/Profile';
import NotFound from './../Pages/ErrorPage/NotFound';


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <MyProfile />,
        },
        {
          path: "/profile",
          element: <MyProfile />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

export default Router;