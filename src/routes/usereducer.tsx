import { RouteObject } from "react-router-dom";
import CustomSandbox from "../components/CustomSandbox";
import { useReducerCounterFiles } from "../sandbox-files/usereducer/usereducer-counter";
import { useReducerContextFiles } from "../sandbox-files/usereducer/usereducer-context";
import { useReducerPostsFiles } from "../sandbox-files/usereducer/usereducer-posts";

export const useReducerRoutes : RouteObject[] = [
    {
        path: "counter",
        element: <CustomSandbox files={useReducerCounterFiles} />,
    },
    {
        path: "context",
        element: <CustomSandbox files={useReducerContextFiles} />,
    },
    {
        path:"posts",
        element: <CustomSandbox files={useReducerPostsFiles} />,
    }
]