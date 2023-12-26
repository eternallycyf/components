import { render } from '@testing-library/react';

import { PageLoading } from '@ims-view/page-loading';
import React from 'react';

test('PageLoading', () => {
  const { container } = render(<PageLoading />);

  expect(container).toMatchSnapshot();
});
