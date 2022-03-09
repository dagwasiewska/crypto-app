import React from 'react';
import TitleSmall from '../ui/TitleSmall';

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
  return (
    <div className="exchange-rate">
      <TitleSmall>Exchange rate</TitleSmall>
      <b> {exchangeRate} </b>
      <p> {chosenPrimaryCurrency} to {chosenSecondaryCurrency} </p>
    </div>
  )
}

export default ExchangeRate
