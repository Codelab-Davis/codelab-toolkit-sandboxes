import { RouteObject } from "react-router-dom";
import { useContextParentFiles } from "../sandbox-files/usecontext/usecontext-parent";
import { useContextUsageFiles } from "../sandbox-files/usecontext/usecontext-usage";
import CustomSandbox from "../components/CustomSandbox";
import { useContextBadFiles } from "../sandbox-files/usecontext/usecontext-bad";
import { useContextChangeFiles } from "../sandbox-files/usecontext/usecontext-change";
import { useContextPostsFiles } from "../sandbox-files/usecontext/usecontext-posts";

export const useContextRoutes : RouteObject[] = [
    {
        path: "parent",
        element: <CustomSandbox files={useContextParentFiles} />,
    },
    {
        path:"change",
        element: <CustomSandbox files={useContextChangeFiles} />,
    },
    {
        path: "usage",
        element: <CustomSandbox files={useContextUsageFiles} />,
    },
    {
        path: "bad",
        element: <CustomSandbox files={useContextBadFiles} />,   
    },
    {
        path: "posts",
        element: <CustomSandbox files={useContextPostsFiles} />,
    }
]