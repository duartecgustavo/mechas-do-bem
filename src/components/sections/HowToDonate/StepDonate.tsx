import { Text } from "@/components/shareds";
import StepNumber from "./StepNumber";
import { colors } from "@/styles/colors";
import { isMobile } from "react-device-detect";

interface IStepDonateProps {
  text: string;
  number: number;
}

const StepDonate = ({ text, number }: IStepDonateProps) => {
  return (
    <>
      {isMobile ? (
        <div className="d-flex flex-column align-items-center gap-3 mb-5 p-2">
          <StepNumber number={number} />
          <Text
            family="Architects Daughter"
            size="18px"
            align="left"
            color={colors.white_transparent_70}
          >
            {text}
          </Text>
        </div>
      ) : (
        <div
          style={{
            border: `2px solid ${colors.white_transparent_30}`,
            borderRadius: "8px",
          }}
          className="d-flex align-items-center gap-4  mb-5  p-2"
        >
          <StepNumber number={number} />
          <Text
            family="Architects Daughter"
            color={colors.white_transparent_70}
            size="18px"
            align="left"
          >
            {text}
          </Text>
        </div>
      )}
    </>
  );
};

export default StepDonate;
