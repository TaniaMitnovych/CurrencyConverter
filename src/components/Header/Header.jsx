import React from 'react';
import './Header.scss';
const Header = (props) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Currency converter</h1>
      <ol className='header__currency-list'>
        {
          props.currencies.map((currency,i)=>{
            return(
              <li key={i} className="header__currency-item">
                <p>{`${currency.from} → ${currency.to}`}</p>
                <p>{i}</p>
              </li>
            )
          })
        }
      </ol>
    </header>
  );
};

export default Header;