const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/Calculator.js",
    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: "build.js"
    }
}