"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("dotenv").config();
// import chalk from 'chalk'
var library = {
    0: '🃟',
    1: '⚚',
    2: '♕',
    3: '⚘',
    4: '♖',
    5: '♔',
    6: '☂',
    7: '♘',
    8: '☮',
    9: '☯',
    10: '☸',
    11: '⚖',
    12: '♱',
    13: '☠',
    14: '♻',
    15: '☢',
    16: '☖',
    17: '★',
    18: '☽',
    19: '☼',
    20: '⚱',
    21: '⚬',
    22: '∅',
    23: 'RED',
    24: 'ORANGE',
    25: 'YELLOW',
    26: 'GREEN',
    27: 'BLUE',
    28: 'INDIGO',
    29: 'VIOLET',
    30: '∞',
    31: '☉',
    32: '☿',
    33: '♀',
    34: '♁',
    35: '♂',
    36: '♃',
    37: '♄',
    38: '♅',
    39: '♆',
    40: '♇',
    41: '⚀',
    42: 'Birch 𐂷 BEITH',
    43: 'Rowan 𐂷 LUIS',
    44: 'Alder 𐂷 FEARN',
    45: 'Willow 𐂷 SAILLE',
    46: 'Ash 𐂷 NUIN',
    47: 'Hawthon 𐂷 HUATHE',
    48: 'Oak 𐂷 DUIR',
    49: 'Holly 𐂷 TINNE',
    50: 'Hazel 𐂷 COLL',
    51: 'Apple 𐂷 QUERT',
    52: 'Vine 𐂷 MUIN',
    53: 'Ivy 𐂷 GORT',
    54: 'Reed 𐂷 NGETAL',
    55: 'Blackthorn 𐂷 STRAIF',
    56: 'Elder 𐂷 RUIS',
    57: 'Silver Fir 𐂷 AILIM',
    58: 'Furze 𐂷 OHN',
    59: 'Heather 𐂷 UR',
    60: 'Poplar 𐂷 EADHA',
    61: 'Yew 𐂷 IOHO',
    62: 'The Grove 𐂷 KOAD',
    63: 'Spindle 𐂷 OIR',
    64: 'Honeysuckle 𐂷 UNILEAND',
    65: 'Beech 𐂷 PHAGOS',
    66: 'The Sea 𐂷 MOR',
    67: '⚁',
    68: 'The Self ᛗ MANNAZ',
    69: 'Partnership ᚷ GEBO',
    70: 'Signals ᚫ ANSUZ',
    71: 'Seperation  OTHILA',
    72: 'Strength  URUZ',
    73: 'Initiatian PERTH',
    74: 'Constraint  NAUTHIZ',
    75: 'Fertility  INGUZ',
    76: 'Defense  EIHWAZ',
    77: 'Protection ᛉ ALGIZ',
    78: 'Posessions  FEHU',
    79: 'Joy  WUNJO',
    80: 'Harvest  JERA',
    81: 'Opening  KANO',
    82: 'Warrior  TEIWAZ',
    83: 'Growth  BERKANA',
    84: 'Movement  EHWAZ',
    85: 'Flow  LAGUZ',
    86: 'Disruption  HAGALAZ',
    87: 'Journey ᚱ RAIDO',
    88: 'Gateway  THURISAZ',
    89: 'Breakthrough  DAGAZ',
    90: 'Standstill  ISA',
    91: 'Wholeness  SOWELU',
    92: 'Unknowable  ODIN',
    93: '⚂',
    94: '🜁',
    95: '🜂',
    96: '🜃',
    97: '🜄',
    98: '⚃',
    99: '',
    100: '',
    101: '',
    102: '',
    103: '',
    104: '',
    105: '',
    106: '',
    107: '',
    108: '',
    109: '',
    110: '',
    111: '',
    112: '',
    113: '',
    114: '',
    115: '',
    116: '',
    117: '',
    118: '',
    119: '',
    120: '',
    121: '',
    122: '',
    123: '',
    124: '',
    125: '',
    126: '',
    127: '',
    128: '',
    129: '',
    130: '',
    131: '',
    132: '',
    133: '',
    134: '',
    135: '',
    136: '',
    137: '',
    138: '',
    139: '',
    140: '',
    141: '',
    142: '',
    143: '',
    144: '',
    145: '',
    146: '',
    147: '',
    148: '',
    149: '',
    150: '',
    151: '',
    152: '',
    153: '',
    154: '',
    155: '',
    156: '',
    157: '',
    158: '',
    159: '',
    160: '',
    161: '',
    162: '',
    163: '',
    164: '',
    165: '',
    166: '',
    167: '',
    168: '',
    169: '',
    170: '',
    171: '',
    172: '',
    173: '',
    174: '',
    175: '',
    176: '',
    177: '',
    178: '',
    179: '',
    180: '',
    181: '',
    182: '',
    183: '',
    184: '',
    185: '',
    186: '',
    187: '',
    188: 'RED_JASPER',
    189: '',
    190: '',
    191: '',
    192: '',
    193: '',
    194: '',
    195: '',
    196: '',
    197: '',
    198: '',
    199: '',
    200: '',
    201: '',
    202: '',
    203: '',
    204: '',
    205: '',
    206: '',
    207: '',
    208: '',
    209: '',
    210: '☌',
    211: '⚯',
    212: '□',
    213: '♈︎',
    214: '☌',
    215: '⚯',
    216: '□',
    217: '',
    218: '',
    219: '',
    220: '',
    221: '',
    222: '',
    223: 'SUNDAY',
    224: 'MONDAY',
    225: 'TUESDAY',
    226: 'WEDNESDAY',
    227: 'THURSDAY',
    228: 'FRIDAY',
    229: 'SATURDAY',
    230: 'WOLF',
    231: 'CAT',
    232: 'ROOSTER',
    233: 'COW',
    234: 'BUFFALO',
    235: 'SPIDER',
    236: 'HORSE',
    237: 'SNAKE',
    238: 'FISH',
    239: 'FOX',
    240: 'BAT',
    241: 'MONKEY',
    242: 'TURTLE',
    243: 'BIRD',
    244: 'GOAT',
    245: 'MALKUTH',
    246: 'YESOD',
    247: 'HOD',
    248: 'NETZACH',
    249: 'TIPARETH',
    250: 'GEBURH',
    251: 'CHESED',
    252: 'DAATH',
    253: 'BINAH',
    254: 'CHOKMAH',
    255: 'KETER'
};
var coir = {
    'Triclinic': 2,
    'Monoclinic': 3,
    'Orthorhombic': 3,
    'Tetragonal': 7,
    'Trigonal': 5,
    'Hexagonal': 7,
    'Cubic': 5
};
var Bravais = {
    'Triclinic': 1,
    'Monoclinic': 2,
    'Orthorhombic': 4,
    'Tetragonal': 2,
    'Trigonal': 1,
    'Hexagonal': 1,
    'Cubic': 3
};
var CrystalSet = {
    'Triclinic': ['Tantite', 'Wollastonite', 'plagioclase', 'microcline', 'rhodonite', 'https://en.wikipedia.org/wiki/Turquoise', 'wollastonite', 'amblygonite'],
    'Monoclinic': ['halotrichite', 'hilgardite', 'https://en.wikipedia.org/wiki/Gypsum'],
    'Orthorhombic': ['Epsomite', 'https://en.wikipedia.org/wiki/Bertrandite', 'Olivine'],
    'Tetragonal': ['https://en.wikipedia.org/wiki/Pinnoite', 'cahnite', 'zircon'],
    'Trigonal': ['https://en.wikipedia.org/wiki/Jarosite'],
    'Hexagonal': ['https://en.wikipedia.org/wiki/Apatite', 'Quartz'],
    'Cubic': ['https://en.wikipedia.org/wiki/Sphalerite']
};
var sdk_1 = require("@apwine/sdk");
var ethers_1 = require("ethers");
var ChainId_1 = require("./types/ChainId");
var tokens_1 = require("./types/tokens");
var align_1 = require("./utils/align");
var tokens_2 = require("./types/tokens");
var computeAPR_1 = require("./utils/computeAPR");
var getDate_1 = require("./utils/getDate");
var utils_1 = require("ethers/lib/utils");
var balance_1 = require("./utils/balance");
var ethFloat_1 = require("./utils/ethFloat");
var AMM__factory_1 = require("./contracts/AMM__factory");
var ethers_2 = require("ethers");
var provider = new ethers_1.ethers.providers.AlchemyProvider('mainnet', process.env.ALCHEMY_API_KEY);
var prompt = require('prompt');
var colors = require("@colors/colors/safe");
var stETHFutureGlobal;
prompt.start();
var Table = require('cli-table3');
function later(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}
// TODO: use fluence network to get a random set from matter.direct ipfs upload
var getRandom255 = function () {
    return Math.floor(Math.random() * 255);
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("\n      Welcome to unib8nk \u2602\n      Please set up a stream to play.\n  ");
            prompt.get(['Level:   1) Beginner     2) Medium    3) Hard  \nChoose: 1/2/3'], function (err, result) {
                return __awaiter(this, void 0, void 0, function () {
                    var table, A, B, C, crystalSet;
                    return __generator(this, function (_a) {
                        table = new Table({
                            head: ['Direction', 'Description'],
                            colWidths: [40, 40]
                        });
                        A = getRandom255();
                        B = getRandom255();
                        C = getRandom255();
                        table.push(["A: " + library[A], 'TBC'], ["B: " + library[B], 'TBC'], ["C: " + library[C], 'TBC']);
                        console.log(table.toString());
                        crystalSet = new Table({
                            head: ['Crystal', 'Examples'],
                            colWidths: [20, 70]
                        });
                        console.log('Choose 1: Which direction would you like to take? A/B/C');
                        prompt.get(['1'], function (err, result) {
                            return __awaiter(this, void 0, void 0, function () {
                                var table, sdk, error_1, futureVaults, futures, promise;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            // console.log(result)
                                            // Table of products
                                            console.log("\n         We recommend \u27E0\n         One of these crystals\n      ");
                                            Object.keys(Bravais).forEach(function (el) {
                                                if (result['1'] == 'A') {
                                                    console.log(el);
                                                    console.log(A);
                                                    console.log(Bravais[el]);
                                                    console.log(A % Bravais[el]);
                                                    console.log(A % Bravais[el] == 0);
                                                    if (A % Bravais[el] == 0) {
                                                        crystalSet.push(["A: " + el, CrystalSet[el].toString()]);
                                                    }
                                                }
                                                else if (result['1'] == 'B') {
                                                    if (B % Bravais[el] == 0) {
                                                        crystalSet.push(["B: " + el, CrystalSet[el].toString()]);
                                                    }
                                                }
                                                else if (result['1'] == 'C') {
                                                    if (C % Bravais[el] == 0) {
                                                        crystalSet.push(["C: " + el, CrystalSet[el].toString()]);
                                                    }
                                                }
                                            });
                                            console.log(crystalSet.toString());
                                            // how to render utf combinations
                                            console.log("\n          Please choose an \uD83C\uDF47\n          APWine Pool amount to tokenize\n          Easy future yield with stETH\n      ");
                                            table = new Table({
                                                head: ['Index', 'Symbol', 'Liquidity Pool', 'APR', 'Date'],
                                                colWidths: [20, 20]
                                            });
                                            sdk = new sdk_1["default"]({
                                                provider: provider,
                                                signer: new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider),
                                                // network: ChainId.POLYGON,
                                                network: ChainId_1.ChainId.MAINNET
                                            }, { initialize: false });
                                            console.log("    \uD83D\uDD2E Created APWine SDK. Initializing...");
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, sdk.initialize()];
                                        case 2:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_1 = _a.sent();
                                            console.error("    \u274C Failed. " + error_1);
                                            process.exit();
                                            return [3 /*break*/, 4];
                                        case 4:
                                            console.log("    \u2705 APWine SDK initialized on " + ChainId_1.ChainId[sdk.network]);
                                            return [4 /*yield*/, sdk.fetchAllFutureVaults()];
                                        case 5:
                                            futureVaults = _a.sent();
                                            console.log("    \uD83D\uDD2E Fetched " + futureVaults.length + " future vaults. Fetching futures...");
                                            return [4 /*yield*/, Promise.all(futureVaults.map(function (futureVault) {
                                                    return sdk.fetchFutureAggregateFromAddress(futureVault.address);
                                                }))
                                                // Display all futures
                                            ];
                                        case 6:
                                            futures = _a.sent();
                                            // Display all futures
                                            console.log("    \u2705 Done! Available futures:");
                                            promise = new Promise(function (resolve, reject) {
                                                futures.forEach(function (future, index) { return __awaiter(_this, void 0, void 0, function () {
                                                    var token, ibtSymbol, endDate, stETH_1, stETHFuture, ptAPR, _a, _b, e_1;
                                                    return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                token = tokens_1.getTokenByAddress(future.ibtAddress, ChainId_1.ChainId.MAINNET);
                                                                if (!token) return [3 /*break*/, 5];
                                                                ibtSymbol = token.currency.symbol;
                                                                endDate = new Date(future.nextPeriodTimestamp.toNumber() * 1000).toLocaleDateString();
                                                                stETH_1 = tokens_2.getToken(ibtSymbol);
                                                                stETHFuture = futures.find(function (future) { return future.ibtAddress === stETH_1.address[ChainId_1.ChainId.MAINNET]; });
                                                                if (ibtSymbol == 'stETH')
                                                                    stETHFutureGlobal = stETHFuture;
                                                                ptAPR = void 0;
                                                                _c.label = 1;
                                                            case 1:
                                                                _c.trys.push([1, 4, , 5]);
                                                                _a = computeAPR_1.computeAPR;
                                                                return [4 /*yield*/, getDate_1.getDate(sdk)];
                                                            case 2:
                                                                _b = [(_c.sent()).getTime(),
                                                                    stETHFuture.nextPeriodTimestamp.toNumber() * 1000];
                                                                return [4 /*yield*/, sdk.fetchSpotPrice(sdk.FutureVault(stETHFuture.address), "PT", "Underlying")];
                                                            case 3:
                                                                // compute APR
                                                                ptAPR = _a.apply(void 0, _b.concat([(_c.sent())]));
                                                                // push future into a table for comparison
                                                                table.push(["" + index, ibtSymbol, future.platform, ptAPR.toFixed(2) + "%", "" + align_1.align(endDate, 24)]);
                                                                return [3 /*break*/, 5];
                                                            case 4:
                                                                e_1 = _c.sent();
                                                                resolve(null);
                                                                return [3 /*break*/, 5];
                                                            case 5: return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                            });
                                            promise.then(function (stETH) {
                                                console.log(table.toString());
                                                var stake = 'How much would you like to stake?';
                                                prompt.get([stake], function (err, result) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var AMOUNT_TO_TOKENIZE, user, ptBalance, fytBalance, _a, _b, fytAddress, ammAddress, amm, _c, _d, _e, _f, e_2;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    AMOUNT_TO_TOKENIZE = utils_1.parseEther(String(result[stake]));
                                                                    /////////////////////////    Deposit to Lido
                                                                    console.log("    \uD83D\uDD2E Depositing " + ethFloat_1.ethFloat(AMOUNT_TO_TOKENIZE).toFixed(8) + " ETH on Lido...");
                                                                    // await depositLidoETH(sdk, AMOUNT_TO_TOKENIZE)
                                                                    /////////////////////////     Next, we deposit our newly acquired stETH on the APWine stETH future vault
                                                                    console.log("    \uD83D\uDD2E Depositing stETH on APWine fo FT...");
                                                                    return [4 /*yield*/, sdk.signer.getAddress()];
                                                                case 1:
                                                                    user = _g.sent();
                                                                    if (!user) return [3 /*break*/, 14];
                                                                    _g.label = 2;
                                                                case 2:
                                                                    _g.trys.push([2, 12, , 13]);
                                                                    return [4 /*yield*/, balance_1.balance(sdk.provider, stETHFutureGlobal.ptAddress, user)];
                                                                case 3:
                                                                    ptBalance = _g.sent();
                                                                    _a = balance_1.balance;
                                                                    _b = [sdk.provider];
                                                                    return [4 /*yield*/, sdk.FutureVault(stETHFutureGlobal.address).getFYTofPeriod(1)];
                                                                case 4: return [4 /*yield*/, _a.apply(void 0, _b.concat([_g.sent(), user]))];
                                                                case 5:
                                                                    fytBalance = _g.sent();
                                                                    console.log("    \u2705 Done! Retrieved " + ethFloat_1.ethFloat(ptBalance).toFixed(8) + " PT and " + ethFloat_1.ethFloat(fytBalance).toFixed(8) + " FYT.");
                                                                    return [4 /*yield*/, sdk.signer.getAddress()];
                                                                case 6:
                                                                    /////////////////////////
                                                                    user = _g.sent();
                                                                    return [4 /*yield*/, sdk
                                                                            .FutureVault(stETHFutureGlobal.address)
                                                                            .getFYTofPeriod(1)];
                                                                case 7:
                                                                    fytAddress = _g.sent();
                                                                    return [4 /*yield*/, balance_1.balance(sdk.provider, fytAddress, user)];
                                                                case 8:
                                                                    fytBalance = _g.sent();
                                                                    console.log("Balance FYT: " + ethFloat_1.ethFloat(fytBalance).toFixed(8));
                                                                    // Execute a FYT -> PT swap on the AMM
                                                                    console.log("    \uD83D\uDD2E Swapping FYT for PT...");
                                                                    return [4 /*yield*/, sdk.AMMRegistry.getFutureAMMPool(stETHFutureGlobal.address)];
                                                                case 9:
                                                                    ammAddress = _g.sent();
                                                                    amm = AMM__factory_1.AMM__factory.connect(ammAddress, sdk.provider);
                                                                    return [4 /*yield*/, balance_1.balance(sdk.provider, stETHFutureGlobal.ptAddress, user)];
                                                                case 10:
                                                                    /////////////////////////     SWAP from FYT / PT
                                                                    // await sdk.swapIn(
                                                                    //     {
                                                                    //         amm,
                                                                    //         from: "FYT",
                                                                    //         to: "PT",
                                                                    //         amount: fytBalance,
                                                                    //     },
                                                                    //     { autoApprove: true } // Approve automatically if needed
                                                                    // )
                                                                    // Get final PT balance and compute resulting APR
                                                                    ptBalance = _g.sent();
                                                                    console.log("    \u2705 Result: " + ethFloat_1.ethFloat(ptBalance).toFixed(8) + " PT.");
                                                                    /////////////////////////     ARB if PT < 1
                                                                    // const res = await sdk.swapIn(
                                                                    //     {
                                                                    //         amm,
                                                                    //         from: "PT",
                                                                    //         to: "Underlying",
                                                                    //         amount: ptBalance,
                                                                    //     },
                                                                    //     { autoApprove: true } // Approve automatically if needed
                                                                    // )
                                                                    // console.log(res)
                                                                    _d = (_c = console).log;
                                                                    _e = "\n    \uD83D\uDCA5 Final guaranteed APR with strategy: ";
                                                                    _f = computeAPR_1.computeAPR;
                                                                    return [4 /*yield*/, getDate_1.getDate(sdk)];
                                                                case 11:
                                                                    /////////////////////////     ARB if PT < 1
                                                                    // const res = await sdk.swapIn(
                                                                    //     {
                                                                    //         amm,
                                                                    //         from: "PT",
                                                                    //         to: "Underlying",
                                                                    //         amount: ptBalance,
                                                                    //     },
                                                                    //     { autoApprove: true } // Approve automatically if needed
                                                                    // )
                                                                    // console.log(res)
                                                                    _d.apply(_c, [_e + _f.apply(void 0, [(_g.sent()).getTime(),
                                                                            stETHFutureGlobal.nextPeriodTimestamp.toNumber() * 1000,
                                                                            ptBalance.mul(ethers_2.constants.WeiPerEther).div(AMOUNT_TO_TOKENIZE)]).toFixed(8) + "%"]);
                                                                    console.log("See your transactions: https://etherscan.io/address/" + user);
                                                                    return [3 /*break*/, 13];
                                                                case 12:
                                                                    e_2 = _g.sent();
                                                                    console.log(e_2);
                                                                    return [3 /*break*/, 13];
                                                                case 13:
                                                                    console.log("g'luck");
                                                                    _g.label = 14;
                                                                case 14: return [2 /*return*/];
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [2 /*return*/];
                    });
                });
            });
            return [2 /*return*/];
        });
    });
}
main();
