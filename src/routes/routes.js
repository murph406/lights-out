import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";

import { WelcomePage, NotFoundPage } from '../components'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/welcome" replace />,
    },
    {
        path: "/welcome",
        element: <WelcomePage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes