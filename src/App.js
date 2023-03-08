import './reset.scss';
import Header from './components/Header/Header';
import CurrencyInHeader from './data/currencyInHeader.json';
import CurrencyList from './data/currencyAvailable.json';
import Converter from './components/Converter/Converter';
function App() {
  return (
    <div className="App">
      <Header currencies={CurrencyInHeader}/>
      <Converter currencies={CurrencyList}/>
    </div>
  );
}

export default App;
