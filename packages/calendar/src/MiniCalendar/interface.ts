export interface MiniCalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export interface MiniCalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
