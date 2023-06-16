import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {
    GamePage,
    HeroPage,
    NotFoundPage,
    WonPage
} from '../views'

export const ROUTES = Object.freeze({
    ROOT: '/',
    GAME: '/play',
    WON: '/won-game'
})

const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <HeroPage />,
    },
    {
        path: ROUTES.GAME,
        element: <GamePage />,
    },
    {
        path: ROUTES.WON,
        element: <WonPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export const Routes = () => <RouterProvider router={router} />
