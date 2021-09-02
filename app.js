const home = document.querySelector("#home")
const allCoins = document.querySelector("#allCoins")
const random = document.querySelector("#random")
const search = document.querySelector("#search")
const coinList = document.querySelector(".coin-list");

const searchSection = document.querySelector(".search-section")

//search function and form
const coinForm = document.createElement('form');
coinForm.classList.add('coinForm');
const coinInput = document.createElement('input');
coinInput.classList.add('coinInput');
coinInput.setAttribute("type", "text");
coinInput.placeholder = "Search coin name...";
coinForm.appendChild(coinInput)
const coinButton = document.createElement('button');
coinButton.classList.add('coinButton');
coinButton.innerHTML = "Look up coin";
coinForm.appendChild(coinButton)

function searchActivate() {
  removeOldContent()
  searchSection.appendChild(coinForm);
}
console.log(coinInput.value)

//Event Listener
allCoins.addEventListener('click', topCoins);
random.addEventListener('click', randomCoins);
search.addEventListener('click', searchActivate);
coinForm.addEventListener("submit", userCoinSearch);

//async for all coins
async function topCoins() {
  try {
    let res = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD")
    let data = res.data.coins;
    removeOldContent()
    //console.log(data);
    data.forEach((coin) => {
      renderInfo(coin.icon, coin.rank, coin.name.substring(0, 17), coin.symbol, coin.price.toFixed(2), coin.priceChange1d);
    })
  } catch (error) {
    console.log(error);
  }
}
topCoins()

//async for random coin and random number generator
async function randomCoins() {
  const randomNumber = Math.floor(Math.random() * 501)
  console.log(randomNumber);
  try {
    let res = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${randomNumber}&limit=1&currency=USD`)
    let data = res.data.coins;
    removeOldContent()
    data.forEach((coin) => {
      renderInfo(coin.icon, coin.rank, coin.name.substring(0, 15), coin.symbol, coin.price.toFixed(4), coin.priceChange1d);
    })
  } catch (error) {
    console.log(error);
  }
}

//async for searching coin
async function userCoinSearch() {
  let textInput = coinInput.value.toLowerCase().replaceAll(" ", "-");
  console.log(textInput)
  try {
    let res = await axios.get(`https://api.coinstats.app/public/v1/coins/${textInput}?currency=USD`)
    let data = res.data.coin;
    removeOldContent()
    console.log(data);
    data.forEach((coin) => {
      renderInfo(coin.icon, coin.rank, coin.name.substring(0, 17), coin.symbol, coin.price.toFixed(2), coin.priceChange1d);
    })
  } catch (error) {
    console.log(error);
  }
}

//remove old content
function removeOldContent() {
  coinList.innerHTML = "";
  searchSection.innerHTML = "";
  //coinInput.value = "";
  //coinInput.placeholder = "Search coin name...";
}

//Creates the data for display on html/css
function renderInfo(icon, rank, name, symbol, price, priceChange1d) {

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
  coinPrice.innerText = "$" + price;
  coins.appendChild(coinPrice);

  const coinPercent = document.createElement("h4");
  if (priceChange1d < 0) {
    coinPercent.classList.add('coinPercent2');
  } else {
    coinPercent.classList.add('coinPercent');
  }
  coinPercent.innerText = priceChange1d + "%";
  coins.appendChild(coinPercent);

  coinList.appendChild(coins);
}