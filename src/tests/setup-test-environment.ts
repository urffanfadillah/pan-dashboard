import '@testing-library/jest-dom/vitest';

// @ts-expect-error: Required for testing environment setup with React 18; See <https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment>.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
