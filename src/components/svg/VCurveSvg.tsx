import React from "react";

type Props = {
  topBorderColor: string;
  bottomBorderColor: string;
  fillColor: string;
  backgroundColor: string;
};

const VCurveSvg = (props: Props) => (
  <svg
    height="100"
    width="100%"
    viewBox="0 0 1600 100"
    preserveAspectRatio="none"
    style={{ display: "block", backgroundColor: props.backgroundColor }}
  >
    <polygon
      style={{
        fill: props.fillColor,
      }}
      points="1604,24 1604,204 -4,204 -4,24 800,198 "
      transform="matrix(0.99502488,0,0,0.55555551,3.9800995,-13.333324)"
    />
    <polygon
      style={{
        fill: props.topBorderColor,
      }}
      points="800,198 1604,0 1604,11.833 800,198 -4,12 -4,0 "
      transform="matrix(0.99502488,0,0,0.48821549,3.9800995,0)"
    />
    <polygon
      style={{
        fill: props.bottomBorderColor,
      }}
      points="1604,24 1604,11.833 800,198 -4,12 -4,24 800,198 "
      transform="matrix(0.99502488,0,0,0.48856286,3.9800995,-0.06877944)"
    />
  </svg>
);

export default VCurveSvg;
