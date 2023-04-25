import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GetPositionsInterface extends ethers.utils.Interface {
    functions: {
        "getAllPositionsAsc(address,address)": FunctionFragment;
        "getAllPositionsDesc(address,address)": FunctionFragment;
        "getPositionWithSafetyBuffer(address,uint256,uint256)": FunctionFragment;
        "getPositionsAsc(address,uint256,uint256)": FunctionFragment;
        "getPositionsDesc(address,uint256,uint256)": FunctionFragment;
        "initialize()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAllPositionsAsc", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getAllPositionsDesc", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPositionWithSafetyBuffer", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionsAsc", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionsDesc", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAllPositionsAsc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPositionsDesc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionWithSafetyBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsAsc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsDesc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {};
}
export interface GetPositions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GetPositionsInterface;
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
        getAllPositionsAsc(_manager: string, _user: string, overrides?: CallOverrides): Promise<[
            BigNumber[],
            string[],
            string[]
        ] & {
            _ids: BigNumber[];
            _positions: string[];
            _collateralPools: string[];
        }>;
        getAllPositionsDesc(_manager: string, _user: string, overrides?: CallOverrides): Promise<[BigNumber[], string[], string[]]>;
        getPositionWithSafetyBuffer(_manager: string, _startIndex: BigNumberish, _offset: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber[]
        ] & {
            _positions: string[];
            _debtShares: BigNumber[];
            _safetyBuffers: BigNumber[];
        }>;
        getPositionsAsc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            string[],
            string[]
        ] & {
            _ids: BigNumber[];
            _positions: string[];
            _collateralPools: string[];
        }>;
        getPositionsDesc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], string[], string[]]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getAllPositionsAsc(_manager: string, _user: string, overrides?: CallOverrides): Promise<[
        BigNumber[],
        string[],
        string[]
    ] & {
        _ids: BigNumber[];
        _positions: string[];
        _collateralPools: string[];
    }>;
    getAllPositionsDesc(_manager: string, _user: string, overrides?: CallOverrides): Promise<[BigNumber[], string[], string[]]>;
    getPositionWithSafetyBuffer(_manager: string, _startIndex: BigNumberish, _offset: BigNumberish, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        BigNumber[]
    ] & {
        _positions: string[];
        _debtShares: BigNumber[];
        _safetyBuffers: BigNumber[];
    }>;
    getPositionsAsc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber[],
        string[],
        string[]
    ] & {
        _ids: BigNumber[];
        _positions: string[];
        _collateralPools: string[];
    }>;
    getPositionsDesc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], string[], string[]]>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAllPositionsAsc(_manager: string, _user: string, overrides?: CallOverrides): Promise<[
            BigNumber[],
            string[],
            string[]
        ] & {
            _ids: BigNumber[];
            _positions: string[];
            _collateralPools: string[];
        }>;
        getAllPositionsDesc(_manager: string, _user: string, overrides?: CallOverrides): Promise<[BigNumber[], string[], string[]]>;
        getPositionWithSafetyBuffer(_manager: string, _startIndex: BigNumberish, _offset: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber[]
        ] & {
            _positions: string[];
            _debtShares: BigNumber[];
            _safetyBuffers: BigNumber[];
        }>;
        getPositionsAsc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            string[],
            string[]
        ] & {
            _ids: BigNumber[];
            _positions: string[];
            _collateralPools: string[];
        }>;
        getPositionsDesc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], string[], string[]]>;
        initialize(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getAllPositionsAsc(_manager: string, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAllPositionsDesc(_manager: string, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionWithSafetyBuffer(_manager: string, _startIndex: BigNumberish, _offset: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsAsc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsDesc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllPositionsAsc(_manager: string, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPositionsDesc(_manager: string, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionWithSafetyBuffer(_manager: string, _startIndex: BigNumberish, _offset: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsAsc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsDesc(_manager: string, _fromId: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}