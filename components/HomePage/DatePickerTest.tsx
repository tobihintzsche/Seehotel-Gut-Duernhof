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

export const DatePickerTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  // Calculate the year 3 years from now
  const threeYearsFromNow = currentYear + 3;

  const [value, setValue] = useState<DateRange | null>(null);

  const dateRange: DateRange = [newDate, newDate];

  // Function to check if a date is in the past
  const isDateInPast = (date: Date) => {
    const currentDate = new Date();
    // Extract year, month, and day components for comparison
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // Compare year, month, and day
    return (
      year < currentYear ||
      (year === currentYear &&
        (month < currentMonth || (month === currentMonth && day < currentDay)))
    );
  };

  return (
    <div className="z-50">
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
        renderExtraFooter={() => (
          <div
            style={{
              backgroundColor: "green",
              padding: 10,
              color: "white",
            }}
          >
            <h4>Extra Footer</h4>
          </div>
        )}
      />
    </div>
  );
};

export const ExtraFooter = () => {
  return (
    <div className="w-full h-20 bg-black">
      <div>test</div>
    </div>
  );
};
