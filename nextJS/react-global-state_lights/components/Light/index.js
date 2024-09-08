import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ id, name, isOn, toggleLight }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        toggleLight(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
