export interface IField {
  name: string;
  isRequired?: boolean;
}

export interface IConfigItem {
  fields?: Array<IField>;
}
