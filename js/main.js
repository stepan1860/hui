    //Created by Stepan Botsko    

    /* Example in Node.js ES6 using request-promise */

    // const rp = require('request-promise');
    // const requestOptions = {
    //   method: 'GET',
    //   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
    //   qs: {
    //     'start': '1',
    //     'limit': '50',
    //     'convert': 'USD'
    //   },
    //   headers: {
    //     'X-CMC_PRO_API_KEY': '2e16a8a0-cf41-486a-ba20-bb30c1923152'
    //   },
    //   json: true,
    //   gzip: true
    // };

    // rp(requestOptions).then(response => {
    //   console.log('API call response:', response);
    // }).catch((err) => {
    //   console.log('API call error:', err.message);
    // });


    //1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.coins.all();
  console.log(data);
};

func();



    // var uniq = require('uniq');
    // var nums = [5, 2, 1, 3, 2, 5, 4, 2, 0, 1 ];
    // console.log(uniq(nums));





// document.querySelector('.link').addEventListener('click', function (e) {
//     goRedirect();
// });

// function getAllTagsOnPage(selector){
//     let arr = document.querySelectorAll(selector);
//     arr.forEach(item => {
//         item.addEventListener('click', function (e) {
//             goRedirect();
//         });
//     });
// }

// getAllTagsOnPage('a');
