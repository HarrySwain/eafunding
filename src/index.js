import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css';
import App from './routes/App';
import HowItWorks from './routes/HowItWorks';
import ContactUs from './routes/ContactUs';
import FAQ from './routes/FAQ';
import OurBusiness from './routes/OurBusiness';
import reportWebVitals from './reportWebVitals';
import Privacy from './routes/Privacy';
import { Layout } from './layouts/layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/our_business",
    element: <OurBusiness />,
  },
  {
    path: "/how_it_works",
    element: <HowItWorks />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />
  },

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
