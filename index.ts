require("dotenv").config()
import { Fluence } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { registerCalc, CalcDef } from "./src/generated/calc";
// import chalk from 'chalk'

const library = {
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
    }
const coir = {
  'Triclinic': 2,
  'Monoclinic': 3,
  'Orthorhombic': 3,
  'Tetragonal': 7,
  'Trigonal': 5,
  'Hexagonal': 7,
  'Cubic': 5,
}

const Bravais = {
  'Triclinic': 1,
  'Monoclinic': 2,
  'Orthorhombic': 4,
  'Tetragonal': 2,
  'Trigonal': 1,
  'Hexagonal': 1,
  'Cubic': 3,
}

const CrystalSet = {
  'Triclinic': ['Tantite', 'Wollastonite', 'plagioclase', 'microcline', 'rhodonite', 'https://en.wikipedia.org/wiki/Turquoise', 'wollastonite', 'amblygonite'],
  'Monoclinic': ['halotrichite', 'hilgardite', 'https://en.wikipedia.org/wiki/Gypsum'],
  'Orthorhombic': ['Epsomite', 'https://en.wikipedia.org/wiki/Bertrandite', 'Olivine'],
  'Tetragonal': ['https://en.wikipedia.org/wiki/Pinnoite', 'cahnite', 'zircon'],
  'Trigonal': ['https://en.wikipedia.org/wiki/Jarosite'],
  'Hexagonal': ['https://en.wikipedia.org/wiki/Apatite','Quartz'],
  'Cubic': ['https://en.wikipedia.org/wiki/Sphalerite'],
}

import APWineSDK from "@apwine/sdk"
import { ethers } from "ethers"
import { checkEnv } from "./utils/checkEnv"
import { ChainId } from "./types/ChainId"
import { getTokenByAddress } from "./types/tokens"
import { align } from "./utils/align"
import { getToken } from "./types/tokens"
import { computeAPR } from "./utils/computeAPR"
import { getDate } from "./utils/getDate"
import { BigNumber } from "ethers"
import { parseEther } from "ethers/lib/utils"
import { depositLidoETH } from "./utils/depositLidoETH"
import { balance } from "./utils/balance"
import { ethFloat } from "./utils/ethFloat"
import { AMM__factory } from "./contracts/AMM__factory"
import { constants } from "ethers"

const provider = new ethers.providers.AlchemyProvider(
  'mainnet',
  process.env.ALCHEMY_API_KEY
)

const prompt = require('prompt');

let stETHFutureGlobal;

prompt.start();
const Table = require('cli-table3')

function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}
// TODO: use fluence network to get a random set from matter.direct ipfs upload
const getRandom255 = () => {
  return Math.floor(Math.random() * 255)
}

