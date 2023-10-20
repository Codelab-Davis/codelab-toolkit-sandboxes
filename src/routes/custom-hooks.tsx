import { RouteObject } from "react-router-dom";
import CustomSandbox from "../components/CustomSandbox";
import { customHooksCounterFiles } from "../sandbox-files/custom-hooks/custom-hooks-counter";
import { customHooksThemeFiles } from "../sandbox-files/custom-hooks/custom-hooks-theme";

export const customHooksRoutes: RouteObject[] = [
    {
        path: "counter",
        element: <CustomSandbox files={customHooksCounterFiles} />,
    },
    {
        path: "theme",
        element: <CustomSandbox files={customHooksThemeFiles} />,
    }
];