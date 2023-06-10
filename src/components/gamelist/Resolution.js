import React, { useEffect, useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function Resolution(props) {
  const [tags, setTags] = useState([]);

  const [options, setOptions] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState();

  useEffect(() => {
    (async () => {
      const loadedTags = await loadTags();
      setTags(loadedTags);
      for (let optionObject of loadedTags) {
        setOptions((options) => [
          ...options,
          {
            value: optionObject.identifier,
            label: optionObject.tag_name,
          },
        ]);
      }
    })();
  }, []);

  async function loadTags() {
    try {
      const records = await props.pb.collection("game_tags").getFullList(200, {
        filter: 'category="resolution"',
        $cancelKey: "res",
      });
      return records;
    } catch (e) {
      console.log(e);
    }
  }
  if (options.length === 0) {
    return <p>Loading</p>;
  } else {
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={(values, action) => {
          let oldValues = selectedOptions;
          if (action.action === "remove-value") {
            let result = oldValues.filter(
              (o1) => !values.some((o2) => o1.label === o2.label)
            );
            props.removeFilterCallback(result[0]);
          } else if (action.action === "select-option") {
            props.addFilterCallback(values);
          }
          setSelectedOptions(values);
        }}
        isMulti
        options={options}
      />
    );
  }
}
