

import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { assert } from "chai";
import { Nft } from "../target/types/nft_program";

describe("NFT Program", () => {
    const provider = anchor.Provider.env();
    anchor.setProvider(provider);
    const program = anchor.workspace.NftProgram as Program<Nft>;
    
    it("Backtest NFT Data Ranking Accuracy", async () => {
        const nftAccount = anchor.web3.Keypair.generate();
        
        // Call the rankingAccuracyBacktest instruction
        await program.rpc.RankingAccuracyBacktest(
            new anchor.BN(10),
            new anchor.BN(100),
            1,
            10,
            new anchor.BN(50),
            new anchor.BN(60),
            new anchor.BN(10),
            nftAccount.publicKey,
            "some_metadata",
            0.05,
            {
                accounts: {
                    nft: nftAccount.publicKey,
                },
                signers: [nftAccount],
            }
        );
        
        const nft = await program.account.nft.fetch(nftAccount.publicKey);
        
        assert.equal(nft.rank, 1);
        assert.equal(nft.price.toString(), "100");
    });
});
