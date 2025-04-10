import { CopySvgSC } from "../SocialMidia/styles";
import { TextSC } from "./styles";

export interface ITextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  align?: "left" | "center" | "right";
  family?: "Architects Daughter" | "Concert One" | "Arbutus";
  style?: React.CSSProperties;
  copy?: boolean;
  textgap?: any;
  withtextmark?: string;
  weight?: string;
}

const Text = ({
  copy = false,
  children,
  color,
  size,
  align,
  weight,
  family,
  style,
  withtextmark,
}: ITextProps) => {
  function copyToClipboard() {
    if (copy && children) {
      const textToCopy = children.toString();
      navigator.clipboard.writeText(textToCopy);
    }
  }
  return (
    <>
      <TextSC
        color={color}
        size={size}
        align={align}
        weight={weight}
        family={family}
        style={style}
        onClick={copyToClipboard}
        textgap={copy ? "4px" : undefined}
        withtextmark={withtextmark}
      >
        {children}
        {copy && <CopySvgSC color={color && color} />}
      </TextSC>
    </>
  );
};

export default Text;
