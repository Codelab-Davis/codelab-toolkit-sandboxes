export const tailwindColorFiles = {
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

function App() {
    return (
        <>
            <div className="flex h-full min-h-screen w-full flex-wrap items-center justify-center gap-4 bg-gray-dark text-2xl font-bold">
                <div className="flex h-72 w-64 items-center justify-center rounded-md bg-tahiti-100 shadow-md">
                    Tahiti 100
                </div>
                <div className="flex h-72 w-64 items-center justify-center rounded-md bg-tahiti-400 shadow-md">
                    Tahiti 400
                </div>
                <div className="flex h-72 w-64 items-center justify-center rounded-md bg-tahiti-700 shadow-md">
                    Tahiti 700
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
  "name": "tailwind-font",
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
        extend: {
            colors: {
                "gray-dark": "#273444",
                tahiti: {
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
            },
        },
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
