import React from 'react';
import './Converter.scss';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { useState, useEffect } from 'react';
import { convertCurrency } from '../../api/APIConverter';
import {throttle} from 'lodash';

const Converter = (props) => {
  const THROTTLING_DELAY=500;
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [amountTo, setAmountTo] = useState('');
  const [amountFrom, setAmountFrom] = useState('');
  const throttledHandlingChangingAmountFrom=throttle(handleChangeAmountFrom, THROTTLING_DELAY);
  const throttledHandlingChangingAmountTo=throttle(handleChangeAmountTo, THROTTLING_DELAY);
  useEffect(() => {
    throttledHandlingChangingAmountTo(amountTo);
  }, [currencyTo])
  useEffect(() => {
    throttledHandlingChangingAmountFrom(amountFrom);
  }, [currencyFrom])

  

  async function handleChangeAmountFrom(amount) {
    setAmountFrom(amount);
    if(!amount){
      setAmountTo(0);
    }else{
      let amountTo = await convertCurrency({ from: currencyFrom, to: currencyTo, amount: amount})
      setAmountTo(amountTo);
    }
  }
  async function handleChangeAmountTo(amount) {
    setAmountTo(amount);
    if (!amount) {
      setAmountFrom(0);
    } else {
      let amountFrom = await convertCurrency({ from: currencyTo, to: currencyFrom, amount: amount})
      setAmountFrom(amountFrom);
    }
  }
  const handleCurrencyChangingFrom = (currency) => {
    setCurrencyFrom(currency);
  }
  const handleCurrencyChangingTo = (currency) => {
    setCurrencyTo(currency);
  }
  return (
    <div className='converter'>
      <div className='converter__inputs'>
        <CurrencyInput
          currencies={props.currencies}
          selected={currencyFrom}
          value={amountFrom}
          onSelectCurrency={handleCurrencyChangingFrom}
          onChangeAmount={(value)=>{setAmountFrom(value);throttledHandlingChangingAmountFrom(value)}}
          label='From' />
        <CurrencyInput
          currencies={props.currencies}
          selected={currencyTo}
          value={amountTo}
          onSelectCurrency={handleCurrencyChangingTo}
          onChangeAmount={(value)=>{setAmountTo(value);throttledHandlingChangingAmountTo(value)}}
          label='To' />
      </div>
    </div >
  );
};

export default Converter;