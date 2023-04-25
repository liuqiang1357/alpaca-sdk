export function parseTokenPairName(tokenPair) {
    return `${tokenPair.farmingToken.displaySymbol}-${tokenPair.baseToken.displaySymbol}`;
}
