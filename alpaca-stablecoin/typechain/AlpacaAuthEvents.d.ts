import { ethers, Signer, BaseContract } from "ethers";
import { Listener, Provider } from "@ethersproject/providers";
import { EventFragment } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AlpacaAuthEventsInterface extends ethers.utils.Interface {
    functions: {};
    events: {
        "LogSetAuthority(address)": EventFragment;
        "LogSetOwner(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
}
export declare type LogSetAuthorityEvent = TypedEvent<[string], {
    _authority: string;
}>;
export declare type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;
export declare type LogSetOwnerEvent = TypedEvent<[string], {
    _owner: string;
}>;
export declare type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;
export interface AlpacaAuthEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AlpacaAuthEventsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "LogSetAuthority(address)"(_authority?: string | null): LogSetAuthorityEventFilter;
        LogSetAuthority(_authority?: string | null): LogSetAuthorityEventFilter;
        "LogSetOwner(address)"(_owner?: string | null): LogSetOwnerEventFilter;
        LogSetOwner(_owner?: string | null): LogSetOwnerEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
