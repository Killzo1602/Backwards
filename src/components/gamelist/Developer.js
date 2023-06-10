import React, { useEffect, useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function Developer(props) {
  const [devTags, setDevTags] = useState([]);

  const [developerOptions, setDeveloperOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const loadedTags = await loadTags();
      setDevTags(loadedTags);
      for (let optionObject of loadedTags) {
        setDeveloperOptions((options) => [
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
        filter: 'category="developer"',
        $cancelKey: "dev",
      });
      return records;
    } catch (e) {
      console.log(e);
    }
  }
  if (developerOptions.length === 0) {
    return <p>Loading</p>;
  } else {
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={developerOptions}
      />
    );
  }
}
