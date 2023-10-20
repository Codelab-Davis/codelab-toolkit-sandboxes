export const useContextBadFiles = {
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

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
`,
    "/src/App.tsx": {
        code: `import { createContext, useContext } from "react";

const TextContext = createContext<string>("");

type TextContextProviderProps = {
    children: React.ReactNode;
    defaultText: string;
};

function TextContextProvider({
    children,
    defaultText,
}: TextContextProviderProps) {
    return (
        <TextContext.Provider value={defaultText}>
            {children}
        </TextContext.Provider>
    );
}

function App() {
    return (
        <>
            <div className="place flex h-full min-h-screen w-full flex-wrap items-center justify-center gap-5 bg-zinc-800">
                <TextContextProvider defaultText="Hello">
                    <Card />
                </TextContextProvider>
                <TextContextProvider defaultText="World">
                    <Card />
                </TextContextProvider>
            </div>
        </>
    );
}

function Card() {
    const text = useContext(TextContext);

    return (
        <div className="flex h-48 w-36 place-content-center place-items-center justify-center rounded border-2 border-solid border-slate-100 bg-sky-700 p-10 text-slate-100 ">
            <p>{text}</p>
        </div>
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
  "name": "usecontext-parent",
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
};
