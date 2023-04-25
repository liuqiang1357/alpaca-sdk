import { IVault, IVaults, IMapVaults } from '../entity';
export declare const vaults: Readonly<IVaults>;
export declare const mapVault: IMapVaults;
export declare const mapAddressVault: IMapVaults;
export declare const getVaultByAddress: (address: string) => IVault;
