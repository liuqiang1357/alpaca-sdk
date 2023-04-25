"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMerkleDistributorInfo = void 0;
const view_1 = require("../utils/view");
function getMerkleDistributorInfo(name) {
    const env = view_1.isMainnet() ? 'mainnet' : 'testnet';
    return require(`../configs/bsc/merkle-distribution-info/${name}.${env}.json`);
}
exports.getMerkleDistributorInfo = getMerkleDistributorInfo;
