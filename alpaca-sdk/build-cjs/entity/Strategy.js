"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAllBaseTokenStrategy = exports.TwoSideOptimalStrategy = void 0;
const ethers_1 = require("ethers");
class TwoSideOptimalStrategy {
    encodeStrategyParams(farmingTokenAmount, minOutputAmount) {
        return ethers_1.utils.defaultAbiCoder.encode(['uint256', 'uint256'], [farmingTokenAmount, minOutputAmount]);
    }
}
exports.TwoSideOptimalStrategy = TwoSideOptimalStrategy;
class AddAllBaseTokenStrategy {
    encodeStrategyParams(_, minOutputAmount) {
        return ethers_1.utils.defaultAbiCoder.encode(['uint256'], [minOutputAmount]);
    }
}
exports.AddAllBaseTokenStrategy = AddAllBaseTokenStrategy;
