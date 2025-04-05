import { CodegenOptions, CodegenResult, CodegenSession } from './types.js';
export declare class PlaywrightGenerator {
    private static readonly DEFAULT_OPTIONS;
    private options;
    constructor(options?: CodegenOptions);
    private validateOptions;
    generateTest(session: CodegenSession): Promise<CodegenResult>;
    private createTestCase;
    private convertActionToStep;
    private generateNavigateStep;
    private generateFillStep;
    private generateClickStep;
    private generateScreenshotStep;
    private generateExpectResponseStep;
    private generateAssertResponseStep;
    private generateHoverStep;
    private generateSelectStep;
    private generateCustomUserAgentStep;
    private generateTestCode;
    private getOutputFilePath;
}
