"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const appConfig_prod_1 = __importDefault(require("../configs/bsc/appConfig.prod"));
const appConfig_stg_1 = __importDefault(require("../configs/bsc/appConfig.stg"));
const appConfig_testnet_1 = __importDefault(require("../configs/bsc/appConfig.testnet"));
function getAppConfig() {
    // interface or apis app config
    switch (process.env.REACT_APP_CUSTOM_ENV || process.env.ENV) {
        case 'prod':
            return appConfig_prod_1.default;
        case 'stg':
            return appConfig_stg_1.default;
        default:
            return appConfig_testnet_1.default;
    }
}
exports.appConfig = getAppConfig();
