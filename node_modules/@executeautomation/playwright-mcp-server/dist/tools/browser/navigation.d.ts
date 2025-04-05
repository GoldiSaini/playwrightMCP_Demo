import { BrowserToolBase } from './base.js';
import { ToolContext, ToolResponse } from '../common/types.js';
/**
 * Tool for navigating to URLs
 */
export declare class NavigationTool extends BrowserToolBase {
    /**
     * Execute the navigation tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for closing the browser
 */
export declare class CloseBrowserTool extends BrowserToolBase {
    /**
     * Execute the close browser tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for navigating back in browser history
 */
export declare class GoBackTool extends BrowserToolBase {
    /**
     * Execute the go back tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for navigating forward in browser history
 */
export declare class GoForwardTool extends BrowserToolBase {
    /**
     * Execute the go forward tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
