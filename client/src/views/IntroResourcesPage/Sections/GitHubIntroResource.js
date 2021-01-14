import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";

import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import { Link } from "react-router-dom";

// @material-ui/icons
// import GroupIcon from '@material-ui/icons/Group';
// import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import CodeIcon from '@material-ui/icons/Code';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/resourceStyle.js";
import CardBody from "components/Card/CardBody";

// uses babel to load contents of file
const markdown = raw('../../../data/IntroResources/github-intro.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const useStyles = makeStyles(styles);

export default function GitHubIntroResource() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <ReactMarkdown
                source={markdown}
                renderers={{
                  Link: LinkRenderer,
                }}
                escapeHtml={false}
              />
            </CardBody>
          </Card>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}
