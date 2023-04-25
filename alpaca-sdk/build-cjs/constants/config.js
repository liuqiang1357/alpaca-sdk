"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const _testnet_json_1 = __importDefault(require("../configs/bsc/.testnet.json"));
const _mainnet_json_1 = __importDefault(require("../configs/bsc/.mainnet.json"));
const _ausd_testnet_json_1 = __importDefault(require("../configs/bsc/.ausd.testnet.json"));
const _ausd_mainnet_json_1 = __importDefault(require("../configs/bsc/.ausd.mainnet.json"));
const _xalpaca_testnet_json_1 = __importDefault(require("../configs/bsc/.xalpaca.testnet.json"));
const _xalpaca_mainnet_json_1 = __importDefault(require("../configs/bsc/.xalpaca.mainnet.json"));
const _initCodePairHash_mainnet_json_1 = __importDefault(require("../configs/bsc/.initCodePairHash.mainnet.json"));
const _initCodePairHash_testnet_json_1 = __importDefault(require("../configs/bsc/.initCodePairHash.testnet.json"));
const view_1 = require("../utils/view");
function getConfig() {
    const config = view_1.isMainnet()
        ? Object.assign(Object.assign({}, _mainnet_json_1.default), { LpInitCodePairHash: _initCodePairHash_mainnet_json_1.default, AlpacaStablecoin: _ausd_mainnet_json_1.default, XALPACAConfig: _xalpaca_mainnet_json_1.default }) : Object.assign(Object.assign({}, _testnet_json_1.default), { LpInitCodePairHash: _initCodePairHash_testnet_json_1.default, AlpacaStablecoin: _ausd_testnet_json_1.default, XALPACAConfig: _xalpaca_testnet_json_1.default });
    validate(config, []);
    return config;
}
exports.getConfig = getConfig;
function areWeTestingWithJest() {
    return process.env.JEST_WORKER_ID !== undefined;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validate(config, stack) {
    if (config && !(typeof config === 'string')) {
        Object.entries(config).forEach(([key, value]) => {
            if (value || value === 0) {
                validate(value, [...stack, key]);
            }
            else {
                !areWeTestingWithJest() && !view_1.isProd() && console.warn(`config ${key} not found, path: ${stack}`);
            }
        });
    }
}
