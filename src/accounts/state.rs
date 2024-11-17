// This file will store the data structure for the NFT and related parameters.

use anchor_lang::prelude::*;

#[account]
pub struct Nft {
    pub owner: Pubkey,
    pub price: u64,
    pub rank: u32,
    pub sales: u32,
    pub bid: u64,
    pub ask: u64,
    pub spread: u64,
    pub token_mint_id: Pubkey,
    pub metadata: String,
    pub pct_change: f64,
}
