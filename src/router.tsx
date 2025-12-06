import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/index';
import Home from './routes/home';
import ROUTES from './common/routes';
import Gallery from './routes/children/gallery'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Details from './routes/children/details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loader as detailsLoader } from './components/AntiqueDetails/AntiqueDetails'

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Home />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Gallery /> },
      {
        path: `${ROUTES.antique}/:id`,
        element: <Details/>,
        loader: detailsLoader
      }
    ]
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)

