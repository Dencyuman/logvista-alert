import React from 'react'
import {createRoot} from 'react-dom/client'
import './globals.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Toaster} from "@/components/ui/sonner"
import App from './App'
import SamplePage from './pages/sample/sample'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // children: [
        //     { path: "sample", element: <SamplePage /> }, // さらにルートを定義
        // ],
    },
    {
        path: "sample",
        element: <SamplePage />,
    }
]);

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster />
    </React.StrictMode>
)
