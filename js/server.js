    //1. Import coingecko-api
    const CoinGecko = require('coingecko-api');

    //2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();
  
    //3. Make calls
    let getAllCoins = async() => {
      let data = await CoinGeckoClient.coins.all();
      console.log(data);
    };

    return getAllCoins();