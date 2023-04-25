import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IStabilityFeeCollectorInterface extends ethers.utils.Interface {
    functions: {
        "collect(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "collect", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    events: {};
}
export interface IStabilityFeeCollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStabilityFeeCollectorInterface;
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
        collect(collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    collect(collateralPoolId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collect(collateralPoolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        collect(collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collect(collateralPoolId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
