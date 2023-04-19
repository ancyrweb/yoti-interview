export default {
  collectCoverage: false,
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "^((?!integration).)*.test.ts$",
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};
