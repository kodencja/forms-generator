import { FormProps } from "../interfaces/InputGeneral";


// 'inputProps' is an object with initialized values for all possible inputs, not just for a particular one, therefore all initialized values are put in an array []
let inputProps: FormProps;
inputProps = {
  labelSelect: [],
  selectID: [],
  optionsText: [],
  optionsValue: [],
  labelInput: [],
  inputID: [],
  placeholder: [],
  types: [],
};

export {inputProps}