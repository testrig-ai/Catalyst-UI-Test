/* eslint-disable prefer-const */
import {
    FullConfig,
    FullResult,
    Reporter,
    Suite,
    TestCase,
    TestError,
    TestResult,
    TestStep,
} from "@playwright/test/reporter";
import winston from "winston";

const levels = {
    error: 0,
    fail: 1,
    skip: 2,
    pass: 3,
    info: 4,
};

winston.addColors({
    error: "yellow",
    fail: "red",
    skip: "magenta",
    pass: "green",
    info: "blue",
});

const format = winston.format.combine(
    winston.format.timestamp({ format: "DD-MMM-YYYY HH:mm:ss" }),
    winston.format.colorize({ all: true }),
    winston.format.simple(),
    winston.format.printf(
        (info: winston.Logform.TransformableInfo) =>
            `${info.timestamp} ${info.level}: ${info.message}`
    )
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/testLogger.logs" }),
];

const logger = winston.createLogger({
    levels,
    format,
    transports,
});

export default class CustomReporterConfig implements Reporter {
    totalTests: number = 0;
    passCount: number = 0;
    failCount: number = 0;
    skipCount: number = 0;
    testID: Set<string> = new Set();

    // eslint-disable-next-line @typescript-eslint/ban-types
    onBegin(config: FullConfig<{}, {}>, suite: Suite): void {
        this.totalTests = suite.allTests().length;
        logger.info(
            `----------------------------------------------------------------------------`
        );
        logger.info(
            `----------------------------------------------------------------------------`
        );
        logger.info(`Starting the run with ${this.totalTests} tests`);
        logger.info(
            `----------------------------------------------------------------------------`
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onEnd(result: FullResult): void | Promise<void> {
        logger.info(
            `----------------------------------------------------------------------------`
        );
        const passRate = ((this.passCount / this.totalTests) * 100).toFixed(2);
        logger.info(
            `Finished the Run of ${this.totalTests} tests: Passed: ${
                this.passCount
            }(${passRate}%), Failed: ${this.testID.size}(${(
                (this.testID.size / this.totalTests) *
                100
            ).toFixed(2)}%), Skipped: ${this.skipCount}(${(
                (this.skipCount / this.totalTests) *
                100
            ).toFixed(2)}%)`
        );
        logger.info(
            `----------------------------------------------------------------------------`
        );
        logger.info(
            `----------------------------------------------------------------------------`
        );
    }

    onTestBegin(test: TestCase): void {
        this.testID.add(test.id);
        let testFileLocationArray: string[] = test.location.file.split(`\\`);
        let testFile = process.env.CI
            ? `${
                  testFileLocationArray[testFileLocationArray.length - 1].split(
                      "/build"
                  )[1]
              }`
            : `${testFileLocationArray[testFileLocationArray.length - 1]}`;
        logger.info(`Test Case Started : ${testFile} - ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        let testFileLocationArray: string[] = test.location.file.split(`\\`);
        let testFile = process.env.CI
            ? `${
                  testFileLocationArray[testFileLocationArray.length - 1].split(
                      "/build"
                  )[1]
              }`
            : `${testFileLocationArray[testFileLocationArray.length - 1]}`;
        if (result.status == `passed`) {
            this.passCount++;
            this.testID.delete(test.id);
            logger.log(
                "pass",
                `Test Case Passed : ${testFile} - ${test.title}`
            );
        } else if (result.status == `failed`) {
            this.failCount++;
            logger.log(
                "fail",
                `Test Case Failed : ${testFile} - ${test.title}`
            );
        } else if (result.status == `skipped`) {
            this.skipCount++;
            this.testID.delete(test.id);
            logger.log(
                "skip",
                `Test Case Skipped : ${testFile} - ${test.title}`
            );
        } else {
            logger.error(
                `Test Case Halted due to some error : ${testFile} - ${test.title}`
            );
        }
    }

    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        let testFileLocationArray: string[] = test.location.file.split(`\\`);
        let testFile = process.env.CI
            ? `${
                  testFileLocationArray[testFileLocationArray.length - 1].split(
                      "/build"
                  )[1]
              }`
            : `${testFileLocationArray[testFileLocationArray.length - 1]}`;
        if (step.category === `test.step`) {
            logger.info(`${testFile} -  <Step> ${step.title}`);
        }
    }

    onError(error: TestError): void {
        logger.error(error.message);
    }

    onStdErr(
        chunk: string | Buffer,
        test: void | TestCase,
        result: void | TestResult
    ): void {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        logger.error(`Error: ${result}`);
    }
}