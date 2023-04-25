import { ethers, Signer, BigNumber, BaseContract } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { EventFragment } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AlpacaNoteInterface extends ethers.utils.Interface {
    functions: {};
    events: {
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
}
export declare type LogNoteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], {
    sig: string;
    guy: string;
    foo: string;
    bar: string;
    wad: BigNumber;
    fax: string;
}>;
export declare type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;
export interface AlpacaNote extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AlpacaNoteInterface;
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
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)"(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
