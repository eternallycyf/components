export interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
