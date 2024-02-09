import { render } from '@testing-library/react';

import { Calendar } from '@ims-view/calendar';
import React from 'react';

test('Calendar', () => {
  const { container } = render(<Calendar />);

  expect(container).toMatchSnapshot();
});
