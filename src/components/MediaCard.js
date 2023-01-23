import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({feature}) {
  console.log(feature.image);
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 4}}>
      {/*<CardMedia
        sx={{ height: 140 }}
        image={feature.image}
        title={feature.title}
      />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {feature.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {feature.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}