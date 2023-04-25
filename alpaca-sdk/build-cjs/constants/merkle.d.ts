export interface IMerkleDistributorInfo {
    merkleRoot: string;
    tokenTotal: string;
    claims: {
        [account: string]: {
            index: number;
            amount: string;
            proof: string[];
            flags?: {
                [flag: string]: boolean;
            };
        };
    };
}
export declare function getMerkleDistributorInfo(name: string): IMerkleDistributorInfo;
