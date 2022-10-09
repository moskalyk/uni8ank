"use strict";
// import { Currency as UniswapCurrency } from "@uniswap/sdk" // wow
exports.__esModule = true;
var Currency = /** @class */ (function () {
    function Currency(decimals, symbol, name) {
        this.decimals = decimals;
        this.symbol = symbol;
        this.name = name;
    }
    return Currency;
}());
exports["default"] = Currency;
