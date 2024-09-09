import { useState } from "react";
import { useImmer } from "use-immer";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    const name = event.target.value;
    updateMountain((draft) => {
      draft.name = name;
    });
  }

  function handleAltitudeChange(event) {
    const altitude = event.target.value;
    updateMountain((draft) => {
      draft.values.altitude = altitude;
    });
  }

  function handleMountainRangeChange(event) {
    const mountainRange = event.target.value;
    updateMountain((draft) => {
      draft.values.mountainRange = mountainRange;
    });
  }

  // SOLVE WITHOUT IMMER

  // const [mountain, setMountain] = useState({
  //   name: "Mount Everest",
  //   values: {
  //     altitude: 8848,
  //     mountainRange: "Himalayas",
  //   },
  // });

  // function handleNameChange(event) {
  //   const name = event.target.value;
  //   setMountain((prev) => ({ ...prev, name }));
  // }

  // function handleAltitudeChange(event) {
  //   const altitude = event.target.value;
  //   setMountain((prev) => ({ ...prev, values: { ...prev.values, altitude } }));
  // }

  // function handleMountainRangeChange(event) {
  //   const mountainRange = event.target.value;
  //   setMountain((prev) => ({...prev, values: { ...prev.values, mountainRange }}));
  // }

  // SOLVE WITHOUT IMMER -END-

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
