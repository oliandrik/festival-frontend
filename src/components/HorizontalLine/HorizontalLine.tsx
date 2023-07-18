import { HorizontalLineProps } from "./HorizontalLine.types";

const HorizontalLine: React.FC<HorizontalLineProps> = () => {
  return (
    <div style={{ background: "grey", width: "100%", height: "1px" }}></div>
  );
};

export default HorizontalLine;
