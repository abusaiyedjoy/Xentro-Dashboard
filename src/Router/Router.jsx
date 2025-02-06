
import {createBrowserRouter} from "react-router-dom";
import App from "../App";


  const Router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <App />,
        },
      ],
    },
  ]);

export default Router;