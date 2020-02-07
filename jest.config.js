module.exports = {
  setupFilesAfterEnv: [`<rootDir>/configs/jest/setup-test-env.js`],
  transform: {
    '^.+\\.(tsx?|jsx?)$': `<rootDir>/configs/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/configs/jest/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [`<rootDir>/configs/jest/loadershim.js`],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
  moduleDirectories: ['node_modules', '.'],
};
