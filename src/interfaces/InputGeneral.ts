import { CreateInput } from "../classes/Inputs";

export interface FormProps {
  labelSelect: string[];
  selectID: string[];
  optionsText: string[][];
  optionsValue: string[][];  
  labelInput?: string[];
  inputID?: string[];
  placeholder?: (string | undefined)[];
  types?: string[];
}

export interface InputsGeneral {
  labelText: string;
  tagName: string;
  type?: string;
  id?: string;
  className?: string;
  placeholder?: string;
}

export type MapType1 = Map<string, HTMLSelectElement | HTMLInputElement>;
export type MapType2 = HTMLSelectElement | HTMLInputElement;

export interface ObjWithFormVal {
  inputsArray: CreateInput<string[]>[];
    formVersion: string;
    formObj: MapType1;
    createMapObjWithFormValues(): Map<string, HTMLSelectElement | HTMLInputElement>; 
    printMsg(): string;
}