import React from "react";
import {
  Chip,
  Grid,
  Typography,
  Theme,
  useTheme,
  makeStyles,
  Box,
} from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import CalendarIcon from "@material-ui/icons/Today";
import StarIcon from "@material-ui/icons/Star";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ExperienceDetails } from "config/experience";
import { useTranslation } from "react-i18next";

type Props = {
  experiences: ExperienceDetails[];
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom, ${theme.dglozano.palette.white} 0%, ${theme.dglozano.palette.lightOrange} 100%);`,
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  tag: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  timeline: {
    "&::before": {
      background: theme.palette.primary.main,
      top: 24,
      height: "calc(100% - 64px)",
    },
  },
  experienceTitle: {
    marginTop: theme.spacing(1),
  },
  iconLabel: {
    display: "flex",
    "& > *": {
      marginRight: theme.spacing(0.5),
    },
  },
}));

const ExperienceSection = ({ experiences }: Props) => {
  const theme: Theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3" className={classes.title}>
            <strong>{t("experience")}</strong>
          </Typography>
        </Grid>
        <Grid item>
          <VerticalTimeline className={classes.timeline}>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: theme.palette.primary.main,
                  color: theme.dglozano.palette.white,
                  boxShadow: `0 -3px 0 0 ${theme.palette.secondary.main}`,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${theme.palette.primary.main}`,
                }}
                iconStyle={{
                  background: theme.palette.primary.main,
                  color: theme.dglozano.palette.white,
                  boxShadow: `0 0 0 4px ${theme.palette.primary.dark}`,
                }}
                icon={<experience.Icon />}
              >
                <Grid container justify="space-between">
                  <Grid item className={classes.iconLabel}>
                    <CalendarIcon fontSize="small" />
                    <Typography variant="subtitle2">
                      {experience.date}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.iconLabel}>
                    <LocationIcon fontSize="small" />
                    <Typography variant="subtitle2">
                      {experience.location}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography variant="h5" className={classes.experienceTitle}>
                  <strong>{experience.position}</strong>
                </Typography>
                <Typography variant="subtitle1">
                  {experience.company}
                </Typography>

                <Typography variant="body2">
                  {experience.description}
                </Typography>
                <Grid>
                  {experience.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      color="secondary"
                      label={tag}
                      className={classes.tag}
                    />
                  ))}
                </Grid>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{
                background: theme.palette.primary.main,
                color: theme.dglozano.palette.white,
                boxShadow: `0 0 0 4px ${theme.palette.primary.dark}`,
              }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
