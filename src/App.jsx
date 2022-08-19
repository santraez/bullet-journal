import React from "react";
import Colors from "./components/Colors";
import CurrentDate from "./components/CurrentDate";
import Login from "./components/Login";

const App = () => {

  return (
    <div className="App">
      <Login />
      <CurrentDate />
      <Colors />
    </div>
  );

};

export default App;