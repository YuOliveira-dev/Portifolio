import { createBrowserRouter } from "react-router-dom";
import ProjetoItau from "../Pages/Project-Itau/ProjectItau";
import App from "../App";
import PixNaSumUp from "../Pages/Project-SumUp/PixNaSumUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/projects/redesign-itau",
        element: <ProjetoItau />
    },
    {
        path: "/projects/pix-na-sumUp",
        element: <PixNaSumUp />
    },
]);

export default router