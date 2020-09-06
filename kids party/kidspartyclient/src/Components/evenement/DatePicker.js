import React, { useState } from "react";

import { connect } from "react-redux";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

const App = (props) => {
  const defaultFrom = "";

  const defaultTo = "";

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

  // const [finDate] = useState(selectedDayRange.to);
  console.log("argoubi", selectedDayRange);
  return (
    <div className="pos-calendar">
      <Calendar
        className="calender"
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        colorPrimary="#59ba4f" // added this
        colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
        shouldHighlightWeekends
      />
      <button
        className="btn11"
        color="dark"
        onClick={() => (
          props.setDateDebut(selectedDayRange.from),
          props.setDateFin(selectedDayRange.to)
        )}
      >
        Valider
      </button>
    </div>
  );
};

export default App;
/* className="btn-calender"*/
