// this is to support both browser and node
var SDK = typeof window !== 'undefined' ? window.COIN_API_SDK : require("./coinapi_v1")["default"]

output = document.getElementById("output");
var apiKey = prompt("Please enter your COIN API KEY");

var sdk = new SDK(apiKey);

function run() {
  var t = new Date(Date.parse("2016-11-01T22:08:41+00:00"))

  sdk.metadata_list_exchanges().then(function (exchanges) {
    writeText('exchanges:')
    writeText('number: ', exchanges.length)
    exchanges.forEach(x=> { writeJsonObject(x) })

  });
  sdk.metadata_list_assets().then(function (Metadata_list_assets) {
    writeText('Metadata_list_assets:')
    writeText('number: ', Metadata_list_assets.length)
    Metadata_list_assets.forEach(x=> { writeJsonObject(x) })

  });
  sdk.metadata_list_symbols().then(function (Metadata_list_symbols) {
    writeText('Metadata_list_symbols:')
    writeText('number: ', Metadata_list_symbols.length)
    Metadata_list_symbols.forEach(x=> { writeJsonObject(x) })

  });
  sdk.exchange_rates_get_specific_rate("BTC", "USD", t).then(function (Exchange_rates_get_specific_rate) {
    writeText('Exchange_rates_get_specific_rate:')
    writeText(Exchange_rates_get_specific_rate) 

  });
  sdk.exchange_rates_get_all_current_rates("BTC").then(function (Exchange_rates_get_all_current_rates) {
    writeText('Exchange_rates_get_all_current_rates:')
    writeText(Exchange_rates_get_all_current_rates)
  });
  sdk.ohlcv_list_all_periods().then(function (Ohlcv_list_all_periods) {
    writeText('Ohlcv_list_all_periods:')
    writeText('number: ', Ohlcv_list_all_periods.length)
    Ohlcv_list_all_periods.forEach(x=> { writeJsonObject(x) })

  });
  sdk.ohlcv_latest_data("BITSTAMP_SPOT_BTC_USD", "1MIN", 5).then(function (Ohlcv_latest_data) {
    writeText('Ohlcv_latest_data:')
    writeText('number: ', Ohlcv_latest_data.length)
    Ohlcv_latest_data.forEach(x=> { writeJsonObject(x) })

  });
  sdk.ohlcv_historic_data("BITSTAMP_SPOT_BTC_USD", "1MIN", t, new Date(), 5).then(function (Ohlcv_historic_data) {
    writeText('Ohlcv_historic_data:')
    writeText('number: ', Ohlcv_historic_data.length)
    Ohlcv_historic_data.forEach(x=> { writeJsonObject(x) })

  });
  sdk.trades_latest_data_all(5).then(function (Trades_latest_data_all) {
    writeText('Trades_latest_data_all:')
    writeText('number: ', Trades_latest_data_all.length)
    Trades_latest_data_all.forEach(x=> { writeJsonObject(x) })

  });
  sdk.trades_latest_data_symbol("BITSTAMP_SPOT_BTC_USD", 5).then(function (Trades_latest_data_symbol) {
    writeText('Trades_latest_data_symbol:')
    writeText('number: ', Trades_latest_data_symbol.length)
    Trades_latest_data_symbol.forEach(x=> { writeJsonObject(x) })

  });
  sdk.trades_historical_data("BITSTAMP_SPOT_BTC_USD", t, new Date(), 5).then(function (Trades_historical_data) {
    writeText('Trades_historical_data:')
    writeText('number: ', Trades_historical_data.length)
    Trades_historical_data.forEach(x=> { writeJsonObject(x) })

  });
  sdk.quotes_current_data_all().then(function (Quotes_current_data_all) {
    writeText('Quotes_current_data_all:')
    writeText('number: ', Quotes_current_data_all.length)
    Quotes_current_data_all.forEach(x=> { writeJsonObject(x) })

  });
  sdk.quotes_current_data_symbol("BITSTAMP_SPOT_BTC_USD").then(function (Quotes_current_data_symbol) {
    writeText('Quotes_current_data_symbol:')
      writeText(Quotes_current_data_symbol)
  });
  sdk.quotes_latest_data_all(5).then(function (Quotes_latest_data_all) {
    writeText('Quotes_latest_data_all:')
    writeText('number: ', Quotes_latest_data_all.length)
    Quotes_latest_data_all.forEach(x=> { writeJsonObject(x) })

  });
  sdk.quotes_latest_data_symbol("BITSTAMP_SPOT_BTC_USD", 5).then(function (Quotes_latest_data_symbol) {
    writeText('Quotes_latest_data_symbol:')
    writeText('number: ', Quotes_latest_data_symbol.length)
    Quotes_latest_data_symbol.forEach(x=> { writeJsonObject(x) })

  });
  sdk.quotes_historical_data("BITSTAMP_SPOT_BTC_USD", t, new Date(), 5).then(function (Quotes_historical_data) {
    writeText('Quotes_historical_data:')
    writeText('number: ', Quotes_historical_data.length)
    Quotes_historical_data.forEach(x=> { writeJsonObject(x) })

  });
  sdk.orderbooks_current_data_all().then(function (Orderbooks_current_data_all) {
    writeText('Orderbooks_current_data_all:')
    writeText('number: ', Orderbooks_current_data_all.length)
    Orderbooks_current_data_all.forEach(x=> { writeJsonObject(x) })

  });
  sdk.orderbooks_current_data_symbol("BITSTAMP_SPOT_BTC_USD").then(function (Orderbooks_current_data_symbol) {
    writeText('Orderbooks_current_data_symbol:')
    writeText(Orderbooks_current_data_symbol) 

  });
  sdk.orderbooks_latest_data("BITSTAMP_SPOT_BTC_USD", 5).then(function (Orderbooks_latest_data) {
    writeText('Orderbooks_latest_data:')
    writeText('number: ', Orderbooks_latest_data.length)
    Orderbooks_latest_data.forEach(x=> { writeJsonObject(x) })

  });
  sdk.orderbooks_historical_data("BITSTAMP_SPOT_BTC_USD", t, new Date(), 5).then(function (Orderbooks_historical_data) {
    writeText('Orderbooks_historical_data:')
    writeText('number: ', Orderbooks_historical_data.length)
    Orderbooks_historical_data.forEach(x=> { writeJsonObject(x) })

  });
}

run();

 function writeText(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
   output.appendChild(pre);
  }
  
   function writeJsonObject(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = JSON.stringify(message);
   output.appendChild(pre);
  }
  
  
