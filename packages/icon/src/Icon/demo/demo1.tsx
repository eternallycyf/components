import { createFrontIconfont, IconAdd, IconEmail } from '@ims-view/icon';

const IconFont = createFrontIconfont('//at.alicdn.com/t/font_2576028_2j2mjmxtn1m.js');

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <IconAdd spin size="12px"></IconAdd>
      <IconEmail></IconEmail>
      <IconEmail style={{ color: 'blue', fontSize: '50px' }}></IconEmail>
      <IconFont type="toutiao-pinglun" fill="blue" size="16px" />
    </div>
  );
}

export default App;
