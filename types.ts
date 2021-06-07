export type DenoConfig = {
  stroke: string;
  fill: string;
  width: number;
  height: number;
};

export type ValueType = string | number;

export interface Prop<T extends ValueType> {
  name: string;
  inputType: string;
  val: T;
  onPropUpdated: (val: T) => void;
  range?: Range;
}

export interface Range {
  min: number;
  max: number;
  step: number;
}
