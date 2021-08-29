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

![alt text](https://github.com/thenathanlyle/CryptoCradle/blob/5655dc29ae3e99fff67487ab2851d4fa16934dbd/CrpytoCradleConcept.png "CryptoCradleConcept")

### MVP/PostMVP
#### MVP 
* Find API that can return data needed for coin details
* Return top cryptocurrency coin data like icon image, name, symbol, rank, price
* Allow users to search for specific coins and working nav bar
#### PostMVP  
* Allow for user to favorite specific coins in own tab
* Light and Dark mode
* Price color to change from green if price is higher and to red if price is lower

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|August 27-29| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 30| Project Approval / Core Application Structure (HTML, CSS, etc.) / API Working | Incomplete
|August 31| Pseudocode / actual code | Incomplete
|September 1| Initial Clickable Model / MVP  | Incomplete
|September 2| Advanced CSS / Post MVP | Incomplete
|September 3| Presentations | Incomplete

## Priority Matrix
![alt text](https://github.com/thenathanlyle/CryptoCradle/blob/2a15cebe167edee35935012874a04e9894015a89/Priority%20Matrix.png "Priority Matrix")

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML structure | H | 3hrs| hrs | hrs |
| Establish CSS classes & ids | H | 4hrs| hrs | hrs |
| Have API data working | H | 3hrs| hrs | hrs |
| Data display all coin info needed for page | H | 5hrs| hrs | hrs |
| Logic for coins and interaction | H | 10hrs| hrs | hrs |
| Responsive design across all devices | H | 2hrs| hrs | hrs |
| Additional testing and features | H | 5hrs| hrs | hrs |
| Total | H | 32hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  
COMING SOON