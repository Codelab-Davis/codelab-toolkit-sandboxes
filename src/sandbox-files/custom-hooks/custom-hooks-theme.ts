export const customHooksThemeFiles = {
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
        code: `import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
    const { isDarkMode, toggleTheme } = useTheme();

    const themeText = isDarkMode ? "Dark 🌙" : "Light ☀️";

    return (
        <>
            <div className="flex h-full min-h-screen w-full flex-wrap items-center justify-center bg-white dark:bg-zinc-800 dark:text-white">
                <div className="flex h-1/3 flex-wrap gap-6">
                    <div className="flex w-full justify-center text-4xl font-bold">
                        Current Theme: {themeText}
                    </div>
                    <div className="flex w-full justify-center">
                        <button
                            className="rounded border border-black bg-zinc-300 hover:bg-zinc-400 px-4 py-2 dark:border-white dark:bg-zinc-600 dark:hover:bg-zinc-700"
                            onClick={toggleTheme}
                        >
                            Toggle Theme
                        </button>
                    </div>
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
    darkMode: 'class'
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
    "src/hooks/useTheme.tsx": {
        code: `import { useEffect, useState } from "react";

export function useTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(isDarkMode ? "light" : "dark");
        root.classList.add(isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return { isDarkMode, toggleTheme };
}`,
    },
};
