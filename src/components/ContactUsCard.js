import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography} from "@mui/material";

export default function ContactUsCard({title, contactRows}) {
  console.log(contactRows)
  return(
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav>
        <List>
          <Typography variant="h4">{title}</Typography>
          {contactRows.map(row => (
            <ListItem disablePadding key={row.contactType}>
              <ListItemButton>
                <ListItemIcon>
                  <row.icon />
                </ListItemIcon>
                <ListItemText primary={row.contactType}/>
              </ListItemButton>
            </ListItem>
          ))}          
        </List>
      </nav>
      <Divider />
    </Box>
  )
}