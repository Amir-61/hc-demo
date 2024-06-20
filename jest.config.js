module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom"
  };