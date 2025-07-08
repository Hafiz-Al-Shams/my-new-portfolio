import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import ProjectDetails from "../components/ProjectDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    },
    {
        path: 'project-details/:projectName',
        element: <ProjectDetails></ProjectDetails>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;