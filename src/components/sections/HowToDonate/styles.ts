import { colors } from "@/styles/colors";
import { styled } from "styled-components";

export const BoxRoundedNumberSC = styled.div`
  min-width: 40px;
  min-height: 40px;
  border: 4px solid ${colors.four_color_yellow_E1FF26};
  border-radius: 50%;
  background-color: ${colors.black_transparent_25};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 30px;
    min-height: 20px;
    top: -9%;
    left: -5%;
    border: 3px solid ${colors.four_color_yellow_E1FF26};
  }
`;
