

use anchor_lang::prelude::*;
use crate::state::Nft;

#[derive(Accounts)]
pub struct RankingAccuracyBacktest<'info> {
    #[account(mut)]
    pub nft: Account<'info, Nft>,
}

pub fn run_analyse_data(ctx: Context<RankingAccuracyBacktest>, owner: Pubkey, price: u64, rank: u32, sales: u32, bid: u64, ask: u64, spread: u64, token_mint_id: Pubkey, metadata: String, pct_change: f64) -> ProgramResult {
    let nft = &mut ctx.accounts.nft;

    nft.owner = owner;
    nft.price = price;
    nft.rank = rank;
    nft.sales = sales;
    nft.bid = bid;
    nft.ask = ask;
    nft.spread = spread;
    nft.token_mint_id = token_mint_id;
    nft.metadata = metadata;
    nft.pct_change = pct_change;

    Ok(())
}
