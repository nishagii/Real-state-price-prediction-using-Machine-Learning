import React from "react";
import PricePredictionForm from "./components/PricePredictionForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🏠 Bangalore House Price Predictor</h1>
          <p>Get accurate price predictions for your dream home in Bangalore</p>
        </header>
        <main>
          <PricePredictionForm />
        </main>
      </div>
    </div>
  );
}

export default App;
