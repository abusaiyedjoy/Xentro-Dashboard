
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Users from './../Pages/Users/UserDashboard';
import Products from './../Pages/Products/Products';
import MyProfile from './../Pages/Profile/Profile';


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
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