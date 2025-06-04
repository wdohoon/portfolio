import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

// Mock heavy libraries that rely on browser APIs
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: any) => <canvas data-testid="canvas">{children}</canvas>,
  useFrame: () => {},
}));

jest.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
}));

jest.mock('react-scroll-parallax', () => ({
  ParallaxProvider: ({ children }: any) => <div>{children}</div>,
  Parallax: ({ children }: any) => <div>{children}</div>,
}));

// Provide IntersectionObserver
beforeAll(() => {
  class MockObserver {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  }
  (window as any).IntersectionObserver = MockObserver as any;
});

describe('Main page rendering', () => {
  it('renders hero section and canvas without crashing', () => {
    render(<Page />);
    expect(screen.getByText('안녕하세요, 원도훈입니다.')).toBeInTheDocument();
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });
});
