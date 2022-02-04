import * as React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Accordion, AccordionSummary, AccordionDetails } from "./homeStyles";
import JAVASCRIPT_CONFIG from "/src/config/javascriptConfig";
import Link from "/src/Link";
import REACT_JS_CONFIG from "../../config/reactJsConfig";

const mapper = (config) =>
  config.map((ele) => (
    <Grid px={2} >
      <Typography variant="SubtitleSmall">{ele.heading}</Typography>
      <Grid container py={4}>
        {ele.children.map((child) => (
          <Grid item xs={12} sm={6} md={4} lg={3} py={1} display="flex" alignItems="center">
            <Typography variant="TitleExtraSmallNormal" style={{display: 'list-item' }}></Typography>
            <Link
              href={ele.pathname + "#" + child.id}
              key={ele.pathname + "#" + child.id}
            >
             <Typography variant="TitleExtraSmallNormal" style={{color: '#47ACFF'}}>{child.title}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  ));

const Home = () => {
  return (
    <Container sx={{ py: 5}}>
      <Box mb={5}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="javascript"
            id="javascript"
          >
            <Typography>Javascript</Typography>
          </AccordionSummary>
          <AccordionDetails>{mapper(JAVASCRIPT_CONFIG)}</AccordionDetails>
        </Accordion>
      </Box>
      <Box mb={5}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="react"
            id="react"
          >
            <Typography>React</Typography>
          </AccordionSummary>
          <AccordionDetails>{mapper(REACT_JS_CONFIG)}</AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Home;
