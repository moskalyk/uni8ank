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
var Poir = {
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
var getRandom255 = function () {
    return Math.floor(Math.random() * 255);
};
// Object.keys(library).forEach((index) => {
// Object.keys(coir).forEach((el) => {
// 	// console.log(coir[el])
// 	const i = getRandom255()
// 	if(i % coir[el] == 0){
// 		console.log(library[i])
// 		console.log(el)
// 	}
// 	// get the element
// 	// break down by point group
// 	// break down space groups
// 	// console.log(el)
// })
// })
var Table = require('cli-table3');
var pro = require('prompt');
var crystalSet = new Table({
    head: ['Crystal', 'Description'],
    colWidths: [20, 20]
});
var A = getRandom255();
var B = getRandom255();
var C = getRandom255();
console.log('A/B/C');
pro.get(['1'], function (err, result) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(result);
            // Table of products
            console.log("\n    We recommend \u27E0\n    With One of these crystals\n    \t" + A + " \t" + B + " \t" + C + "\n  ");
            Object.keys(Bravais).forEach(function (el) {
                if (result['1'] == 'A') {
                    console.log(el);
                    console.log(A);
                    console.log(Bravais[el]);
                    console.log(A % Bravais[el]);
                    console.log(A % Bravais[el] == 0);
                    if (A % Bravais[el] == 0) {
                        crystalSet.push(["A: " + el, 'TBC']);
                    }
                }
                else if (result['1'] == 'B') {
                    if (B % Bravais[el] == 0) {
                        crystalSet.push(["B: " + el, 'TBC']);
                    }
                }
                else if (result['1'] == 'C') {
                    if (C % Bravais[el] == 0) {
                        crystalSet.push(["C: " + el, 'TBC']);
                    }
                }
            });
            console.log(crystalSet.toString());
            return [2 /*return*/];
        });
    });
});
