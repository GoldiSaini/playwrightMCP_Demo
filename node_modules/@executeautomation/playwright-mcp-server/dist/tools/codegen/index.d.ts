import { Tool } from '../../types.js';
import type { Browser, Page } from 'playwright';
declare global {
    var browser: Browser | undefined;
    var page: Page | undefined;
}
export declare const startCodegenSession: Tool;
export declare const endCodegenSession: Tool;
export declare const getCodegenSession: Tool;
export declare const clearCodegenSession: Tool;
export declare const codegenTools: Tool[];
