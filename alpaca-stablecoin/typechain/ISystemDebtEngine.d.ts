import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISystemDebtEngineInterface extends ethers.utils.Interface {
    functions: {
        "settleSystemBadDebt(uint256)": FunctionFragment;
        "surplusBuffer()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "settleSystemBadDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "surplusBuffer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "settleSystemBadDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "surplusBuffer", data: BytesLike): Result;
    events: {};
}
export interface ISystemDebtEngine extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISystemDebtEngineInterface;
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
        settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        surplusBuffer(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    surplusBuffer(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        settleSystemBadDebt(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        surplusBuffer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        surplusBuffer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        settleSystemBadDebt(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        surplusBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
