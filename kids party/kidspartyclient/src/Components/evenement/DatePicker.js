import React, { useState } from "react";

import { connect } from "react-redux";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = (props) => {
  const defaultFrom = "";

  const defaultTo = "";

  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultValue);

  
  // const [finDate] = useState(selectedDayRange.to);



  return (
    <>
     <button onClick={()=>props.setDate(selectedDayRange)}>confirmer la date</button> 
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      colorPrimary="#0fbcf9" // added this
      colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
      shouldHighlightWeekends
    />
    </>
  );
};

export default App;
