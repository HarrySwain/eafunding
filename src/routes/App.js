import './App.css';
import HeroSection from '../components/HeroSection.js';
import FeatureGrid from '../components/FeatureGrid.js';

const heroContent = {
  image: '../img/herobackground.jpg',
  title: 'Welcome to Equal Access Funding',
  content: [
    'Equal Access Funding Pty Ltd (EAF) is a specialist company that provides funding solutions for legal services businesses. ',
    'Founded in 2012, EAF assists people and businesses pursuing personal injury claims within the Australian legal system. ',
    'Offering both business-to-business finance solutions for law firms as well as consumer credit facility to clients of approved law firm partners. ',
    'EAF provides funding for many purposes, including out-of-pocket expenses incurred in pursuing legal matters. Costs such as medical reports, valuations, court filing fees, Barristers fees etc. ',
    'EAF holds Australian Credit Licence No. 419612 and is a member of the Australian Financial Complaints Authority.',
  ]}

const features = [
  {
    id: '0',
    title: 'Equal Access Funding',
    content: 'Working hand-in-hand with our law firm partners, EAF ensures that personal injury claims are affordable. Law firms can apply for general, business to business facilities to provide working capital and fund disbursements.Consumers can utilise the EAF consumer credit facility from approved partner law firms. EAF is a licensed credit provider and a member of the Australian Financial Conduct Authority (AFCA).',
    image: '../img/puzzle.jpg',
    link: '/our_business',
  },
  {
    id: '1',
    title: 'Disbursement Fee Funding – Business to Business',
    content: 'A business-to-business credit facility that law firms can use to fund working capital. Typically used by our law firm partners to fund out of pocket disbursement costs such as; medical reports, valuations, expert reports, barrister fees and court filing fees. Please get in touch with EAF to discuss how we can assist. Contact Alistair Swain at alistair.swain@eafunding.com.au',
    image: '../img/handinhand.jpg',
    link: '/how_it_works',
  },
  {
    id: '2',
    title: 'Disbursement Fee Funding – Consumer Credit',
    content: 'An EAF consumer credit facility will cover solicitor approved out of pocket disbursement costs such as; medical reports, valuations, expert reports, barrister fees and court filing fees. With your solicitors’ approval, the client will only have to repay the Equal Access Funding credit facility if your matter is successful.',
    image: '../img/puzzle.jpg',
    link: '/how_it_works',
  },
]

function App() {
  return (
      <div>
        <HeroSection heroContent={heroContent} />
        <FeatureGrid features={features} />
      </div>
  );
}

export default App;
