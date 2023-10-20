export const useReducerPostsFiles = {
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
    "/src/main.tsx": {
        code: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PostsProvider } from "./lib/store/Posts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PostsProvider>
            <App />
        </PostsProvider>
    </React.StrictMode>
);
`,
    },
    "/src/App.tsx": {
        code: `import PostsDisplay from "./components/PostDisplay";
import PostForm from "./components/PostForm";
import usePosts from "./lib/hooks/usePosts";

function App() {
    const { posts, dispatch } = usePosts();

    const likePost = (index: number) => {
        dispatch({ type: "LIKE_POST", payload: index });
    };

    const addPost = (text: string) => {
        dispatch({ type: "ADD_POST", payload: text });
    };

    return (
        <>
            <div className="flex min-h-screen w-full flex-wrap place-content-center place-items-center justify-center gap-y-6 bg-zinc-800 py-10 text-slate-100">
                <div className="flex w-full justify-center">
                    <PostForm addPost={addPost} />
                </div>
                <div className="flex w-full justify-center">
                    <PostsDisplay posts={posts} likePost={likePost} />
                </div>
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
  "name": "usereducer-posts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.268.0",
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
    "src/lib/store/Posts.tsx": {
        code: `import { createContext, useReducer } from "react";

type Post = {
    text: string;
    likes: number;
};

const initialPosts: Post[] = [
    {
        text: "This is a post",
        likes: 0,
    },
    {
        text: "This is another post",
        likes: 0,
    },
];

type PostReducerAddAction = {
    type: "ADD_POST";
    payload: string;
};

type PostReducerLikeAction = {
    type: "LIKE_POST";
    payload: number;
};

type PostReducerAction = PostReducerAddAction | PostReducerLikeAction;

const PostsReducer = (state: Post[], action: PostReducerAction) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, { text: action.payload, likes: 0 }];
        case "LIKE_POST":
            // return all the posts as they were before, except for the one at the index of the payload
            // for that one, return a new object with the same text, but with the likes incremented by 1
            return state.map((post, index) => {
                if (index === action.payload) {
                    return { ...post, likes: post.likes + 1 };
                }
                return post;
            });
        default:
            return state;
    }
};

type PostContextType = {
    posts: Post[];
    dispatch: React.Dispatch<PostReducerAction>;
};

const PostContext = createContext<PostContextType>({
    posts: [],
    dispatch: () => {},
});

type PostsProviderProps = {
    children: React.ReactNode;
};

const PostsProvider = ({ children }: PostsProviderProps) => {
    const [posts, dispatch] = useReducer(PostsReducer, initialPosts);

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};

export { PostsProvider, PostContext };
export type { Post };
`,
    },
    "src/lib/hooks/usePosts.tsx": {
        code: `import { useContext } from "react";
import { PostContext } from "../store/Posts";

function usePosts() {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error("usePosts must be used within a PostsProvider");
    }
    return context;
}

export default usePosts;
`,
    },
    "src/components/PostDisplay.tsx": {
        code: `import { Post } from "../lib/store/Posts";
import PostCard from "./PostCard";

type PostsDisplayProps = {
    posts: Post[];
    likePost: (index: number) => void;
};

function PostsDisplay({ posts, likePost }: PostsDisplayProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4">
            {posts.map((post, index) => (
                <div className="col-span-1" key={index}>
                    <PostCard post={post} likePost={() => likePost(index)} />
                </div>
            ))}
        </div>
    );
}

export default PostsDisplay;
`,
    },
    "src/components/PostCard.tsx": {
        code: `import { ThumbsUp } from "lucide-react";
import { Post } from "../lib/store/Posts";

type PostCardProps = {
    post: Post;
    likePost: () => void;
};

function PostCard({ post, likePost }: PostCardProps) {
    return (
        <div className="grid h-64 w-52 grid-cols-1 grid-rows-3 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-6">
            <p className="col-span-1 row-span-2 max-h-full max-w-full overflow-auto break-words">
                {post.text}
            </p>
            <span className="flex w-full place-items-end justify-start gap-x-2">
                <button
                    className="flex place-items-center gap-x-2 transition-all duration-200 hover:text-zinc-500"
                    onClick={likePost}
                >
                    <ThumbsUp />
                </button>
                <p>{post.likes}</p>
            </span>
        </div>
    );
}

export default PostCard;
`,
    },
    "src/components/PostForm.tsx": {
        code: `import { useState } from "react";

type PostFormProps = {
    addPost: (text: string) => void;
};

const PostForm = ({ addPost }: PostFormProps) => {
    const [text, setText] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addPost(text);
        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-y-10 rounded-lg border border-zinc-700 bg-neutral-900 px-6 py-6"
        >
            <span className="flex flex-wrap gap-y-2">
                <label className="w-full">New Post:</label>
                <input
                    type="text"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-1"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </span>
            <span className="flex w-full">
                <button
                    className="rounded-lg bg-zinc-500 px-4 py-2 text-slate-100 transition-all duration-200 hover:bg-zinc-600"
                    type="submit"
                >
                    Add Post
                </button>
            </span>
        </form>
    );
};

export default PostForm;
`,
    },
};
