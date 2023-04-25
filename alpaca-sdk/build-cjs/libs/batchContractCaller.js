"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchContractCaller = void 0;
const lodash_chunk_1 = __importDefault(require("lodash.chunk"));
const lodash_flatten_1 = __importDefault(require("lodash.flatten"));
class BatchContractCaller {
    constructor(contractCalls, options) {
        this.multicallCap = 20;
        this.contractCalls = contractCalls;
        if (options) {
            if (options.multicallCap)
                this.multicallCap = options.multicallCap;
        }
    }
    addCall(...contractCalls) {
        this.contractCalls.push(...contractCalls);
    }
    /**
     * The conventional Promise.all call, in case that Multicall has not been deployed yet
     */
    call(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.contractCalls.length)
                return new Array();
            const result = yield Promise.all(this.contractCalls.map((call) => {
                const { contract, functionName, params } = call;
                const _params = params ? params : [];
                return contract.functions[functionName](..._params, { blockTag: blockNumber });
            }));
            return result;
        });
    }
    /**
     * Do multicall in one request
     * @param multicall - the typechain Multicall contract instance
     * @param blockNumber - optional block number
     * @returns an array of specified IContractCall return data
     */
    multicallOnce(multicall, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._multicall([...this.contractCalls], multicall, blockNumber);
        });
    }
    /**
     * Do multicall by chunking IContractCall into small peices and make multiple multicall requests
     * @param multicall - the typechain Multicall contract instance
     * @param blockNumber - optional block number
     * @returns an array of specified IContractCall return data
     */
    multicall(multicall, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            // chunk the calls into smaller peices to avoid oversize request
            const callChunks = lodash_chunk_1.default(this.contractCalls, this.multicallCap);
            // call multicall for each chunk simultaneously
            const resultChunks = yield Promise.all(callChunks.map((callChunk) => this._multicall(callChunk, multicall, blockNumber)));
            // flatten all the chunks
            const results = lodash_flatten_1.default(resultChunks);
            return results;
        });
    }
    /**
     * Build ICallData array, make multicall request, and map the result into a proper format
     * @param contractCalls - an array of IContractCalls
     * @param multicall - the typechain Multicall contract instance
     * @param blockNumber - optional block number
     * @returns an array of specified IContractCall return data
     */
    _multicall(contractCalls, multicall, blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            // cache the vars to avoid mutation during async call
            const _contractCalls = [...contractCalls];
            if (!_contractCalls.length)
                return new Array();
            const calldataList = _contractCalls.map((call) => {
                return {
                    target: call.contract.address.toLowerCase(),
                    callData: call.contract.interface.encodeFunctionData(call.functionName, call.params),
                };
            });
            const { returnData } = yield multicall.callStatic.aggregate(calldataList, {
                blockTag: blockNumber,
            });
            const res = returnData.map((call, i) => {
                const { contract, functionName } = _contractCalls[i];
                const result = contract.interface.decodeFunctionResult(functionName, call);
                if (result.length === 1)
                    return result[0];
                return result;
            });
            return res;
        });
    }
}
exports.BatchContractCaller = BatchContractCaller;
