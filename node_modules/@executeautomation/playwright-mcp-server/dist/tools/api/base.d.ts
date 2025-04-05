import type { APIRequestContext } from 'playwright';
import { ToolHandler, ToolContext, ToolResponse } from '../common/types.js';
/**
 * Base class for all API-based tools
 * Provides common functionality and error handling
 */
export declare abstract class ApiToolBase implements ToolHandler {
    protected server: any;
    constructor(server: any);
    /**
     * Main execution method that all tools must implement
     */
    abstract execute(args: any, context: ToolContext): Promise<ToolResponse>;
    /**
     * Ensures an API context is available and returns it
     * @param context The tool context containing apiContext
     * @returns The apiContext or null if not available
     */
    protected ensureApiContext(context: ToolContext): APIRequestContext | null;
    /**
     * Validates that an API context is available and returns an error response if not
     * @param context The tool context
     * @returns Either null if apiContext is available, or an error response
     */
    protected validateApiContextAvailable(context: ToolContext): ToolResponse | null;
    /**
     * Safely executes an API operation with proper error handling
     * @param context The tool context
     * @param operation The async operation to perform
     * @returns The tool response
     */
    protected safeExecute(context: ToolContext, operation: (apiContext: APIRequestContext) => Promise<ToolResponse>): Promise<ToolResponse>;
}
