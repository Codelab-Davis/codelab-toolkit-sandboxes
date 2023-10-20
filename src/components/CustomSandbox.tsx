import {
    SandpackProvider,
    SandpackLayout,
    SandpackPreview,
    SandpackCodeEditor,
    SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSandbox = ({files}: {files: any}) => {
    return (
        <SandpackProvider
            template="vite-react"
            theme={atomDark}
            files={files}
        >
            <SandpackLayout>
                <div className="grid h-screen w-full grid-cols-12 items-center justify-center overflow-y-hidden bg-zinc-800">
                    <SandpackFileExplorer
                        className="col-span-2 h-full overflow-auto border-r border-zinc-500 text-base"
                        autoHiddenFiles
                    />
                    <SandpackCodeEditor
                        showTabs={false}
                        wrapContent
                        className="col-span-5 h-full overflow-auto border-r border-zinc-500 text-base"
                    />
                    <SandpackPreview
                        className="col-span-5 h-full overflow-auto"
                        showOpenInCodeSandbox={false}
                    />
                </div>
            </SandpackLayout>
        </SandpackProvider>
    );
};

export default CustomSandbox;
