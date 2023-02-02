import { Card, Box, Typography, CardMedia, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

export default function HowItWorksCards({DATA}) {

  return(
    <Card elevation={0} sx={{ width: '100%', 
                              display: 'flex', 
                              flexWrap: 'wrap', 
                              alignItems: 'center', 
                              justifyContent: 'space-between', 
                              margin: 3,
                            }}>
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
      <CardMedia
        component="img"
        sx={{
          maxWidth: 400,
          minWidth: 300
        }}
        image={DATA.image}
        alt=""
      />
    </Card>
  )
}