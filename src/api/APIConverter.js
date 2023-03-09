import apiKey from '../data/accessApiKey.json';

const fetchData = (url) => {
  let newHeaders = new Headers();
  newHeaders.append("apikey", apiKey.key);
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: newHeaders
  };
  return new Promise((resolve, reject) => {
    fetch(url,requestOptions)
      .then((response) => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
export async function convertCurrency({ from, to, amount }) {
  const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
  let convertionResult = await fetchData(url);
  let resultAmount = convertionResult.result;
  return resultAmount;
}
