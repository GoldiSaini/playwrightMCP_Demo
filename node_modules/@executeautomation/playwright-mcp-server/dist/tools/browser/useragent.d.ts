import { BrowserToolBase } from './base.js';
import type { ToolContext, ToolResponse } from '../common/types.js';
interface CustomUserAgentArgs {
    userAgent: string;
}
/**
 * Tool for validating custom User Agent settings
 */
export declare class CustomUserAgentTool extends BrowserToolBase {
    /**
     * Execute the custom user agent tool
     */
    execute(args: CustomUserAgentArgs, context: ToolContext): Promise<ToolResponse>;
}
export {};
