import { render } from '@testing-library/react';

import ReactDemoLib from './react-demo-lib';

describe('ReactDemoLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDemoLib />);
    expect(baseElement).toBeTruthy();
  });
});
