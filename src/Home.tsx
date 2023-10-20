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

    const customHooksRoutes: LinkType[] = [
        {
            title: "Custom Hooks Counter",
            link: "/custom-hooks/counter",
        },
        {
            title: "Custom Hooks Theme",
            link: "/custom-hooks/theme",
        },
    ];

    const useReducerRoutes: LinkType[] = [
        {
            title: "useReducer Counter",
            link: "/usereducer/counter",
        },
        {
            title: "useReducer Context",
            link: "/usereducer/context",
        },
        {
            title: "useReducer Posts",
            link: "/usereducer/posts",
        },
    ];

    return (
        <div className="flex place-content-center min-h-screen flex-wrap bg-neutral-900 p-16 text-white">
            <h1 className="flex mb-16 w-full justify-center text-5xl font-bold">
                CodeLab Toolkit Sandboxes 🧰
            </h1>
            <div className="flex w-full flex-wrap justify-center gap-8">
                <LinkGroupCard
                    title="🎍 useContext Hook"
                    description="Another Way to Share Data"
                    links={useContextRoutes}
                />
                <LinkGroupCard
                    title="🕹️ useReducer Hook"
                    description="A Safe Way To Interact With Data"
                    links={useReducerRoutes}
                />
                <LinkGroupCard
                    title="🏗️ Custom Hooks"
                    description="Reusable Logic"
                    links={customHooksRoutes}
                />
                <LinkGroupCard
                    title="🎨 Tailwind"
                    description="Utility First CSS"
                    links={tailwindRoutes}
                />
            </div>
        </div>
    );
}
