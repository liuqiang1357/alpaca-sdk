import { isMainnet } from '../utils/view';
export function getMerkleDistributorInfo(name) {
    const env = isMainnet() ? 'mainnet' : 'testnet';
    return require(`../configs/bsc/merkle-distribution-info/${name}.${env}.json`);
}
