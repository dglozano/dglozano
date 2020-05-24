import React from "react";

import { useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

import ExperienceSection from "components/home/experience/ExperienceSection";
import ContactSection from "components/home/contact/ContactSection";
import HeadSection from "components/home/head/HeadSection";

import SvgDivider from "components/svg/SvgDivider";
import UCurveSvg from "components/svg/UCurveSvg";
import VCurveSvg from "components/svg/VCurveSvg";

const HomeContainer = () => {
  const theme: Theme = useTheme();

  return (
    <>
      <HeadSection />

      <SvgDivider
        previousColor={theme.dglozano.palette.lightBlue}
        nextColor={theme.palette.background.default}
        SvgCurve={UCurveSvg}
      />

      <AboutMeSection />

      <VCurveSvg
        topBorderColor={theme.palette.secondary.main}
        bottomBorderColor={theme.palette.secondary.light}
        fillColor={theme.dglozano.palette.darkBlue}
      />

      <ContactSection />
    </>
  );
};

export default HomeContainer;
