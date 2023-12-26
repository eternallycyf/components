import React from 'react';

import { PageLoading } from '@ims-view/page-loading';

const Loading = () => {
  return (
    <div style={{ height: 300 }}>
      <PageLoading progress={false} id={'without-progress'} />
    </div>
  );
};

export default Loading;
