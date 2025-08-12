
export type ButtonType = 'num' | 'op' | 'func' | 'clear' | 'eq' | 'const';

export interface ButtonConfig {
  value: string;
  type: ButtonType;
  span?: number;
}
