import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FlashLoanReceiverBaseInterface extends ethers.utils.Interface {
    functions: {
        "CALLBACK_SUCCESS()": FunctionFragment;
        "CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN()": FunctionFragment;
        "flash()": FunctionFragment;
        "onBookKeeperFlashLoan(address,uint256,uint256,bytes)": FunctionFragment;
        "onFlashLoan(address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "CALLBACK_SUCCESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN", values?: undefined): string;
    encodeFunctionData(functionFragment: "flash", values?: undefined): string;
    encodeFunctionData(functionFragment: "onBookKeeperFlashLoan", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onFlashLoan", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "CALLBACK_SUCCESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onBookKeeperFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface FlashLoanReceiverBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlashLoanReceiverBaseInterface;
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
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<[string]>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<[string]>;
        flash(overrides?: CallOverrides): Promise<[string]>;
        onBookKeeperFlashLoan(initiator: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;
    CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<string>;
    flash(overrides?: CallOverrides): Promise<string>;
    onBookKeeperFlashLoan(initiator: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<string>;
        flash(overrides?: CallOverrides): Promise<string>;
        onBookKeeperFlashLoan(initiator: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<BigNumber>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<BigNumber>;
        flash(overrides?: CallOverrides): Promise<BigNumber>;
        onBookKeeperFlashLoan(initiator: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CALLBACK_SUCCESS_BOOK_KEEPER_STABLE_COIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onBookKeeperFlashLoan(initiator: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
