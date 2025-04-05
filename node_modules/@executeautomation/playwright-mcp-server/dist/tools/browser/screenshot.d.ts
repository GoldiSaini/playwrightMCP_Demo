import { BrowserToolBase } from './base.js';
import { ToolContext, ToolResponse } from '../common/types.js';
/**
 * Tool for taking screenshots of pages or elements
 */
export declare class ScreenshotTool extends BrowserToolBase {
    private screenshots;
    /**
     * Execute the screenshot tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
    /**
     * Get all stored screenshots
     */
    getScreenshots(): Map<string, string>;
}
