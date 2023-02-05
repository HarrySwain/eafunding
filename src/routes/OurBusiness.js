import { CardContent, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

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

function OurBusiness() {
  return(
    <div>
      <Container sx={{padding: 5}}>
        <Paper>
          <CardContent>
            <Typography variant="h1" gutterBottom>
              Our Business
            </Typography>
            {DATA.content.map(paragraph => 
              <Typography variant="body1">{paragraph}</Typography>)}
          </CardContent>
        </Paper>
      </Container>
    </div>
    
  )
}

export default OurBusiness;