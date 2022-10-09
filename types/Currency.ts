// import { Currency as UniswapCurrency } from "@uniswap/sdk" // wow

class Currency {
    decimals;
    symbol;
    name;
    constructor(decimals: number, symbol: string, name: string) {
        this.decimals = decimals
        this.symbol = symbol
        this.name = name
    }
}

export default Currency
