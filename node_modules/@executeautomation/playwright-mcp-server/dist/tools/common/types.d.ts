import type { CallToolResult, TextContent, ImageContent } from '@modelcontextprotocol/sdk/types.js';
import type { Page, Browser, APIRequestContext } from 'playwright';
export interface ToolContext {
    page?: Page;
    browser?: Browser;
    apiContext?: APIRequestContext;
    server?: any;
}
export interface ToolResponse extends CallToolResult {
    content: (TextContent | ImageContent)[];
    isError: boolean;
}
export interface ToolHandler {
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
export declare function createErrorResponse(message: string): ToolResponse;
export declare function createSuccessResponse(message: string | string[]): ToolResponse;
