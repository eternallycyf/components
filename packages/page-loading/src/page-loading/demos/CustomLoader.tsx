import { PageLoading } from '@ims-view/page-loading';
import React from 'react';

const Loading = () => {
  return (
    <div style={{ height: 300 }}>
      <PageLoading loader={<div>loading...</div>} id={'custom'} />
    </div>
  );
};

export default Loading;
