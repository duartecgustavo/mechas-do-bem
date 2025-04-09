import { BoxRoundedNumberSC } from "./styles";
import { Text } from "@/components/shareds";

interface IStepNumberProps {
  number: any;
}

const StepNumber = ({ number }: IStepNumberProps) => {
  return (
    <>
      <BoxRoundedNumberSC>
        <Text size="18px" color="White" family="Arbutus">
          {number}
        </Text>
      </BoxRoundedNumberSC>
    </>
  );
};

export default StepNumber;
