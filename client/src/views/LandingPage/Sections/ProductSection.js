import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CodeIcon from '@material-ui/icons/Code';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What are we about?</h2>
          <h5 className={classes.description}>
            The acronym "TECH" is what &amp;TECH is all about.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={3}>
            <InfoArea
              title="Team-Based"
              description="Work in teams to complete challenges and make cool projects - you don't have to learn and build things on your own"
              icon={GroupIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={3}>
            <InfoArea
              title="Endless Application"
              description="We believe in applying technology to other disciplines like art, sports, music, and more"
              icon={AllInclusiveIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={3}>
            <InfoArea
              title="Continuous Learning"
              description="Learn new technologies and skills through our tutorials or attend talks throughout the year to learn from people in the industry"
              icon={EmojiObjectsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={3}>
            <InfoArea
              title="Hackathons"
              description="Attend our annual hackathon to show off your work, build new things, hear from speakers in the indsutry, and network with fellow &amp;TECHers and companies/organizations."
              icon={CodeIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
