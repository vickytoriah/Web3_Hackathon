

import { Program, web3 } from "@coral-xyz/anchor";
import { NftProgram } from "../target/types/nft_program";

export class NftFilters {
    program: Program<NftProgram>;
    
    constructor(program: Program<NftProgram>) {
        this.program = program;
    }
    
    async getNftsByPrice(minPrice: number) {
        const nfts = await this.program.account.nft.all();
        return nfts.filter(nft => nft.account.price.toNumber() >= minPrice);
    }
    
    // Add other filters as needed
}
