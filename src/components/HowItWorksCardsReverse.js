import { Card, Box, Typography, CardMedia, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";

export default function HowItWorksCardsReverse({DATA}) {
  let orderVariable = 0;

  if (useMediaQuery('(max-width:1147px)')) {
    orderVariable = 1;
  } else {
    orderVariable = 0;
  }
  
  return(
    <Card elevation={0} sx={{ width: '100%', 
                              display: 'flex', 
                              flexWrap: 'wrap',
                              alignItems: 'center', 
                              justifyContent: 'space-between',
                              py: 3,
                            }}>
      <CardMedia
        component="img"
        sx={{
          maxWidth: 400,
          minWidth: 300,
          order: orderVariable,
        }}
        image={DATA.image}
        alt=""
      />
      <Box sx={{ maxWidth: 700, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h3">{DATA.subheading}</Typography>
        <Typography variant="h2">{DATA.heading}</Typography>
        <List>
          {DATA.listwithbuttons.map(item =>
            <ListItem disablePadding key={item.step}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.step} />
            </ListItem>
          )}
        </List>
      </Box>
    </Card>
  )
}