import { render } from '@testing-library/react';

import { Icon } from '@ims-view/icon';
import React from 'react';

test('Icon', () => {
  const { container } = render(<Icon />);

  expect(container).toMatchSnapshot();
});
