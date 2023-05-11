// nivo
import { PieSvgProps, ResponsivePie } from "@nivo/pie";
// types
import { TGraph } from "./types";
// constants
import { CHARTS_THEME, DEFAULT_MARGIN } from "constants/graph";

export const PieGraph: React.FC<TGraph & Omit<PieSvgProps<any>, "height" | "width">> = ({
  height = "400px",
  width = "100%",
  margin,
  theme,
  ...rest
}) => (
  <div style={{ height, width }}>
    <ResponsivePie
      margin={margin ?? DEFAULT_MARGIN}
      theme={theme ?? CHARTS_THEME}
      animate={true}
      {...rest}
    />
  </div>
);
