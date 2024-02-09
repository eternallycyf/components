import { Calendar } from '@ims-view/calendar';
import { act, render, waitFor } from '@testing-library/react';
import React from 'react';

test('Calendar', async () => {
  const { container } = render(<Calendar locale="zh-CN" />);
  const calendar = container.querySelector('.calendar-header-btn');

  await waitFor(
    () => {
      expect(calendar.textContent).toMatch(/今天/i);
    },
    { timeout: 3000 },
  );
});
