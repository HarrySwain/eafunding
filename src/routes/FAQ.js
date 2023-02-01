import { Typography } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Container } from "@mui/material";
import FaqAccordian from "../components/FaqAccordian";

const DATA = {
  title: 'Frequently Asked Questions',
  rows: [
    {
      "question": "I am a law firm and would like to know more about EAF’s funding solutions?",
      "answer": "Please email Alistair Swain at alistair.swain@eafunding.com.au. Alistair is the founding Director of the business and would love to discuss options to assist your business."
      },
      {
      "question": "How Do I Apply for a Consumer Credit facility?",
      "answer": "Your Solicitor will be able to provide you with all the necessary documentation to apply for a disbursement fee loan with Equal Access Funding. You are encouraged to seek independent advice. Your Solicitor can assist with completing and lodging the application. You are also required to provide photo identification from a government source (eg Drivers Licence, Passport, 18+ card). If this is not possible, alternative arrangements can be made, you will need to consult with Equal Access or your Solicitor."
      },
      {
      "question": "When will I know if my application has been approved?",
      "answer": "It typically takes 2 work days to process an application. Once your application is approved you will be notified via your lawyer."
      },
      {
      "question": "What costs are associated with an EAF disbursement loan?",
      "answer": "All interest charges and fees are detailed in the Credit Contract that you will need to read, understand and sign before EAF will approve any loan to you. Similar to other loans, EAF charges each client a range of fees, typically these include; a loan approval fee, a draw down fee each time funds are advanced on the loan and an annual review fee."
      },
      {
      "question": "What are the Interest charges?",
      "answer": "As funds are advanced on a needs basis, interest is only charged on those funds that have been drawn down. The interest fees are detailed in your credit contract."
      },
      {
      "question": "Once the application has been approved, when do I receive the funds?",
      "answer": "Your lawyer will determine when funds are required to be drawn down on the loan. They will instruct EAF to advance funds directly to their trust account on your behalf. They then make a direct payment to the third party that has provided the disbursement service. You do not receive access to the loan funds at any stage."
      },
      {
      "question": "How do I repay the loan?",
      "answer": "Once your legal matter has been resolved, your settlement monies will be deposited into your Solicitor’s trust account. Your solicitor will then arrange for the repayment of your EAF loan on your behalf, as per your instructions."
      },
  ]
}
function FAQ() {
  return(
    <div>
      <Navbar />
      <Container sx={{padding: 5 }} maxWidth='md' >
        <Typography variant="h2" textAlign='center' sx={{ pb: 5 }} >{DATA.title}</Typography>
        <FaqAccordian data={DATA.rows} />
      </Container>
    </div>
    
  )
}

export default FAQ;