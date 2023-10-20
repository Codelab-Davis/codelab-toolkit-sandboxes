import "./App.css";
import { customHooksRoutes } from "./routes/custom-hooks";
import { tailwindRoutes } from "./routes/tailwind";
import { useContextRoutes } from "./routes/usecontext";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { useReducerRoutes } from "./routes/usereducer";
import Home from "./Home";

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
        children: tailwindRoutes,
    },
    {
        path: "custom-hooks",
        children: customHooksRoutes,
    },
    {
        path: "usereducer",
        children: useReducerRoutes,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
