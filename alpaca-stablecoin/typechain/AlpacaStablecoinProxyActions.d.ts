import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AlpacaStablecoinProxyActionsInterface extends ethers.utils.Interface {
    functions: {
        "adjustPosition(address,uint256,int256,int256,address,bytes)": FunctionFragment;
        "allowManagePosition(address,uint256,address,uint256)": FunctionFragment;
        "allowMigratePosition(address,address,uint256)": FunctionFragment;
        "blacklist(address,address)": FunctionFragment;
        "bnbAdapterDeposit(address,address,bytes)": FunctionFragment;
        "bnbToIbBNB(address,uint256,bool)": FunctionFragment;
        "convertAndLockToken(address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "convertBNBAndLockToken(address,address,address,uint256,bytes)": FunctionFragment;
        "convertBNBLockTokenAndDraw(address,address,address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "convertBNBOpenLockTokenAndDraw(address,address,address,address,address,bytes32,uint256,bytes)": FunctionFragment;
        "convertLockTokenAndDraw(address,address,address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "convertOpenLockTokenAndDraw(address,address,address,address,address,bytes32,uint256,uint256,bytes)": FunctionFragment;
        "draw(address,address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "exportPosition(address,uint256,address)": FunctionFragment;
        "harvest(address,address,uint256,address)": FunctionFragment;
        "harvestMultiple(address,address[],uint256[],address)": FunctionFragment;
        "ibBNBToBNB(address,uint256)": FunctionFragment;
        "ibTokenToToken(address,uint256)": FunctionFragment;
        "importPosition(address,address,uint256)": FunctionFragment;
        "lockBNB(address,address,uint256,bytes)": FunctionFragment;
        "lockBNBAndDraw(address,address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "lockToken(address,address,uint256,uint256,bool,bytes)": FunctionFragment;
        "lockTokenAndDraw(address,address,address,address,uint256,uint256,uint256,bool,bytes)": FunctionFragment;
        "moveCollateral(address,uint256,address,uint256,address,bytes)": FunctionFragment;
        "movePosition(address,uint256,uint256)": FunctionFragment;
        "moveStablecoin(address,uint256,address,uint256)": FunctionFragment;
        "open(address,bytes32,address)": FunctionFragment;
        "openLockBNBAndDraw(address,address,address,address,bytes32,uint256,bytes)": FunctionFragment;
        "openLockTokenAndDraw(address,address,address,address,bytes32,uint256,uint256,bool,bytes)": FunctionFragment;
        "redeemLockedCollateral(address,uint256,address,bytes)": FunctionFragment;
        "safeLockBNB(address,address,uint256,address,bytes)": FunctionFragment;
        "safeLockToken(address,address,uint256,uint256,bool,address,bytes)": FunctionFragment;
        "safeWipe(address,address,address,uint256,uint256,address,bytes)": FunctionFragment;
        "safeWipeAll(address,address,address,uint256,address,bytes)": FunctionFragment;
        "stablecoinAdapterDeposit(address,address,uint256,bytes)": FunctionFragment;
        "tokenAdapterDeposit(address,address,uint256,bool,bytes)": FunctionFragment;
        "tokenToIbToken(address,uint256,bool)": FunctionFragment;
        "transfer(address,address,uint256)": FunctionFragment;
        "transferOwnership(address,uint256,address)": FunctionFragment;
        "transferOwnershipToProxy(address,address,uint256,address)": FunctionFragment;
        "unlockBNB(address,address,uint256,uint256,bytes)": FunctionFragment;
        "unlockToken(address,address,uint256,uint256,bytes)": FunctionFragment;
        "whitelist(address,address)": FunctionFragment;
        "wipe(address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "wipeAll(address,address,address,uint256,bytes)": FunctionFragment;
        "wipeAllAndUnlockBNB(address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "wipeAllAndUnlockToken(address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "wipeAllUnlockIbBNBAndConvertToBNB(address,address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "wipeAllUnlockTokenAndConvert(address,address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "wipeAndUnlockBNB(address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "wipeAndUnlockToken(address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "wipeUnlockIbBNBAndCovertToBNB(address,address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "wipeUnlockTokenAndConvert(address,address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "withdrawBNB(address,address,uint256,uint256,bytes)": FunctionFragment;
        "withdrawToken(address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "adjustPosition", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "allowManagePosition", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowMigratePosition", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "blacklist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "bnbAdapterDeposit", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "bnbToIbBNB", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "convertAndLockToken", values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "convertBNBAndLockToken", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "convertBNBLockTokenAndDraw", values: [
        string,
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "convertBNBOpenLockTokenAndDraw", values: [
        string,
        string,
        string,
        string,
        string,
        BytesLike,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "convertLockTokenAndDraw", values: [
        string,
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "convertOpenLockTokenAndDraw", values: [
        string,
        string,
        string,
        string,
        string,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "draw", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "exportPosition", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "harvest", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "harvestMultiple", values: [string, string[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "ibBNBToBNB", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ibTokenToToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "importPosition", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockBNB", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "lockBNBAndDraw", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "lockToken", values: [string, string, BigNumberish, BigNumberish, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "lockTokenAndDraw", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        boolean,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "moveCollateral", values: [string, BigNumberish, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "movePosition", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveStablecoin", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "open", values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "openLockBNBAndDraw", values: [string, string, string, string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "openLockTokenAndDraw", values: [
        string,
        string,
        string,
        string,
        BytesLike,
        BigNumberish,
        BigNumberish,
        boolean,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "redeemLockedCollateral", values: [string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "safeLockBNB", values: [string, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "safeLockToken", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "safeWipe", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "safeWipeAll", values: [string, string, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "stablecoinAdapterDeposit", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenAdapterDeposit", values: [string, string, BigNumberish, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenToIbToken", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "transferOwnershipToProxy", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unlockBNB", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "unlockToken", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "wipe", values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "wipeAll", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "wipeAllAndUnlockBNB", values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "wipeAllAndUnlockToken", values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "wipeAllUnlockIbBNBAndConvertToBNB", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "wipeAllUnlockTokenAndConvert", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "wipeAndUnlockBNB", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "wipeAndUnlockToken", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "wipeUnlockIbBNBAndCovertToBNB", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "wipeUnlockTokenAndConvert", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "withdrawBNB", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowManagePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowMigratePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bnbAdapterDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bnbToIbBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertAndLockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertBNBAndLockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertBNBLockTokenAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertBNBOpenLockTokenAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertLockTokenAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertOpenLockTokenAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exportPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvestMultiple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ibBNBToBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ibTokenToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "importPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockBNBAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokenAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "movePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLockBNBAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLockTokenAndDraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLockedCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeLockBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeLockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeWipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeWipeAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoinAdapterDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenAdapterDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToIbToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnershipToProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAllAndUnlockBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAllAndUnlockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAllUnlockIbBNBAndConvertToBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAllUnlockTokenAndConvert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAndUnlockBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeAndUnlockToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeUnlockIbBNBAndCovertToBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wipeUnlockTokenAndConvert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {};
}
export interface AlpacaStablecoinProxyActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AlpacaStablecoinProxyActionsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        adjustPosition(_manager: string, _positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowManagePosition(_manager: string, _positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowMigratePosition(_manager: string, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        blacklist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bnbAdapterDeposit(_adapter: string, _positionAddress: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bnbToIbBNB(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertBNBAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertBNBLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertBNBOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _tokenAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        draw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exportPosition(_manager: string, _positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        harvest(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _harvestToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        harvestMultiple(_manager: string, _tokenAdapters: string[], _positionIds: BigNumberish[], _harvestToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ibBNBToBNB(_vault: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ibTokenToToken(_vault: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        importPosition(_manager: string, _source: string, _positionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveCollateral(_manager: string, _positionId: BigNumberish, _dst: string, _collateralAmount: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        movePosition(_manager: string, _source: BigNumberish, _destination: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveStablecoin(_manager: string, _positionId: BigNumberish, _dst: string, _stablecoinValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        open(_manager: string, _collateralPoolId: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        openLockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        openLockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemLockedCollateral(_manager: string, _positionId: BigNumberish, _tokenAdapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeLockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeLockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeWipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeWipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoinAdapterDeposit(_adapter: string, _positionAddress: string, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenAdapterDeposit(_adapter: string, _positionAddress: string, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenToIbToken(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transfer(_collateralToken: string, _dst: string, _amt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_manager: string, _positionId: BigNumberish, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnershipToProxy(_proxyRegistry: string, _manager: string, _positionId: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAllAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAllAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAllUnlockIbBNBAndConvertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAllUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeUnlockIbBNBAndCovertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wipeUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    adjustPosition(_manager: string, _positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowManagePosition(_manager: string, _positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowMigratePosition(_manager: string, _user: string, _ok: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    blacklist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bnbAdapterDeposit(_adapter: string, _positionAddress: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bnbToIbBNB(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertBNBAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertBNBLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertBNBOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _tokenAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    draw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exportPosition(_manager: string, _positionId: BigNumberish, _destination: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    harvest(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _harvestToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    harvestMultiple(_manager: string, _tokenAdapters: string[], _positionIds: BigNumberish[], _harvestToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ibBNBToBNB(_vault: string, _amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ibTokenToToken(_vault: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    importPosition(_manager: string, _source: string, _positionId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveCollateral(_manager: string, _positionId: BigNumberish, _dst: string, _collateralAmount: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    movePosition(_manager: string, _source: BigNumberish, _destination: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveStablecoin(_manager: string, _positionId: BigNumberish, _dst: string, _stablecoinValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    open(_manager: string, _collateralPoolId: BytesLike, _usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    openLockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    openLockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemLockedCollateral(_manager: string, _positionId: BigNumberish, _tokenAdapter: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeLockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeLockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _owner: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeWipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeWipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoinAdapterDeposit(_adapter: string, _positionAddress: string, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenAdapterDeposit(_adapter: string, _positionAddress: string, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenToIbToken(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transfer(_collateralToken: string, _dst: string, _amt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_manager: string, _positionId: BigNumberish, _usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnershipToProxy(_proxyRegistry: string, _manager: string, _positionId: BigNumberish, _dst: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAllAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAllAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAllUnlockIbBNBAndConvertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAllUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeUnlockIbBNBAndCovertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wipeUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adjustPosition(_manager: string, _positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        allowManagePosition(_manager: string, _positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowMigratePosition(_manager: string, _user: string, _ok: BigNumberish, overrides?: CallOverrides): Promise<void>;
        blacklist(_bookKeeper: string, _usr: string, overrides?: CallOverrides): Promise<void>;
        bnbAdapterDeposit(_adapter: string, _positionAddress: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        bnbToIbBNB(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        convertAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        convertBNBAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        convertBNBLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        convertBNBOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        convertLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        convertOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _tokenAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        draw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        exportPosition(_manager: string, _positionId: BigNumberish, _destination: string, overrides?: CallOverrides): Promise<void>;
        harvest(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _harvestToken: string, overrides?: CallOverrides): Promise<void>;
        harvestMultiple(_manager: string, _tokenAdapters: string[], _positionIds: BigNumberish[], _harvestToken: string, overrides?: CallOverrides): Promise<void>;
        ibBNBToBNB(_vault: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        ibTokenToToken(_vault: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        importPosition(_manager: string, _source: string, _positionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        lockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        lockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        lockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        moveCollateral(_manager: string, _positionId: BigNumberish, _dst: string, _collateralAmount: BigNumberish, _adapter: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        movePosition(_manager: string, _source: BigNumberish, _destination: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveStablecoin(_manager: string, _positionId: BigNumberish, _dst: string, _stablecoinValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        open(_manager: string, _collateralPoolId: BytesLike, _usr: string, overrides?: CallOverrides): Promise<BigNumber>;
        openLockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        openLockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        redeemLockedCollateral(_manager: string, _positionId: BigNumberish, _tokenAdapter: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeLockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeLockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _owner: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeWipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _owner: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeWipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        stablecoinAdapterDeposit(_adapter: string, _positionAddress: string, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        tokenAdapterDeposit(_adapter: string, _positionAddress: string, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        tokenToIbToken(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_collateralToken: string, _dst: string, _amt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(_manager: string, _positionId: BigNumberish, _usr: string, overrides?: CallOverrides): Promise<void>;
        transferOwnershipToProxy(_proxyRegistry: string, _manager: string, _positionId: BigNumberish, _dst: string, overrides?: CallOverrides): Promise<void>;
        unlockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        unlockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        whitelist(_bookKeeper: string, _usr: string, overrides?: CallOverrides): Promise<void>;
        wipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAllAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAllAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAllUnlockIbBNBAndConvertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAllUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeUnlockIbBNBAndCovertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wipeUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdrawBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdrawToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        adjustPosition(_manager: string, _positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowManagePosition(_manager: string, _positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowMigratePosition(_manager: string, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        blacklist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bnbAdapterDeposit(_adapter: string, _positionAddress: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bnbToIbBNB(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertBNBAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertBNBLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertBNBOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _tokenAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        draw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exportPosition(_manager: string, _positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        harvest(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _harvestToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        harvestMultiple(_manager: string, _tokenAdapters: string[], _positionIds: BigNumberish[], _harvestToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ibBNBToBNB(_vault: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ibTokenToToken(_vault: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        importPosition(_manager: string, _source: string, _positionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveCollateral(_manager: string, _positionId: BigNumberish, _dst: string, _collateralAmount: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        movePosition(_manager: string, _source: BigNumberish, _destination: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveStablecoin(_manager: string, _positionId: BigNumberish, _dst: string, _stablecoinValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        open(_manager: string, _collateralPoolId: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        openLockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        openLockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemLockedCollateral(_manager: string, _positionId: BigNumberish, _tokenAdapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeLockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeLockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeWipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeWipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoinAdapterDeposit(_adapter: string, _positionAddress: string, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenAdapterDeposit(_adapter: string, _positionAddress: string, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenToIbToken(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transfer(_collateralToken: string, _dst: string, _amt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(_manager: string, _positionId: BigNumberish, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnershipToProxy(_proxyRegistry: string, _manager: string, _positionId: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAllAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAllAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAllUnlockIbBNBAndConvertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAllUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeUnlockIbBNBAndCovertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wipeUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adjustPosition(_manager: string, _positionId: BigNumberish, _collateralValue: BigNumberish, _debtShare: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowManagePosition(_manager: string, _positionId: BigNumberish, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowMigratePosition(_manager: string, _user: string, _ok: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        blacklist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bnbAdapterDeposit(_adapter: string, _positionAddress: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bnbToIbBNB(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertBNBAndLockToken(_vault: string, _manager: string, _tokenAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertBNBLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertBNBOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertOpenLockTokenAndDraw(_vault: string, _manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _tokenAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        draw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exportPosition(_manager: string, _positionId: BigNumberish, _destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        harvest(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _harvestToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        harvestMultiple(_manager: string, _tokenAdapters: string[], _positionIds: BigNumberish[], _harvestToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ibBNBToBNB(_vault: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ibTokenToToken(_vault: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        importPosition(_manager: string, _source: string, _positionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveCollateral(_manager: string, _positionId: BigNumberish, _dst: string, _collateralAmount: BigNumberish, _adapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        movePosition(_manager: string, _source: BigNumberish, _destination: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveStablecoin(_manager: string, _positionId: BigNumberish, _dst: string, _stablecoinValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        open(_manager: string, _collateralPoolId: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        openLockBNBAndDraw(_manager: string, _stabilityFeeCollector: string, _bnbAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        openLockTokenAndDraw(_manager: string, _stabilityFeeCollector: string, _tokenAdapter: string, _stablecoinAdapter: string, _collateralPoolId: BytesLike, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemLockedCollateral(_manager: string, _positionId: BigNumberish, _tokenAdapter: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeLockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeLockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _transferFrom: boolean, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeWipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeWipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _owner: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoinAdapterDeposit(_adapter: string, _positionAddress: string, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenAdapterDeposit(_adapter: string, _positionAddress: string, _amount: BigNumberish, _transferFrom: boolean, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenToIbToken(_vault: string, _amount: BigNumberish, _transferTo: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transfer(_collateralToken: string, _dst: string, _amt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_manager: string, _positionId: BigNumberish, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnershipToProxy(_proxyRegistry: string, _manager: string, _positionId: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlockBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlockToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(_bookKeeper: string, _usr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipe(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAll(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAllAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAllAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAllUnlockIbBNBAndConvertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAllUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAndUnlockBNB(_manager: string, _bnbAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeAndUnlockToken(_manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeUnlockIbBNBAndCovertToBNB(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wipeUnlockTokenAndConvert(_vault: string, _manager: string, _tokenAdapter: string, _stablecoinAdapter: string, _positionId: BigNumberish, _collateralAmount: BigNumberish, _stablecoinAmount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawBNB(_manager: string, _bnbAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(_manager: string, _tokenAdapter: string, _positionId: BigNumberish, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
