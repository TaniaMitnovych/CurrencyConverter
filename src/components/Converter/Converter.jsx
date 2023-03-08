import React from 'react';
import './Converter.scss';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { useState, useEffect } from 'react';
const Converter = (props) => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [amountTo, setAmountTo] = useState('');
  const [amountFrom, setAmountFrom] = useState('');
  

  function convert(amount, from, to) {
    console.log(from)
    let i = 1;
    if(from==='USD'){
      i=5
    }else if(from==='UER'){
      i=3
    }
    return amount * i;
  }
  useEffect(() => {
    handleChangeAmountTo(amountTo);
  }, [currencyTo])
  useEffect(() => {
    handleChangeAmountFrom(amountFrom);
  }, [currencyFrom])
  

  const handleChangeAmountFrom = (amount) => {
    // if(Number.isNaN(amount)){
    //   setAmountFrom('');
    // }else{
      setAmountFrom(amount);
    //}
    let amountTo = convert(amount, currencyFrom, currencyTo);
    setAmountTo(amountTo);
  }
  const handleChangeAmountTo = (amount) => {
    // if(Number.isNaN(amount)){
    //   setAmountTo();
    // }else{
      setAmountTo(amount);
    //}
    let amountFrom = convert(amount, currencyFrom, currencyTo);
    setAmountFrom(amountFrom);
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