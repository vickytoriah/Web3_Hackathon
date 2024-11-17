Prompt created by Solana IDE's Anchor Model:
```text
I want to develop a Solana program using Anchor framework, test cases using typescript and a typescript SDK to interact with the program.
--- File structure for the Anchor program ---
Please structure the project into multiple files for ease of management.
Account-related code should be in state.rs
Each instruction should be in its own file, grouped by groups of users.
The function inside the file should be run_[the name of the file]
Remember to add mod.rs in the folder and sub-folders in the instructions.
The mod.rs file should include 'pub use [filename]::*;' at the beginning of the file.
--- Library ---
Use @coral-xyz/anchor for typescript test code
Use Anchor version >= 0.30.0
--- The test ---
Write test cases using typescript for each of the functions. The test-case should use the SDK.
--- The ts SDK ---
The SDK should cover all instructions and function to get all accounts with filters.
--- The app ---
  This is a get_top_20 for get the top 20 nft by change in floor.
There are 3 accounts in this program.
current_block is get data about the top ranking nfts for the current instance; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; the seed is undefined
output forecast is outputs the predicted next top 20 ranking nfts' semantics; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}
updated_function_weights is adjusts the forecasting functionality based on the backtest results; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}
There are 5 instructions in this program.
analyse_data is a instruction,  with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; and logic as following: track change in ranking, extract semantics of the nft's data
knn peers is a instruction, finds other nfts with similar semantics in the nft space with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata}; and logic as following: finds similar semantic nft matches as candidates for next top 20 ranks
pct_change_in_price is a instruction, predicts the potential change in price of the nfts that are close match in semantics to the current top 20 rankings with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; and logic as following: predicts the potential change in floor price based on trading data and match in nft data semantics
ranking_accuracy_backtest is a instruction, creates a loss function on the prediction results and accuracy with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; and logic as following: backtest the accuracy of the predicted top 20 ranking nfts 
semantics_accuracy_backtest is a instruction, backtests the accuracy level of the semantics match with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; and logic as following: statistical analysis on how accurate the predicted "upcoming" nft semantics was based on current top 20 rankings

I want to develop a Solana program using Anchor framework, test cases using typescript and a typescript SDK to interact with the program.
--- File structure for the Anchor program ---
Please structure the project into multiple files for ease of management.
Account-related code should be in state.rs
Each instruction should be in its own file, grouped by groups of users.
The function inside the file should be run_[the name of the file]
Remember to add mod.rs in the folder and sub-folders in the instructions.
The mod.rs file should include 'pub use [filename]::*;' at the beginning of the file.
--- Library ---
Use @coral-xyz/anchor for typescript test code
Use Anchor version >= 0.30.0
--- The test ---
Write test cases using typescript for each of the functions. The test-case should use the SDK.
--- The ts SDK ---
The SDK should cover all instructions and function to get all accounts with filters.
--- The app ---
  This is a forecast for one step forward forecast of where its next ranking will be.
There are 3 accounts in this program.
current_block is get data about the top ranking nfts for the current instance; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}
output forecast is outputs the predicted next top 20 ranking nfts' semantics; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; the seed is undefined
updated_function_weights is adjusts the forecasting functionality based on the backtest results; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}
There are 5 instructions in this program.
analyse_data is a instruction,  with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; and logic as following: track change in ranking, extract semantics of the nft's data
knn peers is a instruction, finds other nfts with similar semantics in the nft space with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata}; and logic as following: finds similar semantic nft matches as candidates for next top 20 ranks
pct_change_in_price is a instruction, predicts the potential change in price of the nfts that are close match in semantics to the current top 20 rankings with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; and logic as following: predicts the potential change in floor price based on trading data and match in nft data semantics
ranking_accuracy_backtest is a instruction, creates a loss function on the prediction results and accuracy with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; and logic as following: backtest the accuracy of the predicted top 20 ranking nfts 
semantics_accuracy_backtest is a instruction, backtests the accuracy level of the semantics match with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; and logic as following: statistical analysis on how accurate the predicted "upcoming" nft semantics was based on current top 20 rankings

I want to develop a Solana program using Anchor framework, test cases using typescript and a typescript SDK to interact with the program.
--- File structure for the Anchor program ---
Please structure the project into multiple files for ease of management.
Account-related code should be in state.rs
Each instruction should be in its own file, grouped by groups of users.
The function inside the file should be run_[the name of the file]
Remember to add mod.rs in the folder and sub-folders in the instructions.
The mod.rs file should include 'pub use [filename]::*;' at the beginning of the file.
--- Library ---
Use @coral-xyz/anchor for typescript test code
Use Anchor version >= 0.30.0
--- The test ---
Write test cases using typescript for each of the functions. The test-case should use the SDK.
--- The ts SDK ---
The SDK should cover all instructions and function to get all accounts with filters.
--- The app ---
  This is a backtest_verification for tests the accuracy of the predicted results.
There are 3 accounts in this program.
current_block is get data about the top ranking nfts for the current instance; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}
output forecast is outputs the predicted next top 20 ranking nfts' semantics; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}
updated_function_weights is adjusts the forecasting functionality based on the backtest results; with data structure as {owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; the seed is undefined
There are 5 instructions in this program.
analyse_data is a instruction,  with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; and logic as following: track change in ranking, extract semantics of the nft's data
knn peers is a instruction, finds other nfts with similar semantics in the nft space with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata}; and logic as following: finds similar semantic nft matches as candidates for next top 20 ranks
pct_change_in_price is a instruction, predicts the potential change in price of the nfts that are close match in semantics to the current top 20 rankings with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change}; and logic as following: predicts the potential change in floor price based on trading data and match in nft data semantics
ranking_accuracy_backtest is a instruction, creates a loss function on the prediction results and accuracy with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; and logic as following: backtest the accuracy of the predicted top 20 ranking nfts 
semantics_accuracy_backtest is a instruction, backtests the accuracy level of the semantics match with parameters:{owner, price, rank, sales, bid, ask, spread, token_mint_id, metadata, pct_change, accuracy_stat}; and logic as following: statistical analysis on how accurate the predicted "upcoming" nft semantics was based on current top 20 rankings


```
Link to Design and Demo Usage: 