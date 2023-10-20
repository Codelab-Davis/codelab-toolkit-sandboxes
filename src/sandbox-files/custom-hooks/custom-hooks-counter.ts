export const customHooksCounterFiles = {
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
import { useCounter } from "./hooks/useCounter";

function App() {
    const {
        count: count1,
        increment: increment1,
        decrement: decrement1,
    } = useCounter();
    const {
        count: count2,
        increment: increment2,
        decrement: decrement2,
    } = useCounter();

    return (
        <>
            <div className="grid h-full min-h-screen w-full grid-cols-2 items-center justify-center bg-zinc-800 text-white">
                <div className="col-span-1 grid h-1/5 grid-cols-2">
                    <div className="col-span-2 flex justify-center text-4xl h-1/3 font-bold">
                        {count1}
                    </div>
                    <div className="col-span-1 flex justify-center h-1/2">
                        <Button onClick={decrement1}>-</Button>
                    </div>
                    <div className="col-span-1 flex justify-center h-1/2">
                        <Button onClick={increment1}>+</Button>
                    </div>
                </div>
                <div className="col-span-1 grid h-1/5 grid-cols-2">
                    <div className="col-span-2 flex justify-center text-4xl h-1/3 font-bold">
                        {count2}
                    </div>
                    <div className="col-span-1 flex justify-center h-1/2">
                        <Button onClick={decrement2}>-</Button>
                    </div>
                    <div className="col-span-1 flex justify-center h-1/2">
                        <Button onClick={increment2}>+</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};

function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            className="w-2/3 rounded border border-slate-200 bg-neutral-700 text-xl font-bold"
            onClick={onClick}
        >
            {children}
        </button>
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
    "src/hooks/useCounter.tsx": {
        code: `import { useState } from "react";

export function useCounter(initialValue: number = 0) {
    const [count, setCount] = useState(initialValue);
    
    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return { count, increment, decrement };
}`,
    },
};
