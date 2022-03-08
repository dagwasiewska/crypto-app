import React from 'react';
import { useState } from 'react'
import ExchangeRate from "./ExchangeRate"
import axios from 'axios' 
import Title from "../ui/Title"
import CardCurConv from '../ui/CardCurConv';


const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LPC', 'ADA']
    const [chosenPrimaryCurrency, SetChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, SetChosenSecondaryCurrency] = useState('BTC')
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)

  console.log(amount)

  // copied axios request 
  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency
      },
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': 'e3999d5757msh74ea6bad084da42p18bcd1jsn88a5ceb22f7d'
      }
    }
    
    axios.request(options).then((response) => {
      console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
      setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
      setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <CardCurConv>
      <Title>Currency converter</Title>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input type="number" name="currency-amount-1" value={amount} 
                onChange={(e) => setAmount(e.target.value)}/>
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  onChange={(e) => SetChosenPrimaryCurrency(e.target.value)}
                  className="currency-options"
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input type="number" name="currency-amount-2" value={result} disabled={true}/>
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => SetChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-button" onClick={convert}>Convert</button>

      </div>

      <ExchangeRate 
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={chosenPrimaryCurrency}
        chosenSecondaryCurrency={chosenSecondaryCurrency}
      />
    </CardCurConv>
  )
}

export default CurrencyConverter
