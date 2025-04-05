// Helper functions for creating responses
export function createErrorResponse(message) {
    return {
        content: [{
                type: "text",
                text: message
            }],
        isError: true
    };
}
export function createSuccessResponse(message) {
    const messages = Array.isArray(message) ? message : [message];
    return {
        content: messages.map(msg => ({
            type: "text",
            text: msg
        })),
        isError: false
    };
}
