import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PCSFlashLiquidatorInterface extends ethers.utils.Interface {
    functions: {
        "alpacaStablecoin()": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "flashLendingCall(address,uint256,uint256,bytes)": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "stablecoinAdapter()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "whitelist(address)": FunctionFragment;
        "withdrawToken(address,uint256)": FunctionFragment;
        "wrappedNativeAddr()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "alpacaStablecoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashLendingCall", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "stablecoinAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "wrappedNativeAddr", values?: undefined): string;
    decodeFunctionResult(functionFragment: "alpacaStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLendingCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoinAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedNativeAddr", data: BytesLike): Result;
    events: {
        "LogFlashLiquidation(address,uint256,uint256,uint256)": EventFragment;
        "LogSellCollateral(uint256,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogFlashLiquidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSellCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type LogFlashLiquidationEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    liquidatorAddress: string;
    debtValueToRepay: BigNumber;
    collateralAmountToLiquidate: BigNumber;
    liquidationProfit: BigNumber;
}>;
export declare type LogFlashLiquidationEventFilter = TypedEventFilter<LogFlashLiquidationEvent>;
export declare type LogSellCollateralEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    amount: BigNumber;
    minAmountOut: BigNumber;
    actualAmountOut: BigNumber;
}>;
export declare type LogSellCollateralEventFilter = TypedEventFilter<LogSellCollateralEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PCSFlashLiquidator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PCSFlashLiquidatorInterface;
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
        alpacaStablecoin(overrides?: CallOverrides): Promise<[string]>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        flashLendingCall(_caller: string, _debtValueToRepay: BigNumberish, _collateralAmountToLiquidate: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bookKeeper: string, _alpacaStablecoin: string, _stablecoinAdapter: string, _wrappedNativeAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(_toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(_token: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrappedNativeAddr(overrides?: CallOverrides): Promise<[string]>;
    };
    alpacaStablecoin(overrides?: CallOverrides): Promise<string>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    flashLendingCall(_caller: string, _debtValueToRepay: BigNumberish, _collateralAmountToLiquidate: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bookKeeper: string, _alpacaStablecoin: string, _stablecoinAdapter: string, _wrappedNativeAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(_toBeWhitelistedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(_token: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrappedNativeAddr(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        alpacaStablecoin(overrides?: CallOverrides): Promise<string>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        flashLendingCall(_caller: string, _debtValueToRepay: BigNumberish, _collateralAmountToLiquidate: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        initialize(_bookKeeper: string, _alpacaStablecoin: string, _stablecoinAdapter: string, _wrappedNativeAddr: string, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        whitelist(_toBeWhitelistedAddress: string, overrides?: CallOverrides): Promise<void>;
        withdrawToken(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        wrappedNativeAddr(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LogFlashLiquidation(address,uint256,uint256,uint256)"(liquidatorAddress?: string | null, debtValueToRepay?: null, collateralAmountToLiquidate?: null, liquidationProfit?: null): LogFlashLiquidationEventFilter;
        LogFlashLiquidation(liquidatorAddress?: string | null, debtValueToRepay?: null, collateralAmountToLiquidate?: null, liquidationProfit?: null): LogFlashLiquidationEventFilter;
        "LogSellCollateral(uint256,uint256,uint256)"(amount?: null, minAmountOut?: null, actualAmountOut?: null): LogSellCollateralEventFilter;
        LogSellCollateral(amount?: null, minAmountOut?: null, actualAmountOut?: null): LogSellCollateralEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        alpacaStablecoin(overrides?: CallOverrides): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        flashLendingCall(_caller: string, _debtValueToRepay: BigNumberish, _collateralAmountToLiquidate: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bookKeeper: string, _alpacaStablecoin: string, _stablecoinAdapter: string, _wrappedNativeAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(_toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawToken(_token: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrappedNativeAddr(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        alpacaStablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashLendingCall(_caller: string, _debtValueToRepay: BigNumberish, _collateralAmountToLiquidate: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bookKeeper: string, _alpacaStablecoin: string, _stablecoinAdapter: string, _wrappedNativeAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoinAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(_toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(_token: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrappedNativeAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
