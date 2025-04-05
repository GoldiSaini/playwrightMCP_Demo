import { BrowserToolBase } from './base.js';
import type { ToolContext, ToolResponse } from '../common/types.js';
interface ExpectResponseArgs {
    id: string;
    url: string;
}
interface AssertResponseArgs {
    id: string;
    value?: string;
}
/**
 * Tool for setting up response wait operations
 */
export declare class ExpectResponseTool extends BrowserToolBase {
    /**
     * Execute the expect response tool
     */
    execute(args: ExpectResponseArgs, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for asserting and validating responses
 */
export declare class AssertResponseTool extends BrowserToolBase {
    /**
     * Execute the assert response tool
     */
    execute(args: AssertResponseArgs, context: ToolContext): Promise<ToolResponse>;
}
export {};
