# MetaRank: AI-Powered NFT Analytics on Solana

The Web3 AI London Hackathon provided an incredible opportunity to combine the power of blockchain and artificial intelligence. 

At this event, we built MetaRank, a Solana-based program designed to predict the next top 20 NFTs by leveraging on-chain analytics and machine learning. 

Our solution addresses a critical need in the NFT space: identifying future trends with precision by analyzing historical data, current market activity, and semantic patterns. 

This report dives deep into the architecture, functionality, and innovations of MetaRank.

# Motivation and Problem Statement

The NFT market is fast-paced, with floor prices, trading volumes, and user sentiment shifting rapidly. 
Current analytics tools often provide backward-looking insights, leaving traders and collectors struggling to anticipate future movements.

We aimed to solve this problem by creating a system that not only tracks the current state of the NFT market but also, forecasts future top performers.

By using AI to analyze trends and compare NFTs semantically, our system offers actionable insights for traders, collectors, and market analysts.

## Core Features and Workflow

MetaRank combines real-time data tracking, AI-based semantic matching, predictive analytics, and backtesting into one seamless system. 

Here’s a breakdown of its primary features:

### 1. Real-Time Data Analysis

MetaRank begins by fetching and processing on-chain data from Solana. Key metrics include:

- Price: Current and historical floor prices of NFTs.

- Rank: Current market ranking based on volume or popularity.
- Sales Activity: Frequency and size of trades for individual NFTs.
- Bid and Ask: Depth and liquidity of the market for each NFT.
- Spread: Difference between the highest bid and the lowest ask, indicating market sentiment.

This data is stored in the CurrentBlock account, providing a snapshot of the market at a given moment.

### 2. Semantic Matching

Using AI, MetaRank identifies NFTs with similar patterns based on their metadata and trading activity. 

For instance, it groups NFTs by:
- Category: PFPs, gaming assets, art, etc.
- Trading Behavior: Similar liquidity, bid-ask spreads, and volatility.
- Metadata: Traits and features encoded in the NFT’s metadata.

These matches serve as candidates for potential top-ranking NFTs in the next cycle. The semantic matching process enables a deeper understanding of how NFT projects interact with their audiences and markets.

### 3. Price Forecasting

MetaRank predicts future floor price changes for NFTs identified in the semantic matching step. It considers:

- Historical Trends: Price action over time.
- Market Context: Macroeconomic factors influencing the NFT market.
- Peer Comparisons: Insights derived from similar NFTs.

The predicted price changes are stored in the OutputForecast account, along with the adjusted rankings.

### 4. Backtesting for Accuracy

To ensure reliability, MetaRank includes a robust backtesting module:
- Ranking Accuracy Backtest: Compares predicted rankings with actual outcomes to compute error rates.
- Semantic Accuracy Backtest: Evaluates how well the semantic matching aligns with eventual market performance.

The results are used to dynamically adjust model weights and improve future predictions. This functionality is supported by the UpdatedFunctionWeights account, which tracks the adjustments and their impacts.

## Solana as the Backbone

We chose Solana for its speed, scalability, and cost-effectiveness. Its ability to handle high transaction volumes at low costs was critical for processing the large datasets MetaRank requires. We leveraged the Anchor framework (v0.30+) for building our smart contract, ensuring modularity and maintainability.

### Key accounts in our program include:
#### 1.	CurrentBlock: Tracks real-time NFT data.
#### 2.	OutputForecast: Stores predictions for the next cycle.
#### 3.	UpdatedFunctionWeights: Adjusts forecasting weights based on backtesting results.

## Technical Architecture

### 1. Modular Design

The program’s codebase is structured for scalability and clarity. Each function is housed in its own module, grouped by functionality:
- state.rs: Defines account structures for storing data.
- Instruction Modules:
- analyse_data.rs: Tracks ranking changes and extracts semantics.
- knn_peers.rs: Finds semantically similar NFTs.
- pct_change_in_price.rs: Predicts price changes.
- ranking_accuracy_backtest.rs: Validates ranking predictions.
- semantics_accuracy_backtest.rs: Measures semantic accuracy.

This modular approach ensures that the program is maintainable and extensible.

### 2. AI Integration

AI models for semantic matching and price forecasting were integrated off-chain but informed by on-chain data. We designed these models to analyze:
- Traits: For semantic grouping.
- Trading Behavior: For market insights.
- Historical Trends: For forecasting.

### 3. Backtesting Logic

The backtesting system ensures continuous improvement:
- Loss Functions: Compare predicted vs. actual rankings and prices.
- Optimization: Adjusts weights dynamically in the forecasting logic to improve accuracy over time.

### TypeScript SDK

To facilitate interaction with the program, we developed a comprehensive SDK in TypeScript. The SDK includes:
- Functions to Fetch Accounts: Retrieve CurrentBlock, OutputForecast, and UpdatedFunctionWeights accounts.
- Instruction Wrappers: Simplified methods for calling program instructions, such as analyseData and knnPeers.

This SDK makes it easy for users to integrate MetaRank into their workflows and applications.

### Testing and Validation

We wrote detailed test cases in TypeScript to validate the program’s functionality. Each function, from data analysis to backtesting, was rigorously tested to ensure correctness and efficiency.

Example tests include:
- Verifying semantic matches against manually curated NFT groups.
- Testing price forecasting models with historical data.
- Running backtests to measure the accuracy of predictions.

### Achievements and Results

By the end of the hackathon, we successfully:
1. Built a fully functional Solana program for real-time NFT analytics and forecasting.
2. Developed AI models for semantic matching and price prediction.
3. Integrated a modular and scalable architecture using Anchor 0.30+.
4. Delivered a TypeScript SDK for seamless interaction with the program.
5. Validated the program with comprehensive test cases.

MetaRank demonstrated its potential to revolutionize NFT analytics by predicting trends with unprecedented precision.

### Future Work

While MetaRank is off to a strong start, there’s room for improvement and expansion:
1. Enhanced AI Models: Incorporate sentiment analysis and off-chain data sources like social media activity.
2. Cross-Chain Compatibility: Extend functionality to other blockchains.
3. User-Friendly Interface: Build a front-end for traders and analysts to interact with MetaRank visually.

### Conclusion

MetaRank showcases the powerful intersection of blockchain and AI. By combining Solana’s speed and scalability with machine learning, it provides NFT traders and collectors with actionable insights to stay ahead in a dynamic market. Our project not only highlights the possibilities of the Solana ecosystem but also paves the way for more AI-driven applications in Web3.

## Big thanks to the organizers, @SuperteamUK, @solana, @ainetwork_ai, and @nftsoho, for hosting this inspiring event.

## Victoria Gong and Ulysse Sarron