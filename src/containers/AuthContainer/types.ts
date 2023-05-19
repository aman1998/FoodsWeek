export enum EAuthTypes {
  signin = "signin",
  signup = "signup",
  reset = "reset",
}

export interface ILoginControllerProps {
  type: EAuthTypes;
  setType: (value: EAuthTypes) => void;
}
