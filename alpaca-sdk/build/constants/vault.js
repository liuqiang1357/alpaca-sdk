import { BNBVaultAddress, BUSDVaultAddress, ETHVaultAddress, ALPACAVaultAddress, USDTVaultAddress, WBNBAddress, BUSDAddress, ETHAddress, AlpacaTokenAddress, USDTAddress, WBNBTripleSlopeModel, BUSDTripleSlopeModel, ETHTripleSlopeModel, ALPACATripleSlopeModel, USDTTripleSlopeModel, BTCBVaultAddress, BTCBAddress, BTCBTripleSlopeModel, TUSDVaultAddress, TUSDAddress, TUSDTripleSlopeModel, USDCVaultAddress, USDCAddress, USDCTripleSlopeModel, } from './contracts';
import { compare } from '../utils/address';
import { IbDebtTokenALPACAPoolId, IbDebtTokenBNBPoolId, IbDebtTokenBTCBPoolId, IbDebtTokenBUSDPoolId, IbDebtTokenETHPoolId, IbDebtTokenTUSDPoolId, IbDebtTokenUSDCPoolId, IbDebtTokenUSDTPoolId, } from './pools';
import { mapTokenProfiles } from './tokenProfile';
export const vaults = [
    {
        key: 'bnb',
        name: 'WBNB Vault',
        address: BNBVaultAddress,
        tokenAddress: WBNBAddress,
        tripleSlopeModelAddress: WBNBTripleSlopeModel,
        poolId: IbDebtTokenBNBPoolId,
        baseToken: mapTokenProfiles['bnb'],
        vaultToken: mapTokenProfiles['ibBNB'],
        debtToken: mapTokenProfiles['debtBNB'],
    },
    {
        key: 'busd',
        name: 'BUSD Vault',
        address: BUSDVaultAddress,
        tokenAddress: BUSDAddress,
        tripleSlopeModelAddress: BUSDTripleSlopeModel,
        poolId: IbDebtTokenBUSDPoolId,
        baseToken: mapTokenProfiles['busd'],
        vaultToken: mapTokenProfiles['ibBUSD'],
        debtToken: mapTokenProfiles['debtBUSD'],
    },
    {
        key: 'eth',
        name: 'ETH Vault',
        address: ETHVaultAddress,
        tokenAddress: ETHAddress,
        tripleSlopeModelAddress: ETHTripleSlopeModel,
        poolId: IbDebtTokenETHPoolId,
        baseToken: mapTokenProfiles['eth'],
        vaultToken: mapTokenProfiles['ibETH'],
        debtToken: mapTokenProfiles['debtETH'],
    },
    {
        key: 'alpaca',
        name: 'ALPACA Vault',
        address: ALPACAVaultAddress,
        tokenAddress: AlpacaTokenAddress,
        tripleSlopeModelAddress: ALPACATripleSlopeModel,
        poolId: IbDebtTokenALPACAPoolId,
        baseToken: mapTokenProfiles['alpaca'],
        vaultToken: mapTokenProfiles['ibALPACA'],
        debtToken: mapTokenProfiles['debtALPACA'],
    },
    {
        key: 'usdt',
        name: 'USDT Vault',
        address: USDTVaultAddress,
        tokenAddress: USDTAddress,
        tripleSlopeModelAddress: USDTTripleSlopeModel,
        poolId: IbDebtTokenUSDTPoolId,
        baseToken: mapTokenProfiles['usdt'],
        vaultToken: mapTokenProfiles['ibUSDT'],
        debtToken: mapTokenProfiles['debtUSDT'],
    },
    {
        key: 'btcb',
        name: 'BTCB Vault',
        address: BTCBVaultAddress,
        tokenAddress: BTCBAddress,
        tripleSlopeModelAddress: BTCBTripleSlopeModel,
        poolId: IbDebtTokenBTCBPoolId,
        baseToken: mapTokenProfiles['btcb'],
        vaultToken: mapTokenProfiles['ibBTCB'],
        debtToken: mapTokenProfiles['debtBTCB'],
    },
    {
        key: 'tusd',
        name: 'TUSD Vault',
        address: TUSDVaultAddress,
        tokenAddress: TUSDAddress,
        tripleSlopeModelAddress: TUSDTripleSlopeModel,
        poolId: IbDebtTokenTUSDPoolId,
        baseToken: mapTokenProfiles['tusd'],
        vaultToken: mapTokenProfiles['ibTUSD'],
        debtToken: mapTokenProfiles['debtTUSD'],
    },
    {
        key: 'usdc',
        name: 'USDC Vault',
        address: USDCVaultAddress,
        tokenAddress: USDCAddress,
        tripleSlopeModelAddress: USDCTripleSlopeModel,
        poolId: IbDebtTokenUSDCPoolId,
        baseToken: mapTokenProfiles['usdc'],
        vaultToken: mapTokenProfiles['ibUSDC'],
        debtToken: mapTokenProfiles['debtUSDC'],
    },
];
export const mapVault = vaults.reduce((accu, vault) => {
    return Object.assign(Object.assign({}, accu), { [vault.key]: vault });
}, {});
export const mapAddressVault = vaults.reduce((accu, vault) => {
    return Object.assign(Object.assign({}, accu), { [vault.address.toLowerCase()]: vault });
}, {});
export const getVaultByAddress = (address) => vaults.find((eachVault) => compare(eachVault.address, address));
