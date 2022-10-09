"use strict";
exports.__esModule = true;
exports.checkEnv = void 0;
var checkEnv = function (v, name) {
    if (!v) {
        console.error("    \u274C No " + name + " provided. Make sure you've renamed .env.example to .env and filled the file correctly.");
        return false;
    }
    else {
        return true;
    }
};
exports.checkEnv = checkEnv;
