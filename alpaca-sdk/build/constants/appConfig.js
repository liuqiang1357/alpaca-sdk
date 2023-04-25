import ProdAppConfig from '../configs/bsc/appConfig.prod';
import StgAppConfig from '../configs/bsc/appConfig.stg';
import TestnetAppConfig from '../configs/bsc/appConfig.testnet';
function getAppConfig() {
    // interface or apis app config
    switch (process.env.REACT_APP_CUSTOM_ENV || process.env.ENV) {
        case 'prod':
            return ProdAppConfig;
        case 'stg':
            return StgAppConfig;
        default:
            return TestnetAppConfig;
    }
}
export const appConfig = getAppConfig();
