"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTokenPairName = void 0;
function parseTokenPairName(tokenPair) {
    return `${tokenPair.farmingToken.displaySymbol}-${tokenPair.baseToken.displaySymbol}`;
}
exports.parseTokenPairName = parseTokenPairName;
