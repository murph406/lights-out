import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";

import { HeroPage, NotFoundPage, GamePage, WonPage } from '../components'

export const PATH = {
    ROOT: '/',
    WELCOME: '/welcome',
    GAME: '/play',
    WON: '/won-game'
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
        path: PATH.WON,
        element: <WonPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes