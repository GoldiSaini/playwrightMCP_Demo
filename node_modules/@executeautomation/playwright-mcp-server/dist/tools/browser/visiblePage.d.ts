import { ToolContext, ToolResponse } from "../common/types.js";
import { BrowserToolBase } from "./base.js";
/**
 * Tool for getting the visible text content of the current page
 */
export declare class VisibleTextTool extends BrowserToolBase {
    /**
     * Execute the visible text page tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for getting the visible HTML content of the current page
 */
export declare class VisibleHtmlTool extends BrowserToolBase {
    /**
     * Execute the visible HTML page tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
