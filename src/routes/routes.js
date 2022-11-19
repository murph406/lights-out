import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";

import { HeroPage, NotFoundPage, GamePage } from '../components'

export const PATH = {
    ROOT: '/',
    WELCOME: '/welcome',
    GAME: '/game'
}

const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <Navigate to={PATH.WELCOME} replace />,
    },
    {
        path: PATH.WELCOME,
        element: <HeroPage />,
    },
    {
        path: PATH.GAME,
        element: <GamePage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes