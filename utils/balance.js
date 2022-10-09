"use strict";
exports.__esModule = true;
exports.balance = void 0;
var ERC20__factory_1 = require("../contracts/ERC20__factory");
var balance = function (provider, tokenAddress, address) { return ERC20__factory_1.ERC20__factory.connect(tokenAddress, provider).balanceOf(address); };
exports.balance = balance;
