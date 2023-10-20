import { RouteObject } from "react-router-dom";
import CustomSandbox from "../components/CustomSandbox";
import { tailwindFontFiles } from "../sandbox-files/tailwind/tailwind-font";
import { tailwindColorFiles } from "../sandbox-files/tailwind/tailwind-color";

export const tailwindRoutes : RouteObject[] = [
    {
        path: "color",
        element: <CustomSandbox files={tailwindColorFiles} />, 
    },
    {
        path: "font",
        element: <CustomSandbox files={tailwindFontFiles} />,
    }
];