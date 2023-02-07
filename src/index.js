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
import ErrorPage from './error-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#A6CE39',
    },
    secondary: {
      main: '#D8CEF3'
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
        element: <HowItWorks />,
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
        path: "contact_us",
        element: <ContactUs />,
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
