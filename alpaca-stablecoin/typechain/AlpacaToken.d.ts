import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AlpacaTokenInterface extends ethers.utils.Interface {
    functions: {
        "DELEGATION_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "MANUAL_MINT_LIMIT()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "canUnlockAmount(address)": FunctionFragment;
        "cap()": FunctionFragment;
        "checkpoints(address,uint32)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "endReleaseBlock()": FunctionFragment;
        "getCurrentVotes(address)": FunctionFragment;
        "getPriorVotes(address,uint256)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "lastUnlockBlock(address)": FunctionFragment;
        "lock(address,uint256)": FunctionFragment;
        "lockOf(address)": FunctionFragment;
        "manualMint(address,uint256)": FunctionFragment;
        "manualMinted()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "numCheckpoints(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "startReleaseBlock()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalBalanceOf(address)": FunctionFragment;
        "totalLock()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferAll(address)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unlock()": FunctionFragment;
        "unlockedSupply()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DELEGATION_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANUAL_MINT_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "canUnlockAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "cap", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoints", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegate", values: [string]): string;
    encodeFunctionData(functionFragment: "delegateBySig", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "delegates", values: [string]): string;
    encodeFunctionData(functionFragment: "endReleaseBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentVotes", values: [string]): string;
    encodeFunctionData(functionFragment: "getPriorVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lastUnlockBlock", values: [string]): string;
    encodeFunctionData(functionFragment: "lock", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockOf", values: [string]): string;
    encodeFunctionData(functionFragment: "manualMint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "manualMinted", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "numCheckpoints", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "startReleaseBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBalanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "totalLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferAll", values: [string]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlockedSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DELEGATION_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANUAL_MINT_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canUnlockAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endReleaseBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUnlockBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manualMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manualMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startReleaseBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockedSupply", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
        "Lock(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Lock"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}>;
export declare type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export declare type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    delegate: string;
    previousBalance: BigNumber;
    newBalance: BigNumber;
}>;
export declare type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
export declare type LockEvent = TypedEvent<[
    string,
    BigNumber
], {
    to: string;
    value: BigNumber;
}>;
export declare type LockEventFilter = TypedEventFilter<LockEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface AlpacaToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AlpacaTokenInterface;
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
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        MANUAL_MINT_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canUnlockAmount(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        cap(overrides?: CallOverrides): Promise<[BigNumber]>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number, BigNumber] & {
            fromBlock: number;
            votes: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<[string]>;
        endReleaseBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lastUnlockBlock(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        lock(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        manualMinted(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startReleaseBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalBalanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalLock(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferAll(_to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlock(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unlockedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    MANUAL_MINT_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canUnlockAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    cap(overrides?: CallOverrides): Promise<BigNumber>;
    checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number, BigNumber] & {
        fromBlock: number;
        votes: BigNumber;
    }>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegate(delegatee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegates(delegator: string, overrides?: CallOverrides): Promise<string>;
    endReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lastUnlockBlock(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    lock(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    manualMinted(overrides?: CallOverrides): Promise<BigNumber>;
    mint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalBalanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalLock(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferAll(_to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlock(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unlockedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        MANUAL_MINT_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        canUnlockAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        cap(overrides?: CallOverrides): Promise<BigNumber>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number, BigNumber] & {
            fromBlock: number;
            votes: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<string>;
        endReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        lastUnlockBlock(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        lock(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        manualMinted(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        startReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalBalanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalLock(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferAll(_to: string, overrides?: CallOverrides): Promise<void>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unlock(overrides?: CallOverrides): Promise<void>;
        unlockedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "DelegateChanged(address,address,address)"(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        "Lock(address,uint256)"(to?: string | null, value?: null): LockEventFilter;
        Lock(to?: string | null, value?: null): LockEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        MANUAL_MINT_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canUnlockAmount(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        cap(overrides?: CallOverrides): Promise<BigNumber>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<BigNumber>;
        endReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lastUnlockBlock(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        lock(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        manualMinted(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startReleaseBlock(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalBalanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalLock(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferAll(_to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlock(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unlockedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANUAL_MINT_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canUnlockAmount(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        endReleaseBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lastUnlockBlock(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lock(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manualMint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        manualMinted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startReleaseBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBalanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalLock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferAll(_to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlock(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unlockedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
