"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fdALPACA_POOL = exports.ScientixFeederAddress = exports.AlpacaFeederAddress = exports.GrassHouseGatewayAddress = exports.DefaultGrazingRangeAddress = exports.ScientixGrassHouseAddress = exports.AlpacaGrassHouseAddress = exports.XALPACAAddress = void 0;
const index_1 = require("./index");
// XALPACA
exports.XALPACAAddress = index_1.config.XALPACAConfig.xALPACA;
// GrassHouse
exports.AlpacaGrassHouseAddress = (_a = index_1.config.XALPACAConfig.GrassHouses.find((grassHouse) => grassHouse.name === 'ALPACA')) === null || _a === void 0 ? void 0 : _a.address;
exports.ScientixGrassHouseAddress = (_b = index_1.config.XALPACAConfig.GrassHouses.find((grassHouse) => grassHouse.name === 'SCIX')) === null || _b === void 0 ? void 0 : _b.address;
const DefaultGrazingRangeAddress = (name) => {
    var _a;
    return (_a = index_1.config.XALPACAConfig.GrassHouses.find((grassHouse) => grassHouse.name === name)) === null || _a === void 0 ? void 0 : _a.address;
};
exports.DefaultGrazingRangeAddress = DefaultGrazingRangeAddress;
exports.GrassHouseGatewayAddress = index_1.config.XALPACAConfig.GrassHouseGateway;
exports.AlpacaFeederAddress = index_1.config.XALPACAConfig.ALPACAFeeder;
exports.ScientixFeederAddress = index_1.config.XALPACAConfig.ScientixFeeder;
// Fairlaunch Pool
exports.fdALPACA_POOL = index_1.config.XALPACAConfig.FairLaunch.pools.find((pool) => pool.stakingToken === 'fdALPACA');
