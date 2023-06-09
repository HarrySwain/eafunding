import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqAccordian( data ) {
  return (
    <div>
      {data.data.map(questionAndAnswer => (
        <Accordion key={questionAndAnswer.question}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant='h6'>{questionAndAnswer.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              {questionAndAnswer.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}