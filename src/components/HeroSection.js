import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import backgroundImage from '../img/herobackground.jpg';

function HeroSection({heroContent}) {
  return(
    <Paper 
      sx={{
        position: 'relative',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'centre',
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      />
      <Grid container>
        <Grid item md={6} sm={9} xs={11}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="h2" color="inherit" gutterBottom>
              {heroContent.title}
            </Typography>
            {/*<Typography variant="h5" color="inherit" paragraph>
              {heroContent.content}
            </Typography>*/}
            {heroContent.content.map(paragraph => 
            <Typography variant='body1'>{paragraph}</Typography>)}
            <Link variant="subtitle1" href="#">              
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    
  );
}

export default HeroSection;