import React, { useState } from "react";

interface TravelSelectorProps {
  selectedTravelers: {
    adults: number;
    children: number;
    childrenAges: number[];
  };
  setSelectedTravelers: (
    value: {
      adults: number;
      children: number;
      childrenAges: number[];
    },
    event: React.SyntheticEvent<Element, Event>
  ) => void;
}

const TravelerSelector = ({
  selectedTravelers,
  setSelectedTravelers,
}: TravelSelectorProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFieldClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddAdult = () => {
    setSelectedTravelers({
      ...selectedTravelers,
      adults: selectedTravelers.adults + 1,
    });
  };

  const handleRemoveAdult = () => {
    setSelectedTravelers({
      ...selectedTravelers,
      adults: Math.max(selectedTravelers.adults - 1, 0),
    });
  };

  const handleAddChild = () => {
    setSelectedTravelers({
      ...selectedTravelers,
      children: selectedTravelers.children + 1,
    });
  };

  const handleRemoveChild = () => {
    setSelectedTravelers({
      ...selectedTravelers,
      children: Math.max(selectedTravelers.children - 1, 0),
    });
  };

  const handleChildAgeChange = (index, e) => {
    const updatedChildrenAges = [...selectedTravelers.childrenAges];
    updatedChildrenAges[index] = parseInt(e.target.value, 10);

    setSelectedTravelers({
      ...selectedTravelers,
      childrenAges: updatedChildrenAges,
    });
  };

  const handleSubmit = () => {
    // Your logic to handle the submission
    console.log("Selected Travelers:", selectedTravelers);
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="border border-gray-300 p-2 cursor-pointer"
        onClick={handleFieldClick}
      >
        {modalOpen
          ? "Reisende auswählen"
          : `Selected Travelers: ${selectedTravelers.adults} Adults, ${selectedTravelers.children} Children`}
      </div>
      {modalOpen && (
        <div className="fixed z-10 flex items-center justify-center">
          <div className="bg-white w-[280px] p-4 rounded shadow-lg">
            <div className="mb-4 grid-cols-12 grid">
              <div className="col-span-5 flex items-center">
                <label className="mr-2 font-bold">Adults: </label>
              </div>

              <div className="col-span-7 flex flex-nowrap items-center justify-between">
                <button
                  onClick={handleRemoveAdult}
                  type="button"
                  className="font-bold rounded border focus:outline-none transition-colors duration-300 ease-in-out button-secondary px-4 w-12 h-12"
                >
                  -
                </button>
                {selectedTravelers.adults}
                <button
                  onClick={handleAddAdult}
                  type="button"
                  className="font-bold rounded border focus:outline-none transition-colors duration-300 ease-in-out button-secondary px-4 w-12 h-12"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-4 grid-cols-12 grid">
              <div className="col-span-5 flex items-center">
                <label className="mr-2 font-bold">Children: </label>
              </div>
              <div className="col-span-7 flex flex-nowrap items-center justify-between">
                <button
                  onClick={handleRemoveChild}
                  type="button"
                  className="font-bold rounded border focus:outline-none transition-colors duration-300 ease-in-out button-secondary px-4 w-12 h-12"
                >
                  -
                </button>
                {selectedTravelers.children}
                <button
                  onClick={handleAddChild}
                  type="button"
                  className="font-bold rounded border focus:outline-none transition-colors duration-300 ease-in-out button-secondary px-4 w-12 h-12"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              {selectedTravelers.children > 0 && (
                <div className="mt-2 flex flex-col w-full">
                  {Array.from(
                    { length: selectedTravelers.children },
                    (_, index) => (
                      <div className="mb-4 grid grid-cols-12" key={index}>
                        <div className="col-span-5 flex items-center">
                          <label
                            htmlFor={`childAge${index + 1}`}
                            className="mr-2 font-bold"
                          >
                            {index + 1}. Kind:
                          </label>
                        </div>

                        <div className="col-span-7 flex flex-nowrap items-center justify-between">
                          <select
                            id={`childAge${index + 1}`}
                            value={selectedTravelers.childrenAges[index] || ""}
                            onChange={(e) => handleChildAgeChange(index, e)}
                            className="p-2 border rounded w-full"
                          >
                            {Array.from({ length: 17 }, (_, age) => (
                              <option key={age + 1} value={age + 1}>
                                {age + 1} {age === 0 ? "Jahr" : "Jahre"}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelerSelector;
