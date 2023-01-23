import { Container } from '@mui/material';
import * as React from 'react';
import MediaCard from './MediaCard';

function FeatureGrid( features ) {
  return(
    <Container sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    }}>
      {features.features.map((feature, index) => (
        <MediaCard key={index} feature={feature}
        />
      ))}
    </Container>
  );
}

export default FeatureGrid;