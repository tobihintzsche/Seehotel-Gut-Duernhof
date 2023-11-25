import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { DateRange } from "rsuite/esm/DateRangePicker";
import styled from "styled-components";

const StyledDateRangePicker = styled(DateRangePicker)`
  /* Add your styles here */
  .rs-picker-toggle {
    /* Example styling for the toggle button */
    background-color: #3498db;
    color: #fc0000;
  }

  .rs-calendar-table-cell-in-range,
  .rs-calendar-table-cell-selected {
    position: relative;
    background-color: cadetblue;
  }

  /* Add more styles as needed */
`;

export const DatePickerTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const newDate = new Date();

  const dateRange: DateRange = [newDate, newDate];

  return (
    <div className="z-50">
      <StyledDateRangePicker
        isoWeek
        appearance="subtle"
        placeholder="Reisezeitraum wählen"
        value={dateRange}
      />
    </div>
  );
};
