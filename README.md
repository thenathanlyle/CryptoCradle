# CryptoCradle

## Project Description

A cryptocurrency price chart. Create a responsive website that grabs coin prices and you can get more detail if you click on it and view coin performance. Aiming for a clean design.

## API and Data Sample
[CoinStats Api](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest)

This returns the data for all coins with the limit you set. In this example I just used the top two Bitcoin and Ethereum. This API from CoinStats returns everything from: 
1. Coin Names 
2. Symbols
3. Rank 
4. Price 
5. Price compared to BTC 
6. Volume
7. Marketcap
8. Total Supply

[API Return for Code Below](https://api.coinstats.app/public/v1/coins?skip=0&limit=2&currency=USD)
```
{
    "coins": [
        {
            "id": "bitcoin",
            "icon": "https://static.coinstats.app/coins/Bitcoin6l39t.png",
            "name": "Bitcoin",
            "symbol": "BTC",
            "rank": 1,
            "price": 48364.86215728905,
            "priceBtc": 1,
            "volume": 2916089387884.5396,
            "marketCap": 909218298424.2004,
            "availableSupply": 18799150,
            "totalSupply": 21000000,
            "priceChange1h": 0.28,
            "priceChange1d": 3.09,
            "priceChange1w": -0.18,
            "websiteUrl": "http://www.bitcoin.org",
            "twitterUrl": "https://twitter.com/bitcoin",
            "exp": [
                "https://blockchair.com/bitcoin/",
                "https://btc.com/",
                "https://btc.tokenview.com/"
            ]
        },
        {
            "id": "ethereum",
            "icon": "https://static.coinstats.app/coins/EthereumOCjgD.png",
            "name": "Ethereum",
            "symbol": "ETH",
            "rank": 2,
            "price": 3233.844395281492,
            "priceBtc": 0.06687040591902295,
            "volume": 1077852962962.4181,
            "marketCap": 379268203570.13074,
            "availableSupply": 117280906.9365,
            "totalSupply": 0,
            "priceChange1h": -0.1,
            "priceChange1d": 3.96,
            "priceChange1w": -0.01,
            "websiteUrl": "https://www.ethereum.org/",
            "twitterUrl": "https://twitter.com/ethereum",
            "contractAddress": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
            "decimals": 18,
            "exp": [
                "https://etherscan.io/",
                "https://ethplorer.io/",
                "https://blockchair.com/ethereum",
                "https://eth.tokenview.com/",
                "https://hecoinfo.com/token/0x64ff637fb478863b7468bc97d30a5bf3a428a1fd"
            ]
        }
    ]
}
```

## Wireframes

![alt text](https://github.com/thenathanlyle/project/blob/3106c6ffa5a2b38c8edc1e0de96182f28189ca45/CryptoCradleConcept.png "CryptoCradleConcept")

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  # project
