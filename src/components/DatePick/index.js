import React, { useState } from "react";
import "./styles.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DatePick() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);

  console.log (state);

  return (
    <div className='date-pick'>
      <DateRange
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
}
