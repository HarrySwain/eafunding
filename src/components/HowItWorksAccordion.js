import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, ListItemText } from '@mui/material';

export default function HowItWorksAccordion({data}) {
  return (
    <div>
      {data.map(questionAndAnswer => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{questionAndAnswer.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
            {questionAndAnswer.answers.map(answer =>
              <ListItem disablePadding key={answer.answer}>
                <ListItemText primary={answer.answer} />
              </ListItem>
            )}
          </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}