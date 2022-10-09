import APWineSDK from "@apwine/sdk"
import { BigNumber } from "ethers"

export const STETH_ADDRESS = "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"

export const depositLidoETH = async (sdk: APWineSDK, amount: BigNumber) => {
    const res = await sdk?.signer?.sendTransaction({
            to: STETH_ADDRESS,
            value: amount,
        })
    return res;
}

export const SDAM3CRV_ADDRESS = "0xB85Cd29327951EDd9fFd6A8Ce5Fa55841838d02a"

export const depositSdam3CRV = async (sdk: APWineSDK, amount: BigNumber) => {
    const res = await sdk?.signer?.sendTransaction({
            to: STETH_ADDRESS,
            value: amount,
        })
    return res;
}
