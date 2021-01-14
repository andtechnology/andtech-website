import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import CodeIcon from '@material-ui/icons/Code';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What is it?</h2>
          <h5 className={classes.description}>
            Spend 12 straight hours with your friends and teammates...
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <InfoArea
              title="building a cool project"
              description="Build a cool project relating to art&amp;TECH, music&amp;TECH, or sports&amp;TECH"
              icon={GroupIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <InfoArea
              title="hearing from guest speakers"
              description="Hear from people who do cool work through talks about innovation, cybersecurity, navigating college, and more"
              icon={AllInclusiveIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <InfoArea
              title="attending workshops"
              description="Attend workshops to learn how to build a website or an app, or how to work an arduino or raspberry pi"
              icon={EmojiObjectsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <br></br>
          <h4 className={classes.description}>
            At the end of the night, you'll get to demo your cool project to all the participants
            and judges and have the chance to win the very first Hack&amp;TECH!
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.section}>
        <GridItem xs={12} sm={6} md={4}>
          <h3 className={classes.title}>Who is it for?</h3>
          <h5 className={classes.description}>
            High school students in Frederick County and surrounding areas
          </h5>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <h3 className={classes.title}>When is it?</h3>
          <h5 className={classes.description}>
            Saturday, June 12, 2021 // 12pm - 12am [TENTATIVE]
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
