import { Popover } from '@ims-view/popover';

export default function App() {
  const popoverContent = (
    <div>
      当目标元素有进一步的描述和相关操作时，
      <br />
      可以收纳到卡片中，根据用户的操作行为进行展现
    </div>
  );

  return (
    <div>
      <Popover
        content={popoverContent}
        placement="bottom"
        trigger="click"
        style={{ margin: '200px' }}
      >
        <button type="button">点我点我</button>
      </Popover>
    </div>
  );
}
