import { LazyLoad } from '@ims-view/lazyload';
import React from 'react';

import img1 from './origin.png';

const LazyTest = React.lazy(() => import('./Test'));

export default function Page() {
  return (
    <div>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad
        placeholder={<div>loading...</div>}
        onContentVisible={() => {
          console.log('comp visible');
        }}
      >
        {/* <img src={img1}/> */}
        <LazyTest />
      </LazyLoad>
      <LazyLoad
        placeholder={<div>loading...</div>}
        offset={300}
        onContentVisible={() => {
          console.log('img visible');
        }}
      >
        <img src={img1} />
      </LazyLoad>
    </div>
  );
}
