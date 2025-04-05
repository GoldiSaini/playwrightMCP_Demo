import { CodegenSession } from './types';
export declare class ActionRecorder {
    private static instance;
    private sessions;
    private activeSession;
    private constructor();
    static getInstance(): ActionRecorder;
    startSession(): string;
    endSession(sessionId: string): CodegenSession | null;
    recordAction(toolName: string, parameters: Record<string, unknown>, result?: unknown): void;
    getSession(sessionId: string): CodegenSession | null;
    getActiveSession(): CodegenSession | null;
    clearSession(sessionId: string): boolean;
}
