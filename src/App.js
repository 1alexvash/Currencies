import React, { useEffect, useState } from "react";

import Preloader from "./components/Preloader/Preloader";

import axios from "axios";

import "./scss/main.css";

const App = () => {
  const currencies = ["USD", "EUR", "GBP", "CAD"];

  const [state, setState] = useState({
    from: currencies[0],
    to: currencies[1],
    amount: 0,
    result: "",
    date: "",
    rates: undefined
  });

  function onChange(e) {
    const value = parseInt(e.target.value);

    e.target.value = value;

    setState({
      ...state,
      amount: value
    });
  }

  useEffect(() => {
    const result = (state.amount * state.rate).toFixed(3);
    setState({ ...state, result });
    // eslint-disable-next-line
  }, [state.amount, state.rate]);

  useEffect(() => {
    if (state.rates !== undefined) {
      const rate = state.rates[state.to] / state.rates[state.from];
      setState({ ...state, rate });
    }
    //eslint-disable-next-line
  }, [state.rates, state.from, state.to]);

  const fetchInitialData = async () => {
    try {
      const data = await axios.get("https://api.ratesapi.io/api/latest");

      let { rates } = data.data;
      rates = { ...rates, EUR: 1 };

      setState({
        ...state,
        date: data.data.date,
        rates
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Preloader />
      <header className="Header">
        <div className="logo">
          <img src="favicon.ico" alt="logo" /> CURRENCIES
        </div>
        <div className="date">{state.date}</div>
      </header>
      <div className="Content">
        <section>
          <p>From:</p>
          <div className="currencies">
            {currencies.map(currency => (
              <span
                className={
                  state.from === currency ? "currency active" : "currency"
                }
                key={currency}
                onClick={() => setState({ ...state, from: currency })}
              >
                {currency}
              </span>
            ))}
          </div>
        </section>
        <section>
          <p>To:</p>
          <div className="currencies">
            {currencies.map(currency => (
              <span
                className={
                  state.to === currency ? "currency active" : "currency"
                }
                key={currency}
                onClick={() => setState({ ...state, to: currency })}
              >
                {currency}
              </span>
            ))}
          </div>
        </section>
      </div>
      <footer className="Footer">
        <input
          type="number"
          className="amount"
          onChange={e => onChange(e)}
          value={state.amount}
          placeholder="Type amount"
        />
        <div className="output">Result: {state.result}</div>
      </footer>
    </div>
  );
};

export default App;
