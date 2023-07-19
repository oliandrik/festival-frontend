import { HorizontalLineProps } from "./HorizontalLine.types";

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  background = "grey",
  width = "100%",
  height = "1px",
}) => {
  return (
    <div
      style={{
        background: `${background}`,
        width: `${width}`,
        height: `${height}`,
      }}
    ></div>
  );
};

export default HorizontalLine;
