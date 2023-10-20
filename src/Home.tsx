import { Link } from "react-router-dom";
import LinkGroupCard, { LinkType } from "./components/LinkGroupCard";

export default function Home() {
    const useContextRoutes: LinkType[] = [
        {
            title: "useContext Usage",
            link: "/usecontext/usage",
        },
        {
            title: "useContext Change",
            link: "/usecontext/change",
        },
        {
            title: "useContext Parent",
            link: "/usecontext/parent",
        },
        {
            title: "useContext Bad",
            link: "/usecontext/bad",
        },
        {
            title: "useContext Posts",
            link: "/usecontext/posts",
        },
    ];

    const tailwindRoutes: LinkType[] = [
        {
            title: "Tailwind Color",
            link: "/tailwind/color",
        },
        {
            title: "Tailwind Font",
            link: "/tailwind/font",
        },
    ];

    return (
        <div className="flex min-h-screen flex-wrap bg-neutral-900 p-8 text-white">
            <h1 className="mb-8 flex w-full justify-center text-4xl font-bold">
                CodeLab Toolkit Sandboxes 🧰
            </h1>
            <div className="flex w-full flex-wrap justify-center gap-8">
                <LinkGroupCard
                    title="useContext"
                    description="Another Way to Share Data"
                    links={useContextRoutes}
                />
                <LinkGroupCard
                    title="Tailwind"
                    description="Utility First CSS"
                    links={tailwindRoutes}
                />
            </div>
            <Link className="w-full" to="/usecontext/usage">
                useContext Usage
            </Link>
            <Link className="w-full" to="/usecontext/change">
                useContext Change
            </Link>
            <Link className="w-full" to="/usecontext/parent">
                useContext Parent
            </Link>
            <Link className="w-full" to="/usecontext/bad">
                useContext Bad
            </Link>
            <Link className="w-full" to="/usecontext/posts">
                useContext Posts
            </Link>
            <Link className="w-full" to="/tailwind/color">
                Tailwind Color
            </Link>
            <Link className="w-full" to="/tailwind/font">
                Tailwind Font
            </Link>
            <Link className="w-full" to="/custom-hooks/counter">
                Custom Hooks Counter
            </Link>
            <Link className="w-full" to="/custom-hooks/theme">
                Custom Hooks Theme
            </Link>
            <Link className="w-full" to="/usereducer/counter">
                useReducer Counter
            </Link>
            <Link className="w-full" to="/usereducer/context">
                useReducer Context
            </Link>
            <Link className="w-full" to="/usereducer/posts">
                useReducer Posts
            </Link>
        </div>
    );
}
