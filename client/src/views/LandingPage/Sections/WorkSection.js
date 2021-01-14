import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>Get in touch!</h2>
          <h4 className={classes.description}>
            If you have any questions about &amp;TECH or want to get involved, <a href='mailto:hello@andtechnology.org'>shoot us an email
            </a> or <a href="https://discord.gg/XMkyvbyNT9">join our Discord Server</a>
          </h4>
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
