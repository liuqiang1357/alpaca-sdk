import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockFlashLendingCalleeInterface extends ethers.utils.Interface {
    functions: {
        "flashLendingCall(address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "flashLendingCall", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "flashLendingCall", data: BytesLike): Result;
    events: {};
}
export interface MockFlashLendingCallee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockFlashLendingCalleeInterface;
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
        flashLendingCall(caller: string, debtValueToRepay: BigNumberish, collateralAmountToLiquidate: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    flashLendingCall(caller: string, debtValueToRepay: BigNumberish, collateralAmountToLiquidate: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        flashLendingCall(caller: string, debtValueToRepay: BigNumberish, collateralAmountToLiquidate: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        flashLendingCall(caller: string, debtValueToRepay: BigNumberish, collateralAmountToLiquidate: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        flashLendingCall(caller: string, debtValueToRepay: BigNumberish, collateralAmountToLiquidate: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
