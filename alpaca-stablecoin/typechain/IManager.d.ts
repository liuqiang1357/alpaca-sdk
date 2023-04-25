import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IManagerInterface extends ethers.utils.Interface {
    functions: {
        "adjustPosition(uint256,int256,int256,address,bytes)": FunctionFragment;
        "allowManagePosition(uint256,address,uint256)": FunctionFragment;
        "allowMigratePosition(address,uint256)": FunctionFragment;
        "bookKeeper()": FunctionFragment;
        "collateralPools(uint256)": FunctionFragment;
        "exportPosition(uint256,address)": FunctionFragment;
        "give(uint256,address)": FunctionFragment;
        "importPosition(address,uint256)": FunctionFragment;
        "mapPositionHandlerToOwner(address)": FunctionFragment;
        "moveCollateral(uint256,address,uint256,address,bytes)": FunctionFragment;
        "movePosition(uint256,uint256)": FunctionFragment;
        "moveStablecoin(uint256,address,uint256)": FunctionFragment;
        "open(bytes32,address)": FunctionFragment;
        "ownerWhitelist(address,uint256,address)": FunctionFragment;
        "owners(uint256)": FunctionFragment;
        "positions(uint256)": FunctionFragment;
        "redeemLockedCollateral(uint256,address,address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "adjustPosition", values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "allowManagePosition", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowMigratePosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bookKeeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralPools", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exportPosition", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "give", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "importPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mapPositionHandlerToOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "moveCollateral", values: [BigNumberish, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "movePosition", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveStablecoin", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "open", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "ownerWhitelist", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "owners", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "positions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemLockedCollateral", values: [BigNumberish, string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "adjustPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowManagePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowMigratePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bookKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exportPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "importPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapPositionHandlerToOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "movePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLockedCollateral", data: BytesLike): Result;
    events: {};
}
export interface IManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IManagerInterface;
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
        adjustPosition(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowManagePosition(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowMigratePosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<[string]>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        exportPosition(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        importPosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        moveCollateral(arg0: BigNumberish, arg1: string, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        movePosition(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        moveStablecoin(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        redeemLockedCollateral(arg0: BigNumberish, arg1: string, arg2: string, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    adjustPosition(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowManagePosition(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowMigratePosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bookKeeper(overrides?: CallOverrides): Promise<string>;
    collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    exportPosition(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    importPosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<string>;
    moveCollateral(arg0: BigNumberish, arg1: string, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    movePosition(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    moveStablecoin(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
    owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    redeemLockedCollateral(arg0: BigNumberish, arg1: string, arg2: string, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adjustPosition(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: CallOverrides): Promise<void>;
        allowManagePosition(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowMigratePosition(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bookKeeper(overrides?: CallOverrides): Promise<string>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        exportPosition(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<void>;
        give(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<void>;
        importPosition(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<string>;
        moveCollateral(arg0: BigNumberish, arg1: string, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: CallOverrides): Promise<void>;
        movePosition(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveStablecoin(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        open(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        redeemLockedCollateral(arg0: BigNumberish, arg1: string, arg2: string, arg3: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        adjustPosition(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowManagePosition(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowMigratePosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bookKeeper(overrides?: CallOverrides): Promise<BigNumber>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exportPosition(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        importPosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        moveCollateral(arg0: BigNumberish, arg1: string, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        movePosition(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        moveStablecoin(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemLockedCollateral(arg0: BigNumberish, arg1: string, arg2: string, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adjustPosition(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowManagePosition(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowMigratePosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bookKeeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exportPosition(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        importPosition(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mapPositionHandlerToOwner(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        moveCollateral(arg0: BigNumberish, arg1: string, arg2: BigNumberish, arg3: string, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        movePosition(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        moveStablecoin(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerWhitelist(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owners(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLockedCollateral(arg0: BigNumberish, arg1: string, arg2: string, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}