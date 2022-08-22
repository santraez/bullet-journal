import React from "react";
import CalendarCell from "./components/CalendarCell";
import Colors from "./components/Colors";
import CurrentDate from "./components/CurrentDate";
import DarkMode from "./components/DarkMode";
import DiaryCell from "./components/DiaryCell";
import Login from "./components/Login";

const App = () => {

  return (
    <div className="App">
      <Login />
      <CurrentDate />
      <Colors />
      <DarkMode />
      <CalendarCell />
      <DiaryCell />
    </div>
  );

};

export default App;