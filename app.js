const home = document.querySelector("#home")
const allCoins = document.querySelector("#allCoins")
const random = document.querySelector("#random")
const search = document.querySelector("#search")
//const coinForm = document.querySelector(".coin-form");
const coinList = document.querySelector(".coin-list");

//Event Listener
allCoins.addEventListener('click', topCoins);
random.addEventListener('click', randomCoins);

//async for all coins
async function topCoins() {
  try {
    let res = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=USD")
    //console.log(res);
    let data = res.data.coins;
    removeOldContent()
    console.log(data);
    data.forEach((coin) => {
      renderInfo(coin.icon, coin.rank, coin.name, coin.symbol, coin.price);
    })
  } catch (error) {
    console.log(error);
  }
}
topCoins()

//async for random coin
async function randomCoins() {
  try {
    let res = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${randomNumber}&limit=1&currency=USD`)
    //console.log(res);
    let data = res.data.coins;
    removeOldContent()
    data.forEach((coin) => {
      renderInfo(coin.icon, coin.rank, coin.name, coin.symbol, coin.price);
    })
  } catch (error) {
    console.log(error);
  }
}

//random number generator
const randomNumber = Math.floor(Math.random() * 301)
console.log(randomNumber);

//remove old content
function removeOldContent() {
  coinList.innerHTML = "";
}

//Creates the data for display on html/css
function renderInfo(icon, rank, name, symbol, price) {

  const coins = document.createElement("div");
  coins.classList.add('coins');

  const coinIcon = document.createElement("img")
  coinIcon.classList.add('coinIcon');
  coinIcon.src = icon;
  coins.appendChild(coinIcon)

  const coinRank = document.createElement("h4");
  coinRank.classList.add('coinRank');
  coinRank.innerText = rank;
  coins.appendChild(coinRank);

  const coinName = document.createElement("h2");
  coinName.classList.add('coinName');
  coinName.innerText = name;
  coins.appendChild(coinName);

  const coinSymbol = document.createElement("h4");
  coinSymbol.classList.add('coinSymbol');
  coinSymbol.innerText = symbol;
  coins.appendChild(coinSymbol);

  const coinPrice = document.createElement("h2");
  coinPrice.classList.add('coinPrice');
  coinPrice.innerText = "$" + price.toFixed(2);
  coins.appendChild(coinPrice);

  coinList.appendChild(coins);
}