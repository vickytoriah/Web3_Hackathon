use anchor_lang::prelude::*;
use crate::state::Nft;

#[derive(Accounts)]
pub struct KnnPeers<'info> {

#[account(mut)]
pub nft: Account<'info, Nft> {
}

    pub fn run_knn_peers(
        ctx: Context<KnnPeers>,
        owner: Pubkey,
        price: u64,
        rank: u32,
        sales: u32,
        bid: u64,
        ask: u64,
        spread: u64,
        token_mint_id: Pubkey,
        metadata: String,
    )-> Result<()> { // Use Result<(), ProgramError> for compatibility with modern Anchor
        // Access the mutable NFT account
        let nft = &mut ctx.accounts.nft;
        // Update the NFT account fields
        nft.owner = owner;
        nft.price = price;
        nft.rank = rank;
        nft.sales = sales;
        nft.bid = bid;
        nft.ask = ask;
        nft.spread = spread;
        nft.token_mint_id = token_mint_id;
        nft.metadata = metadata;
        
        Ok(());
}

