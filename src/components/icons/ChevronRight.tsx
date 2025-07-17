import { Svg } from "@/types";
import React from "react";

const ChevronRight = ({width, height, color}: Svg) => {
  return (
    <svg
    //   width="8"
    //   height="12"
    width={width || '1em'}
    height={height || '1em'}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 6L1 11"
        stroke={color || "#282828"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
