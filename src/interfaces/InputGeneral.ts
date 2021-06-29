import { CreateInput } from "../classes/Inputs";

export interface InputsGeneral {
     labelText: string;
     tagName: string;
     type?: string;
     id?: string;
     className?: string;
     placeholder?: string;
}

export interface formPropsStart {
  labelSelect: string[];
  selectID: string[];
  optionsText: string[][];
  optionsValue: string[][]; 
}

export interface formProps {
  labelSelect: string[];
  selectID: string[];
  optionsText: string[][];
  optionsValue: string[][];  
  labelInput: string[];
  inputID: string[];
  placeholder: (string | undefined)[];
  types: string[];
}

export interface Select {
    optionsText: string[];
    optionsValue: string[];
    optionsClass?: string;
}


export type MapType1 = Map<string, HTMLSelectElement | HTMLInputElement>;
export type MapType2 = HTMLSelectElement | HTMLInputElement;

export interface InputInter {
  [key: string]: HTMLSelectElement | HTMLInputElement;
}

export interface ObjWithFormVal {
  inputsArray: CreateInput<string[]>[];
    formVersion: string;
    formObj: MapType1;
    createMapObjWithFormValues(): Map<string, HTMLSelectElement | HTMLInputElement>; 
    printMsg(): string;
}


// export interface PrintFormat {
//   printMsg(): string;
// }