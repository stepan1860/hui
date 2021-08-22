    

    /* Example in Node.js ES6 using request-promise */

    const rp = require('request-promise');
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': '2e16a8a0-cf41-486a-ba20-bb30c1923152'
      },
      json: true,
      gzip: true
    };

    rp(requestOptions).then(response => {
      console.log('API call response:', response);
    }).catch((err) => {
      console.log('API call error:', err.message);
    });





// document.querySelector('.link').addEventListener('click', function (e) {
//     goRedirect();
// });

function getAllTagsOnPage(selector){
    let arr = document.querySelectorAll(selector);
    arr.forEach(item => {
        item.addEventListener('click', function (e) {
            goRedirect();
        });
    });
}

getAllTagsOnPage('a');