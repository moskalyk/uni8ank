"use strict";
exports.__esModule = true;
exports.computeAPR = void 0;
var utils_1 = require("ethers/lib/utils");
var MILLISECONDS_PER_YEAR = 1000 * 3600 * 24 * 365;
var computeAPR = function (now, end, price) {
    var timeLeft = end - now;
    return (((parseFloat(utils_1.formatEther(price)) - 1) / timeLeft) *
        MILLISECONDS_PER_YEAR *
        100);
};
exports.computeAPR = computeAPR;
