var _a, _b;
import { config } from './index';
// XALPACA
export const XALPACAAddress = config.XALPACAConfig.xALPACA;
// GrassHouse
export const AlpacaGrassHouseAddress = (_a = config.XALPACAConfig.GrassHouses.find((grassHouse) => grassHouse.name === 'ALPACA')) === null || _a === void 0 ? void 0 : _a.address;
export const ScientixGrassHouseAddress = (_b = config.XALPACAConfig.GrassHouses.find((grassHouse) => grassHouse.name === 'SCIX')) === null || _b === void 0 ? void 0 : _b.address;
export const DefaultGrazingRangeAddress = (name) => {
    var _a;
    return (_a = config.XALPACAConfig.GrassHouses.find((grassHouse) => grassHouse.name === name)) === null || _a === void 0 ? void 0 : _a.address;
};
export const GrassHouseGatewayAddress = config.XALPACAConfig.GrassHouseGateway;
export const AlpacaFeederAddress = config.XALPACAConfig.ALPACAFeeder;
export const ScientixFeederAddress = config.XALPACAConfig.ScientixFeeder;
// Fairlaunch Pool
export const fdALPACA_POOL = config.XALPACAConfig.FairLaunch.pools.find((pool) => pool.stakingToken === 'fdALPACA');
