import { render } from '@testing-library/react';

import ReactPaymentForm from './react-payment-form';

describe('ReactPaymentForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPaymentForm />);
    expect(baseElement).toBeTruthy();
  });
});
