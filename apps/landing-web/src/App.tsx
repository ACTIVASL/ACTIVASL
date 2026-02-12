import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { DataDeletion } from './pages/legal/DataDeletion';
import { NotFound } from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const DigitalizationImportancePost = lazy(() =>
  import('./pages/blog/DigitalizationImportancePost').then((module) => ({ default: module.DigitalizationImportancePost })),
);
const BlogIndex = lazy(() =>
  import('./pages/blog/BlogIndex').then((module) => ({ default: module.BlogIndex })),
);
const Programs = lazy(() =>
  import('./pages/Programs').then((module) => ({ default: module.Programs })),
);

import { ViewTransitions } from './components/ui/ViewTransitions';
import { FilmGrain } from './components/ui/FilmGrain';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="app-container relative">
          <FilmGrain />
          <Router>
            <ViewTransitions />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms" element={<TermsOfService />} />
              <Route path="/legal/data-deletion" element={<DataDeletion />} />

              {/* Blog Routes */}
              <Route
                path="/programas"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                    <Programs />
                  </Suspense>
                }
              />
              <Route
                path="/blog"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                    <BlogIndex />
                  </Suspense>
                }
              />
              <Route
                path="/blog/importancia-digitalizacion"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                    <DigitalizationImportancePost />
                  </Suspense>
                }
              />

              {/* Auth Redirects - SEO Friendly */}
              <Route path="/auth/login" element={<AuthRedirect />} />
              <Route path="/dashboard" element={<DashboardRedirect />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

const AuthRedirect = () => {
  window.location.href = 'https://app.activamusicoterapia.com/auth/login';
  return null;
};

const DashboardRedirect = () => {
  window.location.href = 'https://app.activamusicoterapia.com/dashboard';
  return null;
};

export default App;
