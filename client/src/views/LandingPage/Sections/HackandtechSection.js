import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function HackandtechSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>Hack&amp;TECH 2021</h2>
          <h4 className={classes.description}>
            Be a part of Frederick, MD's very first high school-focused hackathon!
          </h4>
          <Button
            color="primary"
            size="lg"
            round
            fullWidth
            href={process.env.PUBLIC_URL + '/hackandtech'}
            target="_blank"
          >
            Register here
          </Button>
          <form>
            {/* <GridContainer justify="center"> */}
              {/* <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              /> */}
              {/* <GridItem xs={12}>
                <Button color="primary" href='mailto:hello@andtechnology.org'>Send Message</Button>
              </GridItem>
            </GridContainer> */}
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
