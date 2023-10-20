import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-wrap bg-neutral-900 p-8 text-white">
            <h1 className="flex w-full justify-center text-4xl font-bold">
                CodeLab Toolkit Sandboxes 🧰
            </h1>
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
