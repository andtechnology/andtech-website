import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// For Card Component
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// For Images
import ArtTech from '../../../assets/img/art.png';
import LiteratureTech from '../../../assets/img/literature.jpg';
import MusicTech from '../../../assets/img/music.jpg';
import SportTech from '../../../assets/img/sports.jpg';

// @material-ui/icons
// import GroupIcon from '@material-ui/icons/Group';
// import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import CodeIcon from '@material-ui/icons/Code';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ResourceSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Here at &amp;TECH, we believe in changing the world&amp;technology through education&amp;technology.</h2>
          <h5 className={classes.description}>
          We believe that learning the basics of coding, logic, and design are the only things you need to make the world your platform for change and the sky your limit for anything you want to do in life. Here are some of the ways we have been inspired by others in the world, using technology:
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer>
        <GridItem xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <img src={ArtTech} height="300px" alt="art"/>
              <br /><br />
              <Typography variant="h5" component="h2">
                art&amp;tech
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                How can we use technology to create beautiful drawings, paintings, and other graphic designs?
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <img src={SportTech} height="300px" alt="sports"/>
              <br /><br />
              <Typography variant="h5" component="h2">
                sports&amp;tech
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                How can computer programs help predict winners of games, the best possible shot, and more?
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer>
        <GridItem xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <img src={LiteratureTech} height="300px" alt="literature"/>
              <br /><br />
              <Typography variant="h5" component="h2">
                literature&amp;tech
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                How can computer code help us analyze what we read, visualize a story, or guess the next word in a sentence?
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <img src={MusicTech} height="300px" alt="music"/>
              <br /><br />
              <Typography variant="h5" component="h2">
                music&amp;tech
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                How can we enhance our ability to listen to music using computers? Can we make new sounds, comopositions, or even instruments
                with computer code?
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>...and much more!</h2>
          <h5 className={classes.description}>
          Here at &amp;TECH, the possibilities are endless! It is up to your creativity to imagine all the combinations.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
