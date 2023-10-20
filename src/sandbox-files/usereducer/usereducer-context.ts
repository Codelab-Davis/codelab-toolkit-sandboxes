export const useReducerContextFiles = {
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
import { CounterProvider } from "./lib/store/Counter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </React.StrictMode>
);
`,
    },
    "/src/App.tsx": {
        code: `import { useContext } from "react";
import { CounterContext } from "./lib/store/Counter";
import Button from "./components/Button";

function App() {
    return (
        <>
            <div className="flex min-h-screen w-full flex-wrap place-items-center justify-center bg-zinc-800 text-slate-100">
                <div className="flex w-full flex-wrap place-items-center gap-y-5">
                    <CounterDisplay />
                    <div className="flex w-full justify-center gap-x-5">
                        <DecrementButton />
                        <ResetButton />
                        <IncrementButton />
                    </div>
                </div>
            </div>
        </>
    );
}

function CounterDisplay() {
    const { count } = useContext(CounterContext);

    return (
        <span className="flex w-full justify-center text-xl font-bold">
            {count}
        </span>
    );
}

function DecrementButton() {
    const { dispatch } = useContext(CounterContext);

    const onDecrementPress = () => {
        dispatch({ type: "decrement" });
    };

    return <Button onClick={onDecrementPress}>-</Button>;
}

function ResetButton() {
    const { dispatch } = useContext(CounterContext);

    const onResetPress = () => {
        dispatch({ type: "reset" });
    };

    return <Button onClick={onResetPress}>Reset</Button>;
}

function IncrementButton() {
    const { dispatch } = useContext(CounterContext);

    const onIncrementPress = () => {
        dispatch({ type: "increment" });
    };

    return <Button onClick={onIncrementPress}>+</Button>;
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
    "src/lib/store/Counter.tsx": {
        code: `import { createContext, useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function countReducer(state: number, action: Action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state > 0 ? state - 1 : state;
        case "reset":
            return 0;
        default:
            throw new Error("Invalid action type");
    }
}

type CounterContextType = {
    count: number;
    dispatch: React.Dispatch<Action>;
};

const CounterContext = createContext<CounterContextType>({
    count: 0,
    dispatch: () => {},
});

type CounterProviderProps = {
    children: React.ReactNode;
};

function CounterProvider({ children }: CounterProviderProps) {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <CounterContext.Provider
            value={{
                count,
                dispatch,
            }}
        >
            {children}
        </CounterContext.Provider>
    );
}

export { CounterContext, CounterProvider };
`,
    },
    "src/components/Button.tsx": {
        code: `type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};

function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            className="flex place-items-center justify-center rounded-md border border-solid border-zinc-400 bg-neutral-800 px-6 py-2 text-lg text-slate-100"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
`,
    },
};
