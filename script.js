function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[toCurrency];
      if (exchangeRate) {
        const result = (amount * exchangeRate).toFixed(2);
        document.getElementById('result').textContent = `${result} ${toCurrency}`;
      } else {
        document.getElementById('result').textContent = 'Помилка при отриманні курсу обміну';
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      document.getElementById('result').textContent = 'Помилка при запросі курсі обміну';
    });
}
