import React from "react";
import CalendarCell from "./components/CalendarCell";
import Colors from "./components/Colors";
import CurrentDate from "./components/CurrentDate";
import DarkMode from "./components/DarkMode";
import Login from "./components/Login";

const App = () => {

  return (
    <div className="App">
      <Login />
      <CurrentDate />
      <Colors />
      <DarkMode />
      <CalendarCell />
    </div>
  );

};

export default App;