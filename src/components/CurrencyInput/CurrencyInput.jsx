import React from 'react';
const CurrencyInput = (props) => {
  return (
    <div className='currency-input'>
      <p className='currency-input__label'>{props.label}</p>
      <div className='currency-input__input-field'>
        <input
          type='number'
          placeholder={0}
          value={props.value}
          onChange={(e) => { props.onChangeAmount(e.target.value) }} />
        <select
          value={props.selected}
          onChange={(e) => { props.onSelectCurrency(e.target.value) }}>
          {
            props.currencies.map((currency, i) => {
              return <option key={i} value={currency}>{currency}</option>
            })
          }
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;