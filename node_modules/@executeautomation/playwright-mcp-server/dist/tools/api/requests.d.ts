import { ApiToolBase } from './base.js';
import { ToolContext, ToolResponse } from '../common/types.js';
/**
 * Tool for making GET requests
 */
export declare class GetRequestTool extends ApiToolBase {
    /**
     * Execute the GET request tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for making POST requests
 */
export declare class PostRequestTool extends ApiToolBase {
    /**
     * Execute the POST request tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for making PUT requests
 */
export declare class PutRequestTool extends ApiToolBase {
    /**
     * Execute the PUT request tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for making PATCH requests
 */
export declare class PatchRequestTool extends ApiToolBase {
    /**
     * Execute the PATCH request tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
/**
 * Tool for making DELETE requests
 */
export declare class DeleteRequestTool extends ApiToolBase {
    /**
     * Execute the DELETE request tool
     */
    execute(args: any, context: ToolContext): Promise<ToolResponse>;
}
