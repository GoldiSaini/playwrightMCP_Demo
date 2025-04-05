import { BrowserToolBase } from './base.js';
import { ToolContext, ToolResponse } from '../common/types.js';
/**
 * Tool for saving page as PDF
 */
export declare class SaveAsPdfTool extends BrowserToolBase {
    /**
     * Execute the save as PDF tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
