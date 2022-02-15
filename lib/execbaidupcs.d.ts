/// <reference types="node" />
export default function execup(localfile: string, desdir: string): import("child_process").PromiseWithChild<{
    stdout: string;
    stderr: string;
}>;
