import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IShowStopperInterface extends ethers.utils.Interface {
    functions: {
        "live()": FunctionFragment;
        "redeemLockedCollateral(bytes32,address,address,address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemLockedCollateral", values: [BytesLike, string, string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemLockedCollateral", data: BytesLike): Result;
    events: {};
}
export interface IShowStopper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IShowStopperInterface;
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
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        redeemLockedCollateral(collateralPoolId: BytesLike, adapter: string, positionAddress: string, collateralReceiver: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    live(overrides?: CallOverrides): Promise<BigNumber>;
    redeemLockedCollateral(collateralPoolId: BytesLike, adapter: string, positionAddress: string, collateralReceiver: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        live(overrides?: CallOverrides): Promise<BigNumber>;
        redeemLockedCollateral(collateralPoolId: BytesLike, adapter: string, positionAddress: string, collateralReceiver: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        live(overrides?: CallOverrides): Promise<BigNumber>;
        redeemLockedCollateral(collateralPoolId: BytesLike, adapter: string, positionAddress: string, collateralReceiver: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemLockedCollateral(collateralPoolId: BytesLike, adapter: string, positionAddress: string, collateralReceiver: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
