import React from "react";
import { makeStyles } from "@material-ui/core";

type Props = {
  previousColor: string;
  nextColor: string;
  translateY: number;
  SvgCurve: React.FunctionComponent;
};

const waveStyles = makeStyles({
  wave: {
    lineHeight: 0,
    color: ({ previousColor }: Props) => previousColor,
    display: "block",
    overflow: "hidden",
    transform: ({ translateY }: Props) => `translateY(${translateY}%)`,
    width: "100%",
    "& svg": {
      fill: ({ nextColor }: Props) => nextColor,
      height: "auto",
      marginLeft: "-1%",
      width: "102%",
    },
  },
});

const SvgDivider = (props: Props) => {
  const classes = waveStyles(props);
  const { SvgCurve } = props;

  return (
    <div className={classes.wave}>
      <SvgCurve />
    </div>
  );
};

SvgDivider.defaultProps = {
  translateY: -60,
};

export default SvgDivider;