async function main() {

  console.log(`
      Welcome to unib8nk ☂
      Please set up a stream to play.
  `)

  prompt.get(['Level:   1) Beginner     2) Medium    3) Hard  \nChoose: 1/2/3'], async function (err: any, result: any) {

  // with use of superfluid
  // prompt.get(['begin stream? Y/N'], async function (err: any, result: any) {

  // if(result == 'y'){
  //   console.log('creating stream')
  // }else {
  //   console.log('oki bye')
  // }

    //   // instantiate
    var table = new Table({
      head: ['Direction', 'Description']
    , colWidths: [40, 40]
    });

    const A = getRandom255()
    const B = getRandom255()
    const C = getRandom255()

    table.push(
      [`A: ${library[A]}`, 'TBC'],
      [`B: ${library[B]}`, 'TBC'],
      [`C: ${library[C]}`, 'TBC'],
    );

    console.log(table.toString())

  // console.log('Choose 2: Which direction would you like to take? A/B/C')
    var crystalSet = new Table({
      head: ['Crystal', 'Examples']
      , colWidths: [20, 70]
    });


    console.log('Choose 1: Which direction would you like to take? A/B/C')
    prompt.get(['1'], async function (err, result) {
      // console.log(result)
      // Table of products
      console.log(`
         We recommend ⟠
         One of these crystals
      `)

      Object.keys(Bravais).forEach((el) => {
        if(result['1'] == 'A'){
          if(A%Bravais[el] == 0) {
            crystalSet.push(
              [`A: ${el}`, CrystalSet[el].toString()]
            )
          }
        }
        else if(result['1'] == 'B'){
          if(B%Bravais[el] == 0) {
            crystalSet.push(
              [`B: ${el}`, CrystalSet[el].toString()]
            )
          }
        }
        else if(result['1'] == 'C'){
          if(C%Bravais[el] == 0) {
            crystalSet.push(
              [`C: ${el}`, CrystalSet[el].toString()]
            )
          }
        }
      })
        
      console.log(crystalSet.toString())
      console.log(`
          Please choose an 🍇
          APWine Pool amount to tokenize
          Easy future yield with stETH
      `)

      // Table of Derivatives get futures from sdk
      // hello 97
      var table = new Table({
        head: ['Index','Symbol', 'Liquidity Pool', 'APR', 'Date']
      , colWidths: [20, 20]
      });

      /////////////////////////    Create APWine SDK
      const sdk: APWineSDK = new APWineSDK(
          {
              provider,
              signer: new ethers.Wallet(process.env.PRIVATE_KEY as any, provider),
              // network: ChainId.POLYGON,
              network: ChainId.MAINNET,
          },
          { initialize: false }
      )
      console.log(`    🔮 Created APWine SDK. Initializing...`)

      /////////////////////////    Initialize SDK. This will load essential data such as contract addresses.
      try {
          await sdk.initialize()
      } catch (error) {
          console.error(`    ❌ Failed. ${error}`)
          process.exit()
      }

      console.log(
      `    ✅ APWine SDK initialized on ${ChainId[sdk.network as number]}`
      )

      // Fetch all future addresses (as contracts)
      const futureVaults = await sdk.fetchAllFutureVaults()
      console.log(
          `    🔮 Fetched ${futureVaults.length} future vaults. Fetching futures...`
      )

      // Fetch detailed future data (more resource-intensive)
      const futures = await Promise.all(
          futureVaults.map((futureVault: any) =>
              sdk.fetchFutureAggregateFromAddress(futureVault.address)
          )
      )

      // Display all futures
      console.log(`    ✅ Done! Available futures:`)

      const promise = new Promise((resolve, reject) => {
        futures.forEach(async (future: any, index: any) => {
          const token = getTokenByAddress(future.ibtAddress, ChainId.MAINNET)
          // const token = getTokenByAddress(future.ibtAddress, ChainId.POLYGON)
          if(token){
              const ibtSymbol = token.currency.symbol

              const endDate = new Date(
                  future.nextPeriodTimestamp.toNumber() * 1000
              ).toLocaleDateString()

              const stETH = getToken(ibtSymbol)
              
              const stETHFuture = futures.find(
                  (future: any) => future.ibtAddress === stETH.address[ChainId.MAINNET]
              )

              if(ibtSymbol == 'stETH') stETHFutureGlobal = stETHFuture

              let ptAPR;

              try{
                // compute APR
                ptAPR = computeAPR(
                    (await getDate(sdk as APWineSDK)).getTime(),
                    stETHFuture.nextPeriodTimestamp.toNumber() * 1000,
                    (await sdk.fetchSpotPrice(
                        sdk.FutureVault(stETHFuture.address),
                        "PT",
                        "Underlying"
                    )) as BigNumber
                )

                // push future into a table for comparison
                table.push(
                  [`${index}`,ibtSymbol, future.platform, `${ptAPR.toFixed(2)}%`, `${align(endDate, 24)}`]
                )

              }catch(e){
                resolve(null);
              }
            }
        })
      })

      promise.then((stETH) => {
        console.log(table.toString())
        const stake = 'How much would you like to stake?'
        prompt.get([stake], async function (err, result) {

          const AMOUNT_TO_TOKENIZE = parseEther(String(result[stake]))

          /////////////////////////    Deposit to Lido

          console.log(
          `    🔮 Depositing ${ethFloat(
              AMOUNT_TO_TOKENIZE
          ).toFixed(8)} ETH on Lido...`
          )

          // await depositLidoETH(sdk, AMOUNT_TO_TOKENIZE)

          /////////////////////////     Next, we deposit our newly acquired stETH on the APWine stETH future vault
          console.log(`    🔮 Depositing stETH on APWine fo FT...`)

          // const res = await sdk
          //     .deposit(
          //         sdk.FutureVault(stETHFutureGlobal.address),
          //         AMOUNT_TO_TOKENIZE.sub(1), // stETH is missing 1 unit precision
          //         { autoApprove: true } // Approve automatically if needed. Will require an extra transaction
          //     )
          // .catch((e) => {
          //   console.log(e)
          // })

          // console.log(res)

          /////////////////////////
          let user = await sdk.signer.getAddress()

          if(user){

            try{

              /////////////////////////    Check balances
              let ptBalance = await balance(sdk.provider, stETHFutureGlobal.ptAddress, user)
              let fytBalance = await balance(
                  sdk.provider,
                  await sdk.FutureVault(stETHFutureGlobal.address).getFYTofPeriod(1),
                  user
              )
              console.log(
                  `    ✅ Done! Retrieved ${ethFloat(ptBalance).toFixed(
                      8
                  )} PT and ${ethFloat(fytBalance).toFixed(8)} FYT.`
              )
              /////////////////////////

              user = await sdk.signer.getAddress()

              const fytAddress = await sdk
                  .FutureVault(stETHFutureGlobal.address)
                  .getFYTofPeriod(1)

              fytBalance = await balance(sdk.provider, fytAddress, user)
              console.log(`Balance FYT: ${ethFloat(fytBalance).toFixed(8)}`)

              // Execute a FYT -> PT swap on the AMM
              console.log(`    🔮 Swapping FYT for PT...`)

              const ammAddress = await sdk.AMMRegistry.getFutureAMMPool(
                  stETHFutureGlobal.address
              )

              const amm = AMM__factory.connect(ammAddress, sdk.provider)

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
              ptBalance = await balance(sdk.provider, stETHFutureGlobal.ptAddress, user)
              console.log(`    ✅ Result: ${ethFloat(ptBalance).toFixed(8)} PT.`)

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

              console.log(
                  `\n    💥 Final guaranteed APR with strategy: ${computeAPR(
                      (await getDate(sdk)).getTime(),
                      stETHFutureGlobal.nextPeriodTimestamp.toNumber() * 1000,
                      ptBalance.mul(constants.WeiPerEther).div(AMOUNT_TO_TOKENIZE)
                  ).toFixed(8)}%`
              )

              console.log(`See your transactions: https://etherscan.io/address/${user}`)
            }catch(e){
              console.log(e)
            }
            console.log("g'luck")
          }
        })
      })
    })
      // }) // adding superfluid
  });

  // await Fluence.start({
  //   connectTo: krasnodar[0],
  // });

  // registerCalc(new Calc());

  // console.log("application started");
  // console.log("peer id is: ", Fluence.getStatus().peerId);
  // console.log("relay is: ", Fluence.getStatus().relayPeerId);
  // console.log("press any key to continue");
  // for(;;){
  //   await keypress();
  // }

  // await Fluence.stop();
}

main();