interface Options {
  title: string;
  value: string;
}

export interface Form {
  formName: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  value: string | undefined;
  isAction: boolean;
  isHidden: boolean;
  options: Options[] | [];
  callbackUrl?: string | undefined;
}
