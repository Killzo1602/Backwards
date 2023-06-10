import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const genreOption = [
  { value: "action", label: "action" },
  { value: "adventure", label: "adventure" },
  { value: "RPG", label: "RPG" },
  { value: "Racing", label: "Racing" },
  { value: "Fighting", label: "Fighting" },
  { value: "Strategy", label: "Strategy" },
];

export default function Genre() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={genreOption}
    />
  );
}
