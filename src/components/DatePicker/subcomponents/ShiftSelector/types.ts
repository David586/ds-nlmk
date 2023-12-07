export interface ShiftSelectorProps {
  value?: number;
  disabled?: boolean;
  shiftLength?: 2 | 3;
  onChange: (value: number) => void;
}
