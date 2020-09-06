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

const App2 = (props) => {
  const defaultFrom = {
    year: Number(props.datedebut && props.datedebut.year),
    month: Number(props.datedebut && props.datedebut.month),
    day: Number(props.datedebut.day && props.datedebut.day),
  };

  const defaultTo = {
    year: Number(props.datefin.year),
    month: Number(props.datefin.month),
    day: Number(props.datefin.day),
  };

  const defaultFromm = "";

  const defaultTp = "";

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };
  const defaultRanger = {
    from: defaultFromm,
    to: defaultTp,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
  const [selecty, setSelectedDayRange2] = useState(defaultRanger);

  // const [finDate] = useState(selectedDayRange.to);
  console.log("taw ", selecty);
  return (
    <div className="pos-calendar">
      <Calendar
        className="calender"
        value={selectedDayRange}
        onChange={setSelectedDayRange2}
        colorPrimary="#59ba4f" // added this
        colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
        shouldHighlightWeekends
      />
      <button
        color="dark"
        onClick={() => (
          props.setDateDebut(selectedDayRange.from),
          props.setDateFin(selectedDayRange.to)
        )}
        // onClick={() => props.setDate(selectedDayRange)}
      >
        Valider
      </button>
    </div>
  );
};

export default App2;
/* className="btn-calender"*/
