import { Program, AnchorProvider, web3 } from "@coral-xyz/anchor";
import { NftProgram } from "../target/types/nft_program";

// Create a class to interact with the program
export class NftSdk {
    program: Program<NftProgram>;
    provider: AnchorProvider;
    
    constructor(provider: AnchorProvider, program: Program<NftProgram>) {
        this.provider = provider;
        this.program = program;
    }
    
    async analyseData(owner: web3.PublicKey, price: number, rank: number, sales: number, bid: number, ask: number, spread: number, tokenMintId: web3.PublicKey, metadata: string, pctChange: number) {
        const nftAccount = web3.Keypair.generate();
        
        await this.program.rpc.analyseData(
            new anchor.BN(price),
            new anchor.BN(rank),
            sales,
            bid,
            ask,
            spread,
            tokenMintId,
            metadata,
            pctChange,
            {
                accounts: {
                    nft: nftAccount.publicKey,
                },
                signers: [nftAccount],
            }
        );
        
        return nftAccount.publicKey;
    }
    
    // Add other methods (e.g., knnPeers, pctChangeInPrice) here
}
