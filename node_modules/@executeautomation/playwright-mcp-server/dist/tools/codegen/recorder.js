import { v4 as uuidv4 } from 'uuid';
export class ActionRecorder {
    constructor() {
        this.sessions = new Map();
        this.activeSession = null;
    }
    static getInstance() {
        if (!ActionRecorder.instance) {
            ActionRecorder.instance = new ActionRecorder();
        }
        return ActionRecorder.instance;
    }
    startSession() {
        const sessionId = uuidv4();
        this.sessions.set(sessionId, {
            id: sessionId,
            actions: [],
            startTime: Date.now(),
        });
        this.activeSession = sessionId;
        return sessionId;
    }
    endSession(sessionId) {
        const session = this.sessions.get(sessionId);
        if (session) {
            session.endTime = Date.now();
            if (this.activeSession === sessionId) {
                this.activeSession = null;
            }
            return session;
        }
        return null;
    }
    recordAction(toolName, parameters, result) {
        if (!this.activeSession) {
            return;
        }
        const session = this.sessions.get(this.activeSession);
        if (!session) {
            return;
        }
        const action = {
            toolName,
            parameters,
            timestamp: Date.now(),
            result,
        };
        session.actions.push(action);
    }
    getSession(sessionId) {
        return this.sessions.get(sessionId) || null;
    }
    getActiveSession() {
        return this.activeSession ? this.sessions.get(this.activeSession) : null;
    }
    clearSession(sessionId) {
        if (this.activeSession === sessionId) {
            this.activeSession = null;
        }
        return this.sessions.delete(sessionId);
    }
}
