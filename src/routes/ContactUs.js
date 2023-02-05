import ContactUsCard from "../components/ContactUsCard";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WebIcon from '@mui/icons-material/Web';
import { Container } from "@mui/system";

const DATA = {
  title: 'Contact Equal Access Funding',
  rows: [
    {
      contactType: 'ACN: 156 554 255',
      icon: AccountBalanceIcon,
    },
    {
      contactType: 'Level 1, 25 Burwood Road Hawthorn VIC 3122',
      icon: BusinessCenterIcon,
    },
    {
      contactType: 'P.O. Box 13320 Law Courts Melbourne VIC 8010',
      icon: LocalShippingIcon,
    },
    {
      contactType: '03 9190 8972',
      icon: PhoneIcon,
    },
    {
      contactType: 'info@eafunding.com.au',
      icon: MailIcon,
    },
    {
      contactType: 'https://www.eafunding.com',
      icon: WebIcon,
    },
  ]
}

function ContactUs() {
  return(
    <div>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 5,
      }}>
        <ContactUsCard title={DATA.title} contactRows={DATA.rows} />
      </Container>
    </div>
  )
}

export default ContactUs;