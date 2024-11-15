var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%solana%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    sol.innerHTML = response.solana.usd;

});

function redirectToPage(page) {
    window.location.href = page; // Redirects to the specified page
}

document.getElementById('downloadButton').addEventListener('click', function() {
    var select = document.getElementById('paperSelect');
    var selectedValue = select.value;
    
    if (selectedValue) {
        window.open(selectedValue, '_blank');
    } else {
        alert('Please select a paper to download.');
    }
});