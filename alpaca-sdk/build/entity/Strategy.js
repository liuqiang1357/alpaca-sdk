import { utils } from 'ethers';
export class TwoSideOptimalStrategy {
    encodeStrategyParams(farmingTokenAmount, minOutputAmount) {
        return utils.defaultAbiCoder.encode(['uint256', 'uint256'], [farmingTokenAmount, minOutputAmount]);
    }
}
export class AddAllBaseTokenStrategy {
    encodeStrategyParams(_, minOutputAmount) {
        return utils.defaultAbiCoder.encode(['uint256'], [minOutputAmount]);
    }
}
