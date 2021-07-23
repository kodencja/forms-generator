import { CreateInput } from "../classes/Inputs";

// interface for 'inputProps' object used to keep values for all possible inputs, not just for a particular one, therefore all values are put in an array []
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

// interface for an abstract class "InputClass"
export interface InputsGeneral {
  labelText: string;
  tagName: string;
  type?: string;
  id?: string;
  className?: string;
  placeholder?: string;
}

// types for interface "ObjWithFormVal" and for Map Object generated in a class "ObjectWithFormValues" in FormValues.ts file
export type MapType = Map<string, HTMLSelectElement | HTMLInputElement>;
export type SelectOrInput = HTMLSelectElement | HTMLInputElement;


// interface for a class "ObjectWithFormValues" in FormValues.ts file
export interface ObjWithFormVal {
  inputsArray: CreateInput<string[]>[];
  formVersion: string;
  formObj: MapType;
  createMapObjWithFormValues(): Map<
    string,
    SelectOrInput
  >;
  printMsg(): string;
}

export interface GetLetters {
  arrOfLetters: string[];
  requiredOne: string
}

export interface Balls {
  width: number;
  height: number;
  noOfBalls: number;
  className: string;
  wrappBalls?:HTMLDivElement;
  // wrappBalls:HTMLDivElement | null;
}
