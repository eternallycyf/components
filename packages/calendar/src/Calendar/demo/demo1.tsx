import { Calendar } from '@ims-view/calendar';

export default function Page() {
  return (
    <Calendar
      locale="en-US"
      dateInnerContent={(value) => {
        return <div style={{ color: 'hotpink' }}>{value.format('YYYY-MM-DD')}</div>;
      }}
    />
  );
}
