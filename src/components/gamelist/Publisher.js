import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const publisherOption = [
  { value: "ElectronicArts", label: "Electronic Arts" },
  { value: "UbisoftP", label: "Ubisoft" },
  { value: "ActivisionBlizzard", label: "Activision Blizzard" },
  { value: "NintendoP", label: "Nintendo" },
  { value: "Capcom", label: "Capcom" },
  { value: "SonyP", label: "Sony" },
];

export default function Publisher() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={publisherOption}
    />
  );
}
