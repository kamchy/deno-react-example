import { React } from "./deps.ts";
import { DenoConfig } from "./types.ts";

export const Rect = (dc: DenoConfig) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
    >
      <rect
        x="10"
        y="10"
        height={dc.height}
        width={dc.width}
        style={{ fill: dc.fill, stroke: dc.stroke }}
      />
    </svg>
  );
};
