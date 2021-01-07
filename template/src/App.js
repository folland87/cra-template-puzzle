import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeContextProvider, ToastContextProvider, Spinner } from '@folland87/puzzle';
import GlobalStyle from './globalStyle';

// Lazy load pages to optimize bundle.
const Home = lazy(() => import('./pages/Home'));

export default () => (
  <Router>
    <ThemeContextProvider>
      <GlobalStyle />
      <ToastContextProvider position="top-center">
        <Suspense fallback={<Spinner size={200} />}>
          <Route exact path="/" component={Home} />
        </Suspense>
      </ToastContextProvider>
    </ThemeContextProvider>
  </Router>
);
