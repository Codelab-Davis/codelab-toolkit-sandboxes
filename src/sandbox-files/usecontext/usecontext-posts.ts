export const useContextPostsFiles = {
    "/index.html": {
        code: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>`,
        hidden: true,
    },
    "/src/main.tsx": `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PostsProvider } from "./lib/store/PostsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PostsProvider>
            <App />
        </PostsProvider>
    </React.StrictMode>
);
`,
    "/src/App.tsx": {
        code: `import { useContext, useEffect } from "react";
import "./App.css";
import { PostsContext } from "./lib/store/PostsContext";
import { posts } from "./lib/data/fakedata";
import Posts from "./components/Posts";

function App() {
    const { setPosts } = useContext(PostsContext);

    useEffect(() => {
        setPosts(posts);
    }, []);

    return (
        <>
            <div className="flex w-full flex-wrap justify-center p-10">
                <div className="flex w-full lg:w-2/3 flex-wrap gap-y-10">
                    <h1 className="w-full text-center text-4xl">Posts</h1>
                    <div className="flex flex-wrap justify-center">
                        <Posts />
                    </div>
                </div>

                <p className="mt-4 w-full text-center text-sm text-gray-500">
                    Note: To reset the posts, refresh the page.
                </p>
            </div>
        </>
    );
}

export default App;
`,
        active: true,
    },
    "src/index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
    "package.json": {
        code: `{
  "name": "usecontext-posts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "4.1.4",
    "esbuild-wasm": "0.17.12"
  },
  "keywords": [],
  "description": ""
}`,
        hidden: true,
    },
    "tailwind.config.js": {
        code: `/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
`,
        "postcss.config.js": `export default {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
  },
};
`,
    },
    "src/App.css": {
        code: ``,
        hidden: true,
    },
    "postcss.config.js": {
        code: `export default {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    };
    `,
        hidden: true,
    },
    "src/components/PostCard.tsx": {
        code: `import { useContext } from "react";
import { Post, PostsContext } from "../lib/store/PostsContext";

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    const { posts, setPosts } = useContext(PostsContext);

    const onDelete = () => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div
            key={post.id}
            className="min-h-64 flex w-64 flex-col items-center justify-center gap-2 rounded-sm border-2 border-black bg-yellow-100 p-6"
        >
            <h2 className="text-xl">{post.title}</h2>
            <p className="text-md">{post.body}</p>
            <button
                className="mt-2 rounded border-2 border-black bg-red-500 px-4 py-1 font-bold text-white hover:bg-red-600"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default PostCard;
`,
    },
    "src/components/Posts.tsx": {
        code: `import { useContext } from "react";
import { PostsContext } from "../lib/store/PostsContext";
import PostCard from "./PostCard";

function Posts() {
    const { posts } = useContext(PostsContext);

    return (
        <div className="flex flex-wrap justify-center gap-5">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Posts;
`,
    },
    "src/lib/store/PostsContext.tsx": {
        code: `import { createContext, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostsContextValue {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostsContext = createContext<PostsContextValue>({
    posts: [],
    setPosts: () => {},
});

interface PostsProviderProps {
    children: React.ReactNode;
}

const PostsProvider = ({ children }: PostsProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    );
};

export type { Post };
export { PostsContext, PostsProvider };
`,
    },
    "src/lib/data/fakedata.ts": {
        code: `import { Post } from "../store/PostsContext";

const posts: Post[] = [
    {
        id: 1,
        title: "Lorem Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Sed Do Eiusmod",
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        title: "Ut Enim Ad Minim",
        body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 4,
        title: "Duis Aute Irure",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 5,
        title: "Excepteur Sint Occaecat",
        body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 6,
        title: "Nemo Enim Ipsam",
        body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
        id: 7,
        title: "Neque Porro Quisquam",
        body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
];

export { posts };
`,
    },
};
