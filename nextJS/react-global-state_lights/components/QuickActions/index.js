import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  handleTurnOffAll,
  handleTurnOnAll,
}) {
  const isAllLightsOff = lights?.find((light) => light.isOn === true);
  const isAllLightsOn = lights?.find((light) => light.isOn === false);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleTurnOffAll}
        disabled={isAllLightsOff ? false : true}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleTurnOnAll}
        disabled={isAllLightsOn ? false : true}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
