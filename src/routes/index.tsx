import { createBrowserRouter } from "react-router-dom";
import ProjetoItau from "../Pages/Project-Itau/ProjectItau";
import App from "../App";
import PixNaSumUp from "../Pages/Project-SumUp/PixNaSumUp";
import SystemInPhp from "../Pages/SystemInPhP/SystemInPhp";
import MyShop from "../Pages/MyShop/MyShop";
import PortifolioProject from "../Pages/PortifolioProject/PortifolioProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/redesign-itau",
    element: <ProjetoItau />,
  },
  {
    path: "/projects/pix-na-sumUp",
    element: <PixNaSumUp />,
  },
  {
    path: "/projects/system-in-php",
    element: <SystemInPhp />,
  },
  {
    path: "/projects/my-Shop",
    element: <MyShop />,
  },
  {
    path: "/projects/Portifolio-Project",
    element: <PortifolioProject />
  }
]);

export default router;
