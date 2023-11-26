import Script from "next/script";
import { useState } from "react";
import { DateRange } from "rsuite/esm/DateRangePicker/types";
import { DatePicker } from "./HomePage/DatePickerTest";
import TravelerSelector from "./TravelerSelector";
import { format } from "date-fns";

export const Searchbar = () => {
  const handleLinkClick = (event) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // d21_api.ibe.open();

    // Use the DIRS21 logic to trigger the booking
    // Note: Replace with the actual logic provided by DIRS21
    // const dirs21BookingLogic = () => {
    //   // Example: Redirect to a specific URL
    //   window.location.href = "https://example.com/bookings";
    // };

    // // Trigger the DIRS21 booking logic
    // dirs21BookingLogic();
  };

  const [value, setValue] = useState<DateRange | null>(null);

  const [selectedTravelers, setSelectedTravelers] = useState({
    adults: 2,
    children: 0,
    childrenAges: [],
  });

  const mappedTravelers = [
    ...Array.from({ length: selectedTravelers.adults }, () => "a"),
    ...selectedTravelers.childrenAges.map((age) => age.toString()),
  ].join(",");

  return (
    <div className="flex flex-col md:flex-row gap-2 p-2 w-min bg-white rounded-md">
      <Script
        src="https://js-sdk.dirs21.de/55b2c45c-052d-4055-90b7-04057545cefa"
        type="text/javascript"
        async
      />

      <div className="border-r-2">
        <DatePicker setValue={setValue} value={value} />
      </div>
      <div className="bg-white whitespace-nowrap flex  border-r-2 items-center">
        <TravelerSelector
          selectedTravelers={selectedTravelers}
          setSelectedTravelers={setSelectedTravelers}
        />
      </div>
      <div className=" flex items-center">
        {value?.[0] && (
          <button className="whitespace-nowrap">
            <a
              href={`https://v4.ibe.dirs21.de/channels/gut-duernhof/?los=2&room=${mappedTravelers}&arrival=${format(
                value[0],
                "yyyy-MM-dd"
              )}&culture=de-DE&in_tab=true#start`}
              target="_blank"
            >
              Hier Zimmer buchen!
            </a>
          </button>
        )}
      </div>

      {/* JS: d21_api.ibe.open ({'room_id': 12345}); */}
    </div>
  );
};
