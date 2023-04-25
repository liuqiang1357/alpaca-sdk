import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IBookKeeperInterface extends ethers.utils.Interface {
    functions: {
        "accessControlConfig()": FunctionFragment;
        "accrueStabilityFee(bytes32,address,int256)": FunctionFragment;
        "addCollateral(bytes32,address,int256)": FunctionFragment;
        "adjustPosition(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "blacklist(address)": FunctionFragment;
        "collateralPoolConfig()": FunctionFragment;
        "collateralToken(bytes32,address)": FunctionFragment;
        "confiscatePosition(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "mintUnbackedStablecoin(address,address,uint256)": FunctionFragment;
        "moveCollateral(bytes32,address,address,uint256)": FunctionFragment;
        "movePosition(bytes32,address,address,int256,int256)": FunctionFragment;
        "moveStablecoin(address,address,uint256)": FunctionFragment;
        "positionWhitelist(address,address)": FunctionFragment;
        "positions(bytes32,address)": FunctionFragment;
        "settleSystemBadDebt(uint256)": FunctionFragment;
        "stablecoin(address)": FunctionFragment;
        "systemBadDebt(address)": FunctionFragment;
        "totalStablecoinIssued()": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accessControlConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueStabilityFee", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "adjustPosition", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "blacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "collateralPoolConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralToken", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "confiscatePosition", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintUnbackedStablecoin", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveCollateral", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "movePosition", values: [BytesLike, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveStablecoin", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "positionWhitelist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positions", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "settleSystemBadDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stablecoin", values: [string]): string;
    encodeFunctionData(functionFragment: "systemBadDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "totalStablecoinIssued", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
    decodeFunctionResult(functionFragment: "accessControlConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueStabilityFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPoolConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confiscatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintUnbackedStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "movePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleSystemBadDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemBadDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStablecoinIssued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {};
}
export interface IBookKeeper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBookKeeperInterface;
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
        accessControlConfig(overrides?: CallOverrides): Promise<[string]>;
        accrueStabilityFee(collateralPoolId: BytesLike, stabilityFeeRecipient: string, debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addCollateral(collateralPoolId: BytesLike, ownerAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adjustPosition(collateralPoolId: BytesLike, positionAddress: string, collateralOwner: string, stablecoinOwner: string, collateralValue: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<[string]>;
        collateralToken(collateralPoolId: BytesLike, ownerAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        confiscatePosition(collateralPoolId: BytesLike, positionAddress: string, collateralCreditor: string, stablecoinDebtor: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintUnbackedStablecoin(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveCollateral(collateralPoolId: BytesLike, src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        movePosition(collateralPoolId: BytesLike, src: string, dst: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveStablecoin(src: string, dst: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        positionWhitelist(positionAddress: string, whitelistedAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        positions(collateralPoolId: BytesLike, positionAddress: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lockedCollateral: BigNumber;
            debtShare: BigNumber;
        }>;
        settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stablecoin(ownerAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        systemBadDebt(ownerAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStablecoinIssued(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accessControlConfig(overrides?: CallOverrides): Promise<string>;
    accrueStabilityFee(collateralPoolId: BytesLike, stabilityFeeRecipient: string, debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addCollateral(collateralPoolId: BytesLike, ownerAddress: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adjustPosition(collateralPoolId: BytesLike, positionAddress: string, collateralOwner: string, stablecoinOwner: string, collateralValue: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralPoolConfig(overrides?: CallOverrides): Promise<string>;
    collateralToken(collateralPoolId: BytesLike, ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    confiscatePosition(collateralPoolId: BytesLike, positionAddress: string, collateralCreditor: string, stablecoinDebtor: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintUnbackedStablecoin(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveCollateral(collateralPoolId: BytesLike, src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    movePosition(collateralPoolId: BytesLike, src: string, dst: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveStablecoin(src: string, dst: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    positionWhitelist(positionAddress: string, whitelistedAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    positions(collateralPoolId: BytesLike, positionAddress: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lockedCollateral: BigNumber;
        debtShare: BigNumber;
    }>;
    settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stablecoin(ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    systemBadDebt(ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalStablecoinIssued(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessControlConfig(overrides?: CallOverrides): Promise<string>;
        accrueStabilityFee(collateralPoolId: BytesLike, stabilityFeeRecipient: string, debtAccumulatedRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addCollateral(collateralPoolId: BytesLike, ownerAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        adjustPosition(collateralPoolId: BytesLike, positionAddress: string, collateralOwner: string, stablecoinOwner: string, collateralValue: BigNumberish, debtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        blacklist(toBeBlacklistedAddress: string, overrides?: CallOverrides): Promise<void>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<string>;
        collateralToken(collateralPoolId: BytesLike, ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        confiscatePosition(collateralPoolId: BytesLike, positionAddress: string, collateralCreditor: string, stablecoinDebtor: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintUnbackedStablecoin(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveCollateral(collateralPoolId: BytesLike, src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        movePosition(collateralPoolId: BytesLike, src: string, dst: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveStablecoin(src: string, dst: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        positionWhitelist(positionAddress: string, whitelistedAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        positions(collateralPoolId: BytesLike, positionAddress: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lockedCollateral: BigNumber;
            debtShare: BigNumber;
        }>;
        settleSystemBadDebt(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stablecoin(ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        systemBadDebt(ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalStablecoinIssued(overrides?: CallOverrides): Promise<BigNumber>;
        whitelist(toBeWhitelistedAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        accessControlConfig(overrides?: CallOverrides): Promise<BigNumber>;
        accrueStabilityFee(collateralPoolId: BytesLike, stabilityFeeRecipient: string, debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addCollateral(collateralPoolId: BytesLike, ownerAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adjustPosition(collateralPoolId: BytesLike, positionAddress: string, collateralOwner: string, stablecoinOwner: string, collateralValue: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<BigNumber>;
        collateralToken(collateralPoolId: BytesLike, ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        confiscatePosition(collateralPoolId: BytesLike, positionAddress: string, collateralCreditor: string, stablecoinDebtor: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintUnbackedStablecoin(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveCollateral(collateralPoolId: BytesLike, src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        movePosition(collateralPoolId: BytesLike, src: string, dst: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveStablecoin(src: string, dst: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        positionWhitelist(positionAddress: string, whitelistedAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        positions(collateralPoolId: BytesLike, positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stablecoin(ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        systemBadDebt(ownerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalStablecoinIssued(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessControlConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueStabilityFee(collateralPoolId: BytesLike, stabilityFeeRecipient: string, debtAccumulatedRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addCollateral(collateralPoolId: BytesLike, ownerAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adjustPosition(collateralPoolId: BytesLike, positionAddress: string, collateralOwner: string, stablecoinOwner: string, collateralValue: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        blacklist(toBeBlacklistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralPoolConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralToken(collateralPoolId: BytesLike, ownerAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confiscatePosition(collateralPoolId: BytesLike, positionAddress: string, collateralCreditor: string, stablecoinDebtor: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintUnbackedStablecoin(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveCollateral(collateralPoolId: BytesLike, src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        movePosition(collateralPoolId: BytesLike, src: string, dst: string, collateralAmount: BigNumberish, debtShare: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveStablecoin(src: string, dst: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        positionWhitelist(positionAddress: string, whitelistedAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(collateralPoolId: BytesLike, positionAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stablecoin(ownerAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemBadDebt(ownerAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStablecoinIssued(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(toBeWhitelistedAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
