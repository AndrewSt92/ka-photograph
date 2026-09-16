import { createMemoryRouter, Outlet, RouterProvider } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

import routesConfig from '../routesConfig';

// Mock pages
jest.mock('@/pages', () => ({
  Home: () => <div data-testid="home-page">Home</div>,
  Services: () => <div data-testid="services-page">Services</div>,
  ServiceDetails: () => <div data-testid="service-details-page">ServiceDetails</div>,
  Gallery: () => <div data-testid="gallery-page">Gallery</div>,
}));

jest.mock('@/pages/Contacts', () => () => <div data-testid="contacts-page">Contacts</div>);
jest.mock('@/pages/Terms', () => () => <div data-testid="terms-page">Terms</div>);
jest.mock('@/pages/NotFound', () => () => <div data-testid="not-found-page">NotFound</div>);

// Mock components – Layout must render <Outlet />
jest.mock('@/components', () => ({
  Layout: () => (
    <div data-testid="layout">
      <Outlet />
    </div>
  ),
  Loader: () => <div data-testid="loader">Loading...</div>,
}));

// Mock hooks
jest.mock('@/hooks', () => ({
  useCurrentUser: jest.fn(),
}));

// Mock config
jest.mock('@/config', () => ({
  ROUTES: {
    HOME: '/',
    SERVICES: '/services',
    SERVICE_DETAILS: '/services/:type',
    CONTACTS: '/contacts',
    TERMS: '/terms',
    GALLERY: '/gallery',
  },
}));

const renderWithRouter = (initialEntries = ['/']) => {
  const router = createMemoryRouter(routesConfig, { initialEntries });
  return render(<RouterProvider router={router} />);
};

describe('AppRoutes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Home page at "/"', () => {
    renderWithRouter(['/']);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders Services page at "/services"', () => {
    renderWithRouter(['/services']);
    expect(screen.getByTestId('services-page')).toBeInTheDocument();
  });

  it('renders ServiceDetails page at "/services/wedding"', () => {
    renderWithRouter(['/services/wedding']);
    expect(screen.getByTestId('service-details-page')).toBeInTheDocument();
  });

  it('renders Contacts page at "/contacts"', async () => {
    renderWithRouter(['/contacts']);
    await waitFor(() => {
      expect(screen.getByTestId('contacts-page')).toBeInTheDocument();
    });
  });

  it('renders Terms page at "/terms"', async () => {
    renderWithRouter(['/terms']);
    await waitFor(() => {
      expect(screen.getByTestId('terms-page')).toBeInTheDocument();
    });
  });

  it('renders Gallery page at "/gallery"', () => {
    renderWithRouter(['/gallery']);
    expect(screen.getByTestId('gallery-page')).toBeInTheDocument();
  });

  it('renders NotFound page for unknown routes', async () => {
    renderWithRouter(['/unknown-route']);
    await waitFor(() => {
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
  });
});
