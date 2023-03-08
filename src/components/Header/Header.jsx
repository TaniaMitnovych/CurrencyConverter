import React from 'react';
import './Header.scss';
import { convertCurrency } from '../../api/APIConverter';
import { useState, useEffect } from 'react';
const Header = (props) => {
  const [convertionRes, setConvertionRes] = useState([]);
  
  async function convert() {
    props.currencies.map((currency) => {
      convertCurrency({ from: currency.from, to: currency.to, amount: currency.amount })
        .then(res => {
          setConvertionRes(prev=>[...prev,Number(res).toFixed(2)])
        })
    })
  }
  useEffect(() => {
    convert();
  }, [])
  
  return (
    <header className='header'>
      <h1 className='header__title'>Currency converter</h1>
      <ol className='header__currency-list'>
        {
          props.currencies.map((currency, i) => {
            return (
              <li key={i} className="header__currency-item">
                <p>{`${currency.from} → ${currency.to}`}</p>
                <p>{convertionRes[i]}</p>
              </li>
            )
          })
        }
      </ol>
    </header>
  );
};

export default Header;