"use strict";
exports.__esModule = true;
exports.ethFloat = void 0;
var utils_1 = require("ethers/lib/utils");
var ethFloat = function (amount) { return parseFloat(utils_1.formatEther(amount)); };
exports.ethFloat = ethFloat;
