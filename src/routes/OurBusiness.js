import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DATA = {
  'content': [
      'EAF provides two funding options. Business-to business (directly with the firm) and Consumer Credit (funding clients of approved law firms). ',
      'Our business-to-business (B2B) funding solution enables law firms to fund working capital; primarily disbursement fee invoices. The invoices are typically paid by EAF on behalf of the firm. The B2B solution can also be used for other approved purposes. ',
      'EAF is also an Australian Consumer Credit provider and works with approved law firms to provide their clients with a funding solution to pay for disbursement costs associated with their personal injury claim. ',
      'EAF can only accept Consumer Credit applications from clients that are engaging law firms that have been pre-approved by EAF. EAF enters into a non-recourse credit contract with the individual to fund the third-party disbursements costs that their legal services provider does not cover. ',
      'The borrower provides EAF with an irrevocable instruction directing their lawyer to pay EAF as a priority over any other payment once their claim is successfully settled. ',
      'Individual credit contract applications are not assessed against a borrower’s income or financial assets. The loans are secured against the borrowers expected personal injury claim settlement. In the event that a client loses their legal claim, EAF has no right of recourse against the borrower except in certain circumstances). ',
      'Each application has a maximum limit and the solicitor handling the matter instructs EAF on progressive drawdowns over the life of the matter. ',
      'When the legal claim is resolved, the lawyer receives the client’s settlement monies directly to its trust account. The lawyer pays EAF on behalf of the client from their account prior to any other distribution of funds.'
  ]
}

const DATATWO ={
  'subheading': 'Our Business',
  'heading': 'EAF provides two funding options. ',
  'heroparagraph': [
    'Business-to-Business (directly with the firm) and Consumer Credit (funding clients of approved law firms). Our business-to-business (B2B) funding solution enables law firms to fund working capital; primarily disbursement fee invoices. The invoices are typically paid by EAF on behalf of the firm. ',
    'The B2B solution can also be used for other approved purposes. EAF is also an Australian Consumer Credit provider and works with approved law firms to provide their clients with a funding solution to pay for disbursement costs associated with their personal injury claim. ',
    ],
  'listcontent': [
    {
      'icon': CheckCircleIcon,
      'content': 'EAF can only accept Consumer Credit applications from clients that are engaging law firms that have been pre-approved by EAF. EAF enters into a non-recourse credit contract with the individual to fund the third-party disbursements costs that their legal services provider does not cover. ',
    },
    {
      'icon': CheckCircleIcon,
      'content': 'The borrower provides EAF with an irrevocable instruction directing their lawyer to pay EAF as a priority over any other payment once their claim is successfully settled. ',
    },
    {
      'icon': CheckCircleIcon,
      'content': 'Individual credit contract applications are not assessed against a borrower’s income or financial assets. The loans are secured against the borrowers expected personal injury claim settlement. In the event that a client loses their legal claim, EAF has no right of recourse against the borrower except in certain circumstances). ',
    },
    {
      'icon': CheckCircleIcon,
      'content': 'Each application has a maximum limit and the solicitor handling the matter instructs EAF on progressive drawdowns over the life of the matter. ',
    },
    {
      'icon': CheckCircleIcon,
      'content': 'When the legal claim is resolved, the lawyer receives the client’s settlement monies directly to its trust account. The lawyer pays EAF on behalf of the client from their account prior to any other distribution of funds.'
    }
  ]
}

export default function OurBusiness() {
  
  return(
    <div>
      <Container sx={{paddingY: 10}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" gutterBottom>{DATATWO.subheading}</Typography>
          <Typography variant="h2" gutterBottom>{DATATWO.heading}</Typography>
          <Typography variant="body1" gutterBottom>{DATATWO.heroparagraph}</Typography>
          <Box>
            <List>
              {DATATWO.listcontent.map(listitem => 
                <ListItem>
                  <ListItemIcon><listitem.icon sx={{ color: 'primary.main' }}/></ListItemIcon>
                  <ListItemText>{listitem.content}</ListItemText>
                </ListItem>
              )}
            </List>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

