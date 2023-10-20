import "./App.css";
import { customHooksRoutes } from "./routes/custom-hooks";
import { tailwindRoutes } from "./routes/tailwind";
import { useContextRoutes } from "./routes/usecontext";
import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import { useReducerRoutes } from "./routes/usereducer";

function Home() {
    return (
        <div className="flex flex-wrap">
            <Link className="w-full" to="/usecontext/usage">useContext Usage</Link>
            <Link className="w-full" to="/usecontext/change">useContext Change</Link>
            <Link className="w-full" to="/usecontext/parent">useContext Parent</Link>
            <Link className="w-full" to="/usecontext/bad">useContext Bad</Link>
            <Link className="w-full" to="/usecontext/posts">useContext Posts</Link>
            <Link className="w-full" to="/tailwind/color">Tailwind Color</Link>
            <Link className="w-full" to="/tailwind/font">Tailwind Font</Link>
            <Link className="w-full" to="/custom-hooks/counter">Custom Hooks Counter</Link>
            <Link className="w-full" to="/custom-hooks/theme">Custom Hooks Theme</Link>
            <Link className="w-full" to="/usereducer/counter">useReducer Counter</Link>
            <Link className="w-full" to="/usereducer/context">useReducer Context</Link>
            <Link className="w-full" to="/usereducer/posts">useReducer Posts</Link>
        </div>
    );
}

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "usecontext",
        children: useContextRoutes,
    },
    {
        path: "tailwind",
        children: tailwindRoutes
    },
    {
        path: "custom-hooks",
        children: customHooksRoutes,
    },
    {
        path: "usereducer",
        children: useReducerRoutes,
    }
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
