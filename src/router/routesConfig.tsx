import { lazy, Suspense } from 'react';

import { Layout, Loader } from '@/components';
import { ROUTES } from '@/config';
import { Gallery, Home, ServiceDetails, Services } from '@/pages';

const Contacts = lazy(() => import('@/pages/Contacts'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routesConfig = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.SERVICE_DETAILS, element: <ServiceDetails /> },
      { path: ROUTES.SERVICES, element: <Services /> },
      {
        path: ROUTES.CONTACTS,
        element: (
          <Suspense fallback={<Loader fullScreen />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: ROUTES.TERMS,
        element: (
          <Suspense fallback={<Loader fullScreen />}>
            <Terms />
          </Suspense>
        ),
      },
      { path: ROUTES.GALLERY, element: <Gallery /> },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export default routesConfig;
