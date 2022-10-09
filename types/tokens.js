"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
exports.__esModule = true;
exports.getTokenByAddress = exports.getToken = exports.tokens = void 0;
var address_1 = require("@ethersproject/address");
var Currency_1 = require("./Currency");
var ChainId_1 = require("./ChainId");
exports.tokens = [
    {
        currency: new Currency_1["default"](18, "APW", "APWine Token"),
        address: (_a = {},
            _a[ChainId_1.ChainId.MAINNET] = "0x4104b135dbc9609fc1a9490e61369036497660c8",
            _a[ChainId_1.ChainId.KOVAN] = "0x4e92c3Eac3C449c3c7287b920AfDD7BB1189162B",
            _a[ChainId_1.ChainId.POLYGON] = "0x6c0ab120dbd11ba701aff6748568311668f63fe0",
            _a)
    },
    {
        currency: new Currency_1["default"](18, "veAPW", "Vote-escrowed APW"),
        address: (_b = {},
            _b[ChainId_1.ChainId.MAINNET] = "0xc5ca1ebf6e912e49a6a70bb0385ea065061a4f09",
            _b[ChainId_1.ChainId.KOVAN] = "0xb8587F12A2552E2A679379BD7eD021E5a6dBB172",
            _b)
    },
    {
        currency: new Currency_1["default"](18, "DAI", "Dai Stablecoin"),
        address: (_c = {},
            _c[ChainId_1.ChainId.MAINNET] = "0x6b175474e89094c44da98b954eedeac495271d0f",
            _c[ChainId_1.ChainId.KOVAN] = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
            _c)
    },
    {
        currency: new Currency_1["default"](18, "FARM", "Harvest Finance"),
        address: (_d = {},
            _d[ChainId_1.ChainId.MAINNET] = "0xa0246c9032bc3a600820415ae600c6388619a14d",
            _d[ChainId_1.ChainId.KOVAN] = "",
            _d)
    },
    {
        currency: new Currency_1["default"](18, "yUSD", "Curve.fi yDAI/yUSDC/yUSDT/yTUSD"),
        address: (_e = {},
            _e[ChainId_1.ChainId.MAINNET] = "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
            _e[ChainId_1.ChainId.KOVAN] = "",
            _e)
    },
    {
        currency: new Currency_1["default"](18, "wETH", "Wrapped Ether"),
        address: (_f = {},
            _f[ChainId_1.ChainId.MAINNET] = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            _f[ChainId_1.ChainId.POLYGON] = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
            _f[ChainId_1.ChainId.KOVAN] = "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
            _f)
    },
    {
        currency: new Currency_1["default"](18, "MUST", "Must"),
        address: (_g = {},
            _g[ChainId_1.ChainId.MAINNET] = "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
            _g[ChainId_1.ChainId.POLYGON] = "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
            _g)
    },
    {
        currency: new Currency_1["default"](18, "SUSHI", "Sushi"),
        address: (_h = {},
            _h[ChainId_1.ChainId.MAINNET] = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
            _h)
    },
    {
        currency: new Currency_1["default"](18, "YFI", "yearn.finance"),
        address: {}
    },
    {
        currency: new Currency_1["default"](18, "SDT", "Stake DAO Token"),
        address: (_j = {},
            _j[ChainId_1.ChainId.MAINNET] = "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F",
            _j)
    },
    {
        currency: new Currency_1["default"](18, "stkAAVE", "Staked Aave"),
        address: (_k = {},
            _k[ChainId_1.ChainId.MAINNET] = "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
            _k)
    },
    {
        currency: new Currency_1["default"](18, "wETH", "Wrapped Ether"),
        address: (_l = {},
            _l[ChainId_1.ChainId.MAINNET] = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            _l)
    },
    {
        currency: new Currency_1["default"](18, "PSP", "ParaSwap"),
        address: (_m = {},
            _m[ChainId_1.ChainId.MAINNET] = "0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5",
            _m)
    },
    {
        currency: new Currency_1["default"](6, "USDC", "USD Coin"),
        address: (_o = {},
            _o[ChainId_1.ChainId.MAINNET] = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            _o[ChainId_1.ChainId.POLYGON] = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            _o)
    },
    {
        currency: new Currency_1["default"](18, "4EUR-f", "Curve 4EUR"),
        address: (_p = {},
            _p[ChainId_1.ChainId.POLYGON] = "0xAd326c253A84e9805559b73A08724e11E49ca651",
            _p)
    },
    {
        currency: new Currency_1["default"](18, "crvTriCrypto", "Curve TriCrypto"),
        address: (_q = {},
            _q[ChainId_1.ChainId.POLYGON] = "0xdAD97F7713Ae9437fa9249920eC8507e5FbB23d3",
            _q)
    },
    {
        currency: new Currency_1["default"](18, "FRAX3CRV-f", "FRAX3CRV-f"),
        address: (_r = {},
            _r[ChainId_1.ChainId.MAINNET] = "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
            _r)
    },
    {
        currency: new Currency_1["default"](6, "USDT", "Tether USD"),
        address: (_s = {},
            _s[ChainId_1.ChainId.MAINNET] = "0xdac17f958d2ee523a2206206994597c13d831ec7",
            _s)
    },
    {
        currency: new Currency_1["default"](18, "ibEUR+sEUR-f", "ibEUR+sEUR-f"),
        address: (_t = {},
            _t[ChainId_1.ChainId.MAINNET] = "0x19b080FE1ffA0553469D20Ca36219F17Fcf03859",
            _t)
    },
    {
        currency: new Currency_1["default"](18, "am3CRV", "am3CRV"),
        address: (_u = {},
            _u[ChainId_1.ChainId.POLYGON] = "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
            _u)
    },
    {
        currency: new Currency_1["default"](18, "2JPY-f", "2JPY-f"),
        address: (_v = {},
            _v[ChainId_1.ChainId.POLYGON] = "0xE8dCeA7Fb2Baf7a9F4d9af608F06d78a687F8d9A",
            _v)
    },
];
var getToken = function (symbol) {
    var token = exports.tokens.find(function (t) { return t.currency.symbol === symbol; });
    if (!token)
        throw new Error("Token '" + symbol + "' not found");
    return token;
};
exports.getToken = getToken;
var getTokenByAddress = function (address, chainId) {
    return exports.tokens.find(function (t) {
        return (t.address[chainId] || "").toLowerCase() === address.toLowerCase();
    });
};
exports.getTokenByAddress = getTokenByAddress;
// Interest Bearing Tokens
exports.tokens.push(
// Aave
{
    currency: new Currency_1["default"](18, "aDAI", "Aave Interest Bearing DAI"),
    address: (_w = {},
        _w[ChainId_1.ChainId.MAINNET] = "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
        _w[ChainId_1.ChainId.KOVAN] = "0xdCf0aF9e59C002FA3AA091a46196b37530FD48a8",
        _w),
    underlying: exports.getToken("DAI")
}, {
    currency: new Currency_1["default"](6, "aUSDC", "Aave Interest Bearing USDC"),
    address: (_x = {},
        _x[ChainId_1.ChainId.MAINNET] = "0xBcca60bB61934080951369a648Fb03DF4F96263C",
        _x[ChainId_1.ChainId.KOVAN] = "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0",
        _x)
}, {
    currency: new Currency_1["default"](6, "aUSDT", "Aave Interest Bearing USDT"),
    address: (_y = {},
        _y[ChainId_1.ChainId.MAINNET] = "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
        _y),
    underlying: exports.getToken("USDT")
}, {
    currency: new Currency_1["default"](18, "aWETH", "Aave Interest bearing wETH"),
    address: (_z = {},
        _z[ChainId_1.ChainId.MAINNET] = "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
        _z[ChainId_1.ChainId.KOVAN] = "0x87b1f4cf9BD63f7BBD3eE1aD04E8F52540349347",
        _z)
}, 
// Yearn
{
    currency: new Currency_1["default"](18, "yDAI", "iearn DAI"),
    address: (_0 = {},
        _0[ChainId_1.ChainId.MAINNET] = "0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01",
        _0[ChainId_1.ChainId.KOVAN] = "",
        _0)
}, {
    currency: new Currency_1["default"](18, "ycrvEURS", "yearn Curve.fi EURS/sEUR"),
    address: (_1 = {},
        _1[ChainId_1.ChainId.MAINNET] = "0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC",
        _1[ChainId_1.ChainId.KOVAN] = "",
        _1)
}, {
    currency: new Currency_1["default"](18, "yyUSD", "yearn Curve.fi USD"),
    address: (_2 = {},
        _2[ChainId_1.ChainId.MAINNET] = "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c",
        _2[ChainId_1.ChainId.KOVAN] = "",
        _2),
    underlying: exports.getToken("yUSD")
}, {
    currency: new Currency_1["default"](18, "yCRV-IB", "Curve Iron Bank Pool yVault"),
    address: {}
}, {
    currency: new Currency_1["default"](18, "yvcrv-ibEUR", "Curve ibEUR Pool yVault"),
    address: (_3 = {},
        _3[ChainId_1.ChainId.MAINNET] = "0x67e019bfbd5a67207755D04467D6A70c0B75bF60",
        _3),
    underlying: exports.getToken("ibEUR+sEUR-f")
}, 
// Testnet
{
    currency: new Currency_1["default"](18, "ibtUSD", "USD Interest Bearing Token"),
    address: (_4 = {},
        _4[ChainId_1.ChainId.KOVAN] = "0xAa55F82a56D6adC9b863d7D624774F5361C809A4",
        _4),
    underlying: {
        currency: new Currency_1["default"](18, "USD", "USD Stablecoin"),
        address: (_5 = {},
            _5[ChainId_1.ChainId.KOVAN] = "0x78FE37f126687c3a1DDD5eE2F9E234899c4A5ac7",
            _5)
    }
}, 
// Harvest
{
    currency: new Currency_1["default"](18, "iFARM", "iFARM"),
    address: (_6 = {},
        _6[ChainId_1.ChainId.MAINNET] = "0x1571ed0bed4d987fe2b498ddbae7dfa19519f651",
        _6[ChainId_1.ChainId.KOVAN] = "",
        _6),
    underlying: exports.getToken("FARM")
}, 
// Compound
{
    currency: new Currency_1["default"](8, "cDAI", "Compound Dai"),
    address: (_7 = {},
        _7[ChainId_1.ChainId.MAINNET] = "",
        _7[ChainId_1.ChainId.KOVAN] = "0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD",
        _7)
}, 
// Lido
{
    currency: new Currency_1["default"](18, "stETH", "Lido Staked Ether"),
    address: (_8 = {},
        _8[ChainId_1.ChainId.MAINNET] = "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        _8),
    underlying: exports.getToken("wETH")
}, 
// StakeDAO
{
    currency: new Currency_1["default"](18, "xSDT", "Staked SDT"),
    address: (_9 = {},
        _9[ChainId_1.ChainId.MAINNET] = "0xaC14864ce5A98aF3248Ffbf549441b04421247D3",
        _9),
    underlying: exports.getToken("SDT")
}, {
    currency: new Currency_1["default"](18, "sdFRAX3CRV-f", "sdFRAX3CRV-f"),
    address: (_10 = {},
        _10[ChainId_1.ChainId.MAINNET] = "0x5af15DA84A4a6EDf2d9FA6720De921E1026E37b7",
        _10),
    underlying: exports.getToken("FRAX3CRV-f")
}, {
    currency: new Currency_1["default"](18, "sdam3CRV", "sdam3CRV"),
    address: (_11 = {},
        _11[ChainId_1.ChainId.POLYGON] = "0x7d60F21072b585351dFd5E8b17109458D97ec120",
        _11),
    underlying: exports.getToken("am3CRV")
}, 
// SushiSwap
{
    currency: new Currency_1["default"](18, "xSUSHI", "Staked Sushi"),
    address: (_12 = {},
        _12[ChainId_1.ChainId.MAINNET] = "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
        _12),
    underlying: exports.getToken("SUSHI")
}, 
// ParaSwap
{
    currency: new Currency_1["default"](18, "sPSP-3", "Staked ParaSwap Pool 3"),
    address: (_13 = {},
        _13[ChainId_1.ChainId.MAINNET] = "0xea02DF45f56A690071022c45c95c46E7F61d3eAb",
        _13),
    underlying: exports.getToken("PSP")
}, {
    currency: new Currency_1["default"](18, "sPSP-4", "Staked ParaSwap Pool 4"),
    address: (_14 = {},
        _14[ChainId_1.ChainId.MAINNET] = "0x6b1D394Ca67fDB9C90BBd26FE692DdA4F4f53ECD",
        _14),
    underlying: exports.getToken("PSP")
}, 
// Idle
{
    currency: new Currency_1["default"](18, "AA_idleDAIYield", "IdleCDO AA Tranche - idleDAIYield"),
    address: {}
}, 
// Visor
{
    currency: new Currency_1["default"](18, "vVISR", "Staked VISR"),
    address: {}
}, 
// Impermax
{
    currency: new Currency_1["default"](18, "xIMX", "Staked Impermax"),
    address: {}
}, 
// TrueFi
{
    currency: new Currency_1["default"](6, "tfUSDC", "TrueFi USD Coin"),
    address: (_15 = {},
        _15[ChainId_1.ChainId.MAINNET] = "0xa991356d261fbaf194463af6df8f0464f8f1c742",
        _15),
    underlying: exports.getToken("USDC")
}, 
// Paladin
{
    currency: new Currency_1["default"](18, "PalPoolStkAave", "Paladin Staked Aave"),
    address: (_16 = {},
        _16[ChainId_1.ChainId.MAINNET] = "0x24e79e946dea5482212c38aab2d0782f04cdb0e0",
        _16),
    underlying: exports.getToken("stkAAVE")
}, 
// Rari
{
    currency: new Currency_1["default"](18, "fUSDC-82", "APWine Fuse Pool USDC"),
    address: {}
}, 
// POLYGON
{
    currency: new Currency_1["default"](18, "f-j4EUR", "Harvest: Jarvis 4EUR"),
    address: (_17 = {},
        _17[ChainId_1.ChainId.POLYGON] = "0xDDe43710DefEf6CbCf820B18DeBfC3cF9a4f449F",
        _17),
    underlying: exports.getToken("4EUR-f")
}, {
    currency: new Currency_1["default"](6, "amUSDC", "Aave Interest Bearing USDC"),
    address: (_18 = {},
        _18[ChainId_1.ChainId.POLYGON] = "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F",
        _18),
    underlying: exports.getToken("USDC")
}, {
    currency: new Currency_1["default"](18, "f-jEUR-USDC", "Harvest: Jarvis jEUR-USDC"),
    address: {}
}, {
    currency: new Currency_1["default"](18, "f-jCHF-USDC", "Harvest: Jarvis jCHF-USDC"),
    address: {}
}, {
    currency: new Currency_1["default"](18, "MAI-USDC", "Beefy MAI-USDC Vault"),
    address: {}
}, 
// Beefy
{
    currency: new Currency_1["default"](18, "mooATriCrypto3", "Beefy aTriCrypto3 Vault"),
    address: (_19 = {},
        _19[ChainId_1.ChainId.POLYGON] = "0x5a0801bad20b6c62d86c566ca90688a6b9ea1d3f",
        _19),
    underlying: exports.getToken("crvTriCrypto")
}, {
    currency: new Currency_1["default"](18, "mooJarvis2jpy", "Moo Jarvis 2jpy"),
    address: (_20 = {},
        _20[ChainId_1.ChainId.POLYGON] = "0x94F64bb5046Ee377bFBb664736547B7f78e5AE06",
        _20),
    underlying: exports.getToken("2JPY-f")
}, {
    currency: new Currency_1["default"](18, "mooJarvis4eur", "Moo Jarvis 4eur"),
    address: (_21 = {},
        _21[ChainId_1.ChainId.POLYGON] = "0x80dAd30b61b6110aB4112e440988DA2d9aa85329",
        _21),
    underlying: exports.getToken("4EUR-f")
});
exports.tokens.forEach(function (t) {
    Object.keys(t.address).forEach(function (_chainId) {
        var chainId = parseInt(_chainId);
        t.address[chainId] =
            t.address[chainId] === "" ? "" : address_1.getAddress(t.address[chainId]);
    });
});
