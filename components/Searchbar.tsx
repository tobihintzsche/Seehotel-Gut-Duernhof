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

  console.log(value);

  return (
    <div className="flex border border-black flex-col md:flex-row gap-2 bg-white w-[800px] rounded-md">
      <Script
        src="https://js-sdk.dirs21.de/55b2c45c-052d-4055-90b7-04057545cefa"
        type="text/javascript"
        async
      />

      <div className="flex-2 flex items-center cursor-pointer">
        <DatePicker setValue={setValue} value={value} />
      </div>
      <div className="bg-white border-l border-gray-200 relative flex-2 whitespace-nowrap flex items-center">
        <TravelerSelector
          selectedTravelers={selectedTravelers}
          setSelectedTravelers={setSelectedTravelers}
        />
      </div>
      <div className=" flex flex-1 items-center">
        {value?.[0] ? (
          <button className="whitespace-nowrap bg-orange-300 hover:bg-orange-600 font-bold py-2 px-4 rounded-r">
            <a
              href={`https://v4.ibe.dirs21.de/channels/gut-duernhof/?los=2&room=${mappedTravelers}&arrival=${format(
                value[0],
                "yyyy-MM-dd"
              )}&culture=de-DE&in_tab=true#start`}
              target="_blank"
              className="text-white no-underline"
            >
              Hier Zimmer buchen!
            </a>
          </button>
        ) : (
          <button
            className="whitespace-nowrap bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded-r cursor-not-allowed opacity-50"
            disabled
          >
            Hier Zimmer buchen!
          </button>
        )}
      </div>

      {/* JS: d21_api.ibe.open ({'room_id': 12345}); */}
    </div>
  );
};
