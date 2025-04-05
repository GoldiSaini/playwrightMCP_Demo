import { BrowserToolBase } from './base.js';
import { ToolContext, ToolResponse } from '../common/types.js';
/**
 * Tool for retrieving and filtering console logs from the browser
 */
export declare class ConsoleLogsTool extends BrowserToolBase {
    private consoleLogs;
    /**
     * Register a console message
     * @param type The type of console message
     * @param text The text content of the message
     */
    registerConsoleMessage(type: string, text: string): void;
    /**
     * Execute the console logs tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
    /**
     * Get all console logs
     */
    getConsoleLogs(): string[];
    /**
     * Clear all console logs
     */
    clearConsoleLogs(): void;
}
