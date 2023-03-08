import React from 'react';
import './Converter.scss';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { useState, useEffect } from 'react';
import { convertCurrency } from '../../api/APIConverter';
const Converter = (props) => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [amountTo, setAmountTo] = useState('');
  const [amountFrom, setAmountFrom] = useState('');

  useEffect(() => {
    handleChangeAmountTo(amountTo);
  }, [currencyTo])
  useEffect(() => {
    handleChangeAmountFrom(amountFrom);
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
          onChangeAmount={handleChangeAmountFrom}
          label='From' />
        <CurrencyInput
          currencies={props.currencies}
          selected={currencyTo}
          value={amountTo}
          onSelectCurrency={handleCurrencyChangingTo}
          onChangeAmount={handleChangeAmountTo}
          label='To' />
      </div>
    </div >
  );
};

export default Converter;