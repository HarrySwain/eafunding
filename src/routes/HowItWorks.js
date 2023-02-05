import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Divider from '@mui/material/Divider';
import HowItWorksCards from "../components/HowItWorksCards";
import HowItWorksCardsReverse from "../components/HowItWorksCardsReverse";
import HowItWorksAccordion from "../components/HowItWorksAccordion";


const CLIENTTYPEA = {
  "subheading": "Law Firms",
  "heading": "Business-to-Business Funding",
  "image": "../images/undraw_business_deal.svg",
  "summary": "",
  "button": "",
  "listwithbuttons": [
    {
      "icon": "",
      "step": "EAF undertakes an initial assessment of the law firm’s requirements and proposes a ‘solution’ that meets the needs of that firm."
    },
    {
      "icon": "",
      "step": "The assessment process is reasonably quick and designed to ensure that our respective roles and responsibilities are clear to both parties."
    },
    {
      "icon": "",
      "step": "Depending on whether the new law firm has access to the key information and reports typically required to establish a facility will determine how quickly we can commence working with the firm."
    },
  ]
}

const CLIENTTYPEB = {
  "subheading": "Approved Legal Partners",
  "heading": "Consumer Credit",
  "image": "../images/undraw_consumer_deal.svg",
  "summary": "",
  "button": "",
  "listwithbuttons": [
    {
      "icon": "",
      "step": "EAF’s Australian Credit Licence places minimum requirements on both EAF and its law firm partners that apply for approval to represent EAF’s consumer credit facility."
    },
    {
      "icon": "",
      "step": "A law firm will need to meet minimum thresholds in a number of administrative and knowledge areas before it is accepted as an Approved Credit Representative of EAF."
    },
    {
      "icon": "",
      "step": "Once an approved credit representative of EAF, your firm can offer clients an EAF credit application to fund approved out-of-pocket expenses associate with the underlying legal matter."
    },
    {
      "icon": "",
      "step": "The Solicitor communicates directly with EAF on behalf of the client and will advise on the amount of credit required and the details of each disbursement. They will also, in some instances, provide EAF with a guarantee."
    },
    {
      "icon": "",
      "step": "EAF does not liaise directly with the client."
    },
  ]
}

const ACCORDION = [
  {
    "question": "The Process",
    "answers": [
      {
        "answer": "Your solicitor must be registered and approved by Equal Access Funding and your solicitor must agree that you have a strong legal claim for compensation. In most cases, EAF requires the solicitor to guarantee the loan."
      },
      {
        "answer": "You need to apply for a credit contract with Equal Access Funding, your Solicitor will provide all the necessary documentation once you have registered and established your claim."
      },
      {
        "answer": "You will also need to provide your Solicitor with legally binding instructions to repay the EAF loan on your behalf from the settlement proceeds (prior to any other distribution of funds)."
      },
      {
        "answer": "Please note that you will also be required to provide certified copies of personal identification. Your lawyer can assist with this."
      },
      {
        "answer": "Upon receipt of the signed documentation, EAF will process your application. If your application is incomplete, EAF will contact you as soon as possible to make further arrangements. Once EAF approves your application, you will be notified along with your lawyer."
      },
      {
        "answer": "Your lawyer will advise you on the amount of credit that you should apply for and will also act on your behalf in regards to drawing down on the loan to fund the third party disbursement fees incurred on your behalf."
      },
      {
        "answer": "Funds are advanced directly from EAF to the legal firms’ trust fund which then pays for the disbursements directly."
      },
      {
        "answer": "The lawyer will advise EAF when the case settles and will co-ordinate the repayment of the loan to EAF before distributing the balance of the monies from your settlement."
      }
    ]
  },
  {
    "question": "The Benefits",
    "answers": [
      {
        "answer": "An EAF Disbursement Funding Loan is designed to suit the circumstances; it is not like a bank loan."
      },
      {
        "answer": "The loan is used to pay for out-of-pocket expenses (disbursement costs) such as; medical reports, valuations, expert reports, barrister fees and court filing fees."
      },
      {
        "answer": "There are no monthly repayments."
      },
      {
        "answer": "You do not need to be in paid employment or have a regular income."
      },
      {
        "answer": "The loan is non-recourse, so if you don’t win your case, you are generally not required to re-pay the loan."
      },
      {
        "answer": "The loan is re-paid directly from your settlement once the matter is resolved."
      },
      {
        "answer": "Loans are only available through law firms that have been pre-approved by EAF. The law firm enters into a direct agreement with EAF guaranteeing the loan amount."
      },
    ]
  },
  {
    "question": "Our Costs",
    "answers": [
      {
        "answer": "Similar to other loans, EAF charges each client a range of fees, including interest on the accrued outstanding funds."
      },
      {
        "answer": "All interest charges and fees are detailed in the Credit Contract that you will need to read, understand and sign before EAF will approve your loan."
      },
      {
        "answer": "Typically, EAF will charge a loan approval fee, a draw down fee each time funds are advanced on the loan and an annual review fee."
      },
      {
        "answer": "As funds are advanced on a needs basis, interest is only charged on those funds that have been drawn down. In some instances, interest might apply to the fees that are also charged to your account."
      },
    ]
  },
]

function HowItWorks() {
  return(
    <>
      <Container>
        <HowItWorksCards DATA={CLIENTTYPEA}/>
        <HowItWorksCardsReverse DATA={CLIENTTYPEB} />
        <Divider />
        <Container sx={{ paddingY: 3 }} maxWidth='md'>
          <Typography variant="h3">What does a consumer need to do to consider an EAF disbursement fee credit facility?</Typography>
          <Typography variant="subtitle1">Read below for details on; the process involved in applying for an EAF loan, the benefits and the costs. <br /> We recommend that you consult with your Solicitor and seek independent financial advice.</Typography>
          <HowItWorksAccordion data={ACCORDION}/>
        </Container>
      </Container>
    </>
    
  )
}

export default HowItWorks;