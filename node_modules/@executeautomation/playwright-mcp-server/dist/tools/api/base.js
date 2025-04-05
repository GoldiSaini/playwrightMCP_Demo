import { createErrorResponse } from '../common/types.js';
/**
 * Base class for all API-based tools
 * Provides common functionality and error handling
 */
export class ApiToolBase {
    constructor(server) {
        this.server = server;
    }
    /**
     * Ensures an API context is available and returns it
     * @param context The tool context containing apiContext
     * @returns The apiContext or null if not available
     */
    ensureApiContext(context) {
        if (!context.apiContext) {
            return null;
        }
        return context.apiContext;
    }
    /**
     * Validates that an API context is available and returns an error response if not
     * @param context The tool context
     * @returns Either null if apiContext is available, or an error response
     */
    validateApiContextAvailable(context) {
        if (!this.ensureApiContext(context)) {
            return createErrorResponse("API context not initialized");
        }
        return null;
    }
    /**
     * Safely executes an API operation with proper error handling
     * @param context The tool context
     * @param operation The async operation to perform
     * @returns The tool response
     */
    async safeExecute(context, operation) {
        const apiError = this.validateApiContextAvailable(context);
        if (apiError)
            return apiError;
        try {
            return await operation(context.apiContext);
        }
        catch (error) {
            return createErrorResponse(`API operation failed: ${error.message}`);
        }
    }
}
