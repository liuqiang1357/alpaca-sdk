import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ILiquidationStrategyInterface extends ethers.utils.Interface {
    functions: {
        "execute(bytes32,uint256,uint256,address,uint256,uint256,address,address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "execute", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    events: {};
}
export interface ILiquidationStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiquidationStrategyInterface;
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
        execute(collateralPoolId: BytesLike, positionDebtShare: BigNumberish, positionCollateralAmount: BigNumberish, positionAddress: string, debtShareToBeLiquidated: BigNumberish, maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, collateralRecipient: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    execute(collateralPoolId: BytesLike, positionDebtShare: BigNumberish, positionCollateralAmount: BigNumberish, positionAddress: string, debtShareToBeLiquidated: BigNumberish, maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, collateralRecipient: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        execute(collateralPoolId: BytesLike, positionDebtShare: BigNumberish, positionCollateralAmount: BigNumberish, positionAddress: string, debtShareToBeLiquidated: BigNumberish, maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, collateralRecipient: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        execute(collateralPoolId: BytesLike, positionDebtShare: BigNumberish, positionCollateralAmount: BigNumberish, positionAddress: string, debtShareToBeLiquidated: BigNumberish, maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, collateralRecipient: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(collateralPoolId: BytesLike, positionDebtShare: BigNumberish, positionCollateralAmount: BigNumberish, positionAddress: string, debtShareToBeLiquidated: BigNumberish, maxDebtShareToBeLiquidated: BigNumberish, _liquidatorAddress: string, collateralRecipient: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}