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

const { beforeToday } = DateRangePicker;

interface DatePickerProps {
  value: DateRange | null;
  setValue: (
    value: DateRange | null,
    event: React.SyntheticEvent<Element, Event>
  ) => void;
}

export const DatePicker = ({ value, setValue }: DatePickerProps) => {
  return (
    <StyledDateRangePicker
      isoWeek
      limitStartYear={1}
      limitEndYear={3}
      character=" - "
      locale={{
        sunday: "So",
        monday: "Mo",
        tuesday: "Di",
        wednesday: "Mi",
        thursday: "Do",
        friday: "Fr",
        saturday: "Sa",
        today: "Heute",
        yesterday: "Gestern",
        ok: "Übernehmen",
      }}
      placement="bottom"
      shouldDisableDate={beforeToday && beforeToday()}
      appearance="default"
      placeholder="Reisezeitraum wählen"
      value={value}
      format="dd.MM.yyyy"
      onChange={setValue}
      showMeridian={false}
    />
  );
};
