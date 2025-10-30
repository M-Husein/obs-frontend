import '@testing-library/jest-dom';

declare global {
  namespace Vi {
    interface JestMatchers<T = unknown> extends jest.Matchers<T> {}
  }
}
