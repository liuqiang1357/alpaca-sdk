import TestnetConfig from '../configs/bsc/.testnet.json';
import MainnetConfig from '../configs/bsc/.mainnet.json';
import AusdTestnetConfig from '../configs/bsc/.ausd.testnet.json';
import AusdMainnetConfig from '../configs/bsc/.ausd.mainnet.json';
import XALPACATestnetConfig from '../configs/bsc/.xalpaca.testnet.json';
import XALPACAMainnetConfig from '../configs/bsc/.xalpaca.mainnet.json';
import MainnetLpInitCodeHash from '../configs/bsc/.initCodePairHash.mainnet.json';
import TestnetLpInitCodeHash from '../configs/bsc/.initCodePairHash.testnet.json';
import { isMainnet, isProd } from '../utils/view';
export function getConfig() {
    const config = isMainnet()
        ? Object.assign(Object.assign({}, MainnetConfig), { LpInitCodePairHash: MainnetLpInitCodeHash, AlpacaStablecoin: AusdMainnetConfig, XALPACAConfig: XALPACAMainnetConfig }) : Object.assign(Object.assign({}, TestnetConfig), { LpInitCodePairHash: TestnetLpInitCodeHash, AlpacaStablecoin: AusdTestnetConfig, XALPACAConfig: XALPACATestnetConfig });
    validate(config, []);
    return config;
}
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
                !areWeTestingWithJest() && !isProd() && console.warn(`config ${key} not found, path: ${stack}`);
            }
        });
    }
}
