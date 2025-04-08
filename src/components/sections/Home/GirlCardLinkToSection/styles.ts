import styled from "styled-components";
import { colors } from "@/styles/colors";
import { ReactComponent as Jaqueline } from "@/assets/Jaqueline.svg";
import { ReactComponent as Jessica } from "@/assets/Jessica.svg";
import { ReactComponent as Joana } from "@/assets/Joana.svg";
import { ReactComponent as Juliana } from "@/assets/Juliana.svg";
import { ReactComponent as Jurema } from "@/assets/Jurema.svg";

export const ContainerGirlCardLinkToSection = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-weight: bold;
  text-decoration: none !important;

  cursor: pointer;

  :hover {
    font-size: 28px;
    transition: font-size 0.1s ease-in;
    text-decoration: none !important;
  }
`;

export const TextLink = styled.p`
  color: ${colors.secondary_color_green_37B0CB};
  font-size: 24px;
  padding-top: 10px;
  user-select: none;
  font-weight: 900 !important;
`;

export const JoanaSvgSC = styled(Joana)`
  height: 240px;
  @media (max-width: 1400px) {
    height: 200px;
    color: ${colors.white_FFFFFF};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const JessicaSvgSC = styled(Jessica)`
  height: 240px;
  @media (max-width: 1400px) {
    height: 200px;
    color: ${colors.white_FFFFFF};
  }
  &:hover {
    cursor: pointer;
  }
`;
export const JaquelineSvgSC = styled(Jaqueline)`
  height: 240px;
  @media (max-width: 1400px) {
    height: 200px;
    color: ${colors.white_FFFFFF};
  }
  &:hover {
    cursor: pointer;
  }
`;
export const JulianaSvgSC = styled(Juliana)`
  height: 240px;
  @media (max-width: 1400px) {
    height: 200px;
    color: ${colors.white_FFFFFF};
  }
  &:hover {
    cursor: pointer;
  }
`;
export const JuremaSvgSC = styled(Jurema)`
  height: 240px;
  @media (max-width: 1400px) {
    height: 200px;
    color: ${colors.white_FFFFFF};
  }
  &:hover {
    cursor: pointer;
  }
`;
