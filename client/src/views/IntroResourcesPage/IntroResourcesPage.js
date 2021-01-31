import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/hackathonPage";

// Sections for this page
import ResourceSection from "./Sections/ResourceSection.js";
import GitHubIntroResource from "./Sections/GitHubIntroResource.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function IntroResourcesPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="&amp;TECH"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/hackandtech-bg.png")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12}>
              <h1 className={classes.title}>Intro Starter Resources</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* sections go here */}
          <ResourceSection />
          {/* <GitHubIntroResource /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
