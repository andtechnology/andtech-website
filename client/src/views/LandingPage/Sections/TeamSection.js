import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import katrina from "assets/img/faces/Katrina_Headshot.png";
import chris from "assets/img/faces/Chris_Headshot.png";
import ramin from "assets/img/faces/Ramin_Headshot.png";
import bilal from "assets/img/faces/Bilal_Headshot.png";
import kristina from "assets/img/faces/Kristina_Headshot.png";
import liam from "assets/img/faces/Liam_Headshot.png";
import maeva from "assets/img/faces/Maeva_Headshot.png";
import richmond from "assets/img/faces/Richmond_Headshot.png";
import ritik from "assets/img/faces/Ritik_Headshot.png";
import generic from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={katrina} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Katrina Delos Reyes
                <br />
                <small className={classes.smallTitle}>Founder and Technical Director</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  <a href="https://katrinadelosreyes.com">Katrina </a>
                  is a technology strategist working Digital Transformation
                  at a major government defense contracting company with a passion for
                  teaching! She graduated with a B.S. in Mathematics and Computer Science
                  from the University of Maryland, College Park.
                  
                  She has always been passionate about education and cannot wait to spread
                  the intersection of tech &amp; other disciplines to the next generation
                  of tech innovators.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={chris} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Chris Pondoc
                <br />
                <small className={classes.smallTitle}>Strategic Advisor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  <a href="http://chrispondoc.com/">Chris</a> is a freshman at
                  Stanford University. He started his own technology company, Vita
                  EDO, which connected hundreds of students to employers and jobs.
                  He has also conducted research at the National Cancer Institute
                  and recently published a paper on deep learning and histopathology.
                  Chris is a Teacher and Curriculum Developer at a local Test Prep Center.
                  For &amp;TECH, he develops content strategy, helps support technological
                  needs and supports every part of the business lifecycle.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ramin} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ramin Rafizadeh
                <br />
                <small className={classes.smallTitle}>Engineering Lead</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Ramin is a Systems Engineer at NASA's Jet Propulsion Laboratory
                  with a passion for unmanned robotic space exploration. Currently, he's
                  working on the Europa Clipper mission intended to conduct detailed
                  reconnaissance of Jupiter's moon. Additionally, he's serving as a
                  co-investigator on the Lunar Crater Radio Telescope (LCRT) study.
                  This project proposes to robotically suspend a radio telescope in a
                  crater on the far side of the Moon. He graduated with a B.S. in Aerospace
                  Engineering from the University of Maryland, College Park, and plans to
                  pursue an M.S. in Astronautical Engineering from the University of Southern California.
                  For &amp;TECH, he leads the engineering development of the various challenges, contributing
                  his expertise in robotics and hardware.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={richmond} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Richmond Akondo
                <br />
                <small className={classes.smallTitle}>Tech Dev &amp; Outreach</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Richmond is a senior at Tuscarora High School and is going to major in
                  Computer Science in college. He is interested in software and business
                  and is looking forward to applying them to &amp;TECH.
                  He is working with the tech development team and helps with community
                  outreach to connect with sponsors.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={bilal} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Bilal Aslam
                <br />
                <small className={classes.smallTitle}>Strategic Analyst &amp; Outreach</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Bilal is a senior at Tuscarora High School. He plans to study Political Science
                  and Economics in College. He is passionate about business and tech, and wishes
                  to combine the two at &amp;TECH.
                  For &amp;TECH, he is involved in community outreach, and also helps develop
                  strategies for reaching &amp;TECH's goal of promoting technology within the community.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={kristina} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kristina Delos Reyes
                <br />
                <small className={classes.smallTitle}>Communications &amp; Social Media Management</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Kristina is a senior at Tuscarora High School. She plans to study Biomolecular Engineering
                  and Performing Arts in college. She is an avid participant in both the arts and STEM, and
                  hopes to connect the two interests with &amp;TECH.
                  For &amp;TECH, she manages comms, as well as creates content for the &amp;TECH social media pages.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ritik} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ritik Gupta
                <br />
                <small className={classes.smallTitle}>Web Developer &amp; Tech Researcher</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Ritik is a senior at Tuscarora High School and the president of the Computer Science
                  Honor Society. He is looking forward to majoring in Computer Science in college.
                  He is enthusiastic about technology, sports, and the arts. He wishes to combine the
                  trifecta into making &amp;TECH the best it can be and help spread awareness to the community.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={liam} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Liam Jennings
                <br />
                <small className={classes.smallTitle}>Outreach &amp; Tech Dev</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Liam is a senior at Tuscarora High School. He looks forward to studying Data
                  Science and/or Mathematics and Computer Science in college. His passions are
                  sports and STEM, which he hopes to apply and connect at &amp;TECH. He is part
                  of the tech development and research team, as well as the outreach team.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={generic} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Riley Jennings
                <br />
                <small className={classes.smallTitle}>Communications &amp; Project Advisor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Riley is a senior at Tuscarora High School. She is interested in pursuing
                  either Neuroscience or Music Therapy in college. She is looking forward
                  to bringing her passion of music and science to &amp;TECH.
                  She is involved in project development, social media content as well as outreach for &amp;TECH. 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={maeva} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Maeva Tchouaffe
                <br />
                <small className={classes.smallTitle}>Comms &amp; Tech Dev &amp; Web Dev</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Maeva is a senior at Tuscarora High School. She plans on majoring in Computer
                  Science and also getting minor degrees in music and psychology. She is eager
                  to be a part of &amp;TECH.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
