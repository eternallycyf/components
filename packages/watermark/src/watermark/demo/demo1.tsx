import { Watermark } from '@ims-view/watermark';

export default function Page() {
  return (
    <>
      <Watermark
        content={['测试水印', '水印']}
        // gap={[0, 0]}
        // offset={[50, 100]}
        // fontStyle={{
        //     color: 'green'
        // }}
      >
        <div style={{ height: 800 }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas
            in rem ipsam ut nesciunt asperiores dignissimos recusandae minus, eaque, harum
            exercitationem esse sapiente? Eveniet, id provident!
          </p>
        </div>
      </Watermark>
    </>
  );
}
