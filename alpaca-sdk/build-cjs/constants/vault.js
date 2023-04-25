"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVaultByAddress = exports.mapAddressVault = exports.mapVault = exports.vaults = void 0;
const contracts_1 = require("./contracts");
const address_1 = require("../utils/address");
const pools_1 = require("./pools");
const tokenProfile_1 = require("./tokenProfile");
exports.vaults = [
    {
        key: 'bnb',
        name: 'WBNB Vault',
        address: contracts_1.BNBVaultAddress,
        tokenAddress: contracts_1.WBNBAddress,
        tripleSlopeModelAddress: contracts_1.WBNBTripleSlopeModel,
        poolId: pools_1.IbDebtTokenBNBPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['bnb'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibBNB'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtBNB'],
    },
    {
        key: 'busd',
        name: 'BUSD Vault',
        address: contracts_1.BUSDVaultAddress,
        tokenAddress: contracts_1.BUSDAddress,
        tripleSlopeModelAddress: contracts_1.BUSDTripleSlopeModel,
        poolId: pools_1.IbDebtTokenBUSDPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['busd'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibBUSD'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtBUSD'],
    },
    {
        key: 'eth',
        name: 'ETH Vault',
        address: contracts_1.ETHVaultAddress,
        tokenAddress: contracts_1.ETHAddress,
        tripleSlopeModelAddress: contracts_1.ETHTripleSlopeModel,
        poolId: pools_1.IbDebtTokenETHPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['eth'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibETH'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtETH'],
    },
    {
        key: 'alpaca',
        name: 'ALPACA Vault',
        address: contracts_1.ALPACAVaultAddress,
        tokenAddress: contracts_1.AlpacaTokenAddress,
        tripleSlopeModelAddress: contracts_1.ALPACATripleSlopeModel,
        poolId: pools_1.IbDebtTokenALPACAPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['alpaca'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibALPACA'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtALPACA'],
    },
    {
        key: 'usdt',
        name: 'USDT Vault',
        address: contracts_1.USDTVaultAddress,
        tokenAddress: contracts_1.USDTAddress,
        tripleSlopeModelAddress: contracts_1.USDTTripleSlopeModel,
        poolId: pools_1.IbDebtTokenUSDTPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['usdt'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibUSDT'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtUSDT'],
    },
    {
        key: 'btcb',
        name: 'BTCB Vault',
        address: contracts_1.BTCBVaultAddress,
        tokenAddress: contracts_1.BTCBAddress,
        tripleSlopeModelAddress: contracts_1.BTCBTripleSlopeModel,
        poolId: pools_1.IbDebtTokenBTCBPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['btcb'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibBTCB'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtBTCB'],
    },
    {
        key: 'tusd',
        name: 'TUSD Vault',
        address: contracts_1.TUSDVaultAddress,
        tokenAddress: contracts_1.TUSDAddress,
        tripleSlopeModelAddress: contracts_1.TUSDTripleSlopeModel,
        poolId: pools_1.IbDebtTokenTUSDPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['tusd'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibTUSD'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtTUSD'],
    },
    {
        key: 'usdc',
        name: 'USDC Vault',
        address: contracts_1.USDCVaultAddress,
        tokenAddress: contracts_1.USDCAddress,
        tripleSlopeModelAddress: contracts_1.USDCTripleSlopeModel,
        poolId: pools_1.IbDebtTokenUSDCPoolId,
        baseToken: tokenProfile_1.mapTokenProfiles['usdc'],
        vaultToken: tokenProfile_1.mapTokenProfiles['ibUSDC'],
        debtToken: tokenProfile_1.mapTokenProfiles['debtUSDC'],
    },
];
exports.mapVault = exports.vaults.reduce((accu, vault) => {
    return Object.assign(Object.assign({}, accu), { [vault.key]: vault });
}, {});
exports.mapAddressVault = exports.vaults.reduce((accu, vault) => {
    return Object.assign(Object.assign({}, accu), { [vault.address.toLowerCase()]: vault });
}, {});
const getVaultByAddress = (address) => exports.vaults.find((eachVault) => address_1.compare(eachVault.address, address));
exports.getVaultByAddress = getVaultByAddress;
