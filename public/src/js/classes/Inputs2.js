class InputClass {
    constructor(labelText, tagName, type, id, className, value, placeholder) {
        this.labelText = labelText;
        this.tagName = tagName;
        this.type = type;
        this.id = id;
        this.className = className;
        this.value = value;
        this.placeholder = placeholder;
    }
    get valueInp() {
        return this.value;
    }
}
export class GenereteInputProps extends InputClass {
    // export class GenereteInput<T> extends InputClass<T> {
    constructor(labelText, tagName, type, id, className, value, placeholder
    // wrappClassName?: string,
    // wrappTagName?: string
    ) {
        super(labelText, tagName, type, id, className, value, placeholder
        // wrappClassName,
        // wrappTagName
        );
    }
}
// export class GenereteSelectProps<T extends string | string[]> extends InputClass<T> {
export class GenereteSelectProps extends InputClass {
    constructor(labelText, tagName, optionsText, optionsValue, optionsClass, type, id, className, value, placeholder) {
        super(labelText, tagName, type, id, className, value, placeholder);
        this.optionsText = optionsText;
        this.optionsValue = optionsValue;
        this.optionsClass = optionsClass;
    }
    get optionsVal() {
        return this.optionsValue;
    }
}
// type objSelect = 
// const obj1: {GenereteSelectProps<T extends string[]>} = {
// }
// export class CreateSelectInput<T extends string[]> extends GenereteSelectProps<T> {
export class CreateSelectInput {
    constructor(selectObj, 
    // public selectObj: {},
    options = [], wrappClassName, wrappTagName, wrapp) {
        this.selectObj = selectObj;
        this.options = options;
        this.wrappClassName = wrappClassName;
        this.wrappTagName = wrappTagName;
        this.wrapp = wrapp;
    }
    createInputSelect() {
        const select = document.createElement(this.selectObj.tagName);
        const label = document.createElement("label");
        // const option = 
        // let wrapp, options: HTMLElement[] = [];
        label.innerHTML = this.selectObj.labelText;
        // input.setAttribute("type", this.type);
        for (let i = 0; i < this.selectObj.optionsText.length; i++) {
            this.options[i] = document.createElement("option");
            this.options[i].setAttribute("value", this.selectObj.optionsValue[i]);
            this.options[i].innerHTML = this.selectObj.optionsText[i];
            if (this.selectObj.optionsClass) {
                this.options[i].setAttribute("class", this.selectObj.optionsClass);
            }
            select.append(this.options[i]);
        }
        // if(this.placeholder){
        if (this.selectObj.placeholder) {
            this.options[0].setAttribute("placeholder", this.selectObj.placeholder);
        }
        if (this.selectObj.id) {
            select.setAttribute("id", this.selectObj.id);
        }
        if (this.selectObj.className) {
            select.setAttribute("class", this.selectObj.className);
        }
        console.log(this.selectObj.id, this.selectObj.placeholder, this.selectObj.className, this.selectObj.optionsText);
        // if(this.className){
        //   this.setAttibuteForOptional(select, "class", this.className);
        // }
        // select.append(options);
        if (this.wrappTagName) {
            this.wrapp = document.createElement(this.wrappTagName);
            if (this.wrappClassName) {
                this.wrapp.setAttribute("class", this.wrappClassName);
            }
            this.wrapp.append(label);
            this.wrapp.append(select);
        }
        // console.log(wrapp);
        return this.wrapp;
    }
}
// export class FormClass extends InputClass implements FormObject {
export class FormClass {
    constructor(inputTypes, 
    // public inputsNo: number,
    // public selectNo: number,
    heading) {
        this.inputTypes = inputTypes;
        this.heading = heading;
    }
}
/*

createInputSelect(){
    const select = document.createElement(this.tagName);
    const label = document.createElement("label");
    // const option =
    // let wrapp, options: HTMLElement[] = [];
    label.innerHTML = this.labelText;

    // input.setAttribute("type", this.type);
    for(let i=0; i<this.optionsText.length; i++){
      this.options[i] = document.createElement("option");
      this.options[i].setAttribute("value", this.optionsVal[i]);
      this.options[i].innerHTML = this.optionsText[i];
      if(this.optionsClass){
        this.options[i].setAttribute("class", this.optionsClass);
      }
      select.append(this.options[i]);
    }
    // if(this.placeholder){
    if(this.placeholder){
      this.options[0].setAttribute("placeholder", this.placeholder);
    }
   if(this.id){
    select.setAttribute("id", this.id);
   }
    if(this.className){
      select.setAttribute("class", this.className);
    }

    console.log(this.id, this.placeholder, this.className, this.optionsText);
    // if(this.className){
    //   this.setAttibuteForOptional(select, "class", this.className);
    // }
    // select.append(options);

    if (this.wrappTagName) {
      this.wrapp = document.createElement(this.wrappTagName);
      if (this.wrappClassName) {
        this.wrapp.setAttribute("class", this.wrappClassName);
      }
      this.wrapp.append(label);
      this.wrapp.append(select);
    }

    // console.log(wrapp);
    return this.wrapp;
  }






import { CreateInput, FormClass, GenereteInputProps, GenereteSelectProps } from "./classes/Inputs.js";
import { FormObject } from "./interfaces/InputGeneral";

document.addEventListener("DOMContentLoaded", (ev: Event)=>{
console.log("document ready!");

const form = document.querySelector('form.form') as HTMLFormElement;
const formType = document.querySelector('#form-type') as HTMLSelectElement;

form.addEventListener('submit', (event: Event): void => {
  event.preventDefault();
  handleSubmit(formType);
})

}, false);

// const accountArray: (string | number | {})[] = ['Financial Balance', ['select', 'input']]
// const accountObj: FormObject ={
//     inputTypes: ['input','select'],
//     inputsNo: 3,
//     selectNo: 2,
//     heading: 'Financial Balance',
// }

const handleSubmit = (type: HTMLSelectElement) : void=>{
  let formNew!: FormObject;
  const footer = document.querySelector('footer.footer') as HTMLElement;
  const labelSelect: string[] = ['Type:', 'Order:'];
  const selectID: string[] = ['type', 'order'];
  const optionsText: (string[])[] = [['Invoice','Payment'], ['Top','Bottom']];
  const optionsValue: (string[])[] = [['invoice','payment'], ['top','bottom']];

  const labelInput: string[] = ['To / From:', 'Details:', 'Amount ($):'];
  const inputID: string[] = ['tofrom', 'details', 'amount'];
  const placeholder: (string | undefined)[] = ['Write a name of the right person', 'Write details about the transaction', undefined];
  const types: string[] = ['text','text', 'number'];

  // console.log(labelSelect.length);
  // console.log(labelInput.length);
  // let inputValues
  let select1: (GenereteSelectProps<string[]> | GenereteInputProps<string>)[];
  // let select1!: object;
  // let inputsPropsArray: (GenereteSelectProps<string[]> | GenereteInputProps<string>)[] = [];
  // let inputsPropsArray: (GenereteSelectProps<string[]> | GenereteInputProps<string>)[] = [];
  let inputsHTMLArray: GenereteInputProps<string>[] = [];
  let inputsSelectArray: CreateInput<string[]>[] = [];
  // let inputsPropsArray: object[] = [];
  if(type.value === 'accounting'){
// create an instance of class 'GenereteSelectProps' - object with appropriate props for inputs

// create object with props for select input
for(let i=0; i<labelSelect.length; i++){
  const select: GenereteSelectProps<string[]> = new GenereteSelectProps<string[]>(labelSelect[i],'select', optionsText[i], optionsValue[i],'account-options', undefined,selectID[i],'account-select', undefined, undefined);
  console.log("LOOP SELECT");
  // console.log(select);
  // console.log(select.optionsValue);
  // console.log(select.optionsVal);
  const selectHTML = new CreateInput<string[]>(select, undefined, 'field', 'div', undefined);
  inputsSelectArray.push(selectHTML);
  // console.log(inputsPropsArray[0])
  // select1 = select;
}

// create object with props for input
for(let i=0; i< labelInput.length; i++){
  // const input = new GenereteInputProps<string>(labelInput[i], 'input', types[i], inputID[i], 'input-primary', undefined, placeholder[i]);
  // inputsHTMLArray.push(input);

  const input: GenereteSelectProps<string[]> = new GenereteSelectProps<string[]>(labelInput[i],'input', undefined, undefined, undefined, types[i] , inputID[i], 'input-primary', undefined, placeholder[i]);
  console.log("LOOP SELECT");
  // console.log(select);
  // console.log(select.optionsValue);
  // console.log(select.optionsVal);
  const selectHTML = new CreateInput<string[]>(input, undefined, 'field', 'div', undefined);
  inputsSelectArray.push(selectHTML);
}

// console.log(inputsSelectArray);
console.log('SELECT1');
// console.log(select1.optionsVal);
let selectInWrappArray: HTMLElement[]=[];
footer.innerHTML = '';

inputsSelectArray.forEach((el)=>{
  if(el.selectObj.tagName === 'select'){
      // console.log(el);
      // console.log(el.optionsVal);
      // console.log(el.selectObj.optionsValue);
      // const selectHTML = new CreateSelectInput(el, undefined, 'container', 'div', undefined);
      const selectInWrapp = el.createInp()!;
      footer.appendChild(selectInWrapp);
      // selectInWrappArray.push(selectInWrapp);
  } else {
      // console.log(el)
      const inputInWrapp = el.createInp()!;
      footer.appendChild(inputInWrapp);
  }
})



// createInputFn(type.value, inputsPropsArray);


      // create form object with appropriate props
      // formNew = new FormClass(['input','select'], 3, 2, 'Financial Balance');
      // formNew = new FormClass(['select', 'input', 'input', 'input', 'select'], 'Financial Balance');
      // formNew = new FormClass([ {tagName: 'select', labelText: 'Type:', id: "type", }, 'input', 'input', 'input', 'select'], 'Financial Balance');
      // let formNew = new FormClass(accountObj.inputTypes, accountObj.inputsNo, accountObj.selectNo, accountObj.heading);
      // console.log(formNew.inputTypes.length);
      // let inputInst: Array<object>;
      // formNew.inputTypes.forEach( input =>{
      //     let inputElement = new GenerateInputProps();
          
      // })
      // console.log(formNew);
      // console.log(formNew.inputTypes);
  }
  // console.log(formNew);
  // console.log(formNew.inputTypes);
  // formNew.inputTypes.forEach( (el)=>{

  // })
  
}


const createInputFn =( type: string, inputArr : (GenereteSelectProps<string[]> | GenereteInputProps<string>)[] = [])=>{

}




// const select1: GenereteSelectProps<string[]> = new GenereteSelectProps<string[]>('Type:','select',['Invoice','Payment'],'account-options', undefined,'type','account-select', ['invoice','payment'], undefined);
// inputsPropsArray.push(select1);

// const select2: GenereteSelectProps<string[]> = new GenereteSelectProps<string[]>('Order:','select',['Top','Bottom'],'account-options', undefined,'order','account-select', ['top','bottom'], undefined);
// inputsPropsArray.push(select2);

// const input1 = new GenerateInputProps<string>('To / From:', 'input', 'text', 'tofrom', 'input-primary', undefined, 'Write a name of the right person');
// inputsPropsArray.push(input1);

// const input2 = new GenerateInputProps<string>('Details:', 'input', 'text', 'details', 'input-primary', undefined, 'Write details about the transaction');
// inputsPropsArray.push(input2);

// const input3 = new GenerateInputProps<string>('Amount ($):', 'input', 'number', 'amount', 'input-primary', undefined, undefined);
// inputsPropsArray.push(input3);

// console.log(inputsPropsArray);


RESERVATION
From - Date
To - Date
Hotel - Select
Standard - BB, HB, FB, All Inclusive - Select
Room categories - Standard, Superior, Deluxe, Premier - select
Customer Name - input-text

TODO LIST
Task
When start
Deadline



form.addEventListener("submit", (event: Event): void => {
    event.preventDefault();
    console.log('FORM SUBMITTED!');
    handleSubmit(formType, form);
  }, {once: true});

form.addEventListener("submit", (event: Event): void => {
event.preventDefault();
console.log('FORM SUBMITTED TWO!');
handleSubmitForm(event, form);
});


-------- %%%%%%%%%%%%%%% --------

const handleSubmit = (type: HTMLSelectElement): void => {
console.log("handleSubmit!");
let formNew!: FormObject;
const footer = document.querySelector("footer.footer") as HTMLElement;
const title = document.querySelector("#wrapper h1") as HTMLElement;

let labelSelect: string[] = [];
let selectID: string[] = [];
let optionsText: string[][] = [];
let optionsValue: string[][] = [];

let labelInput: string[] = [];
let inputID: string[] = [];
let placeholder: (string | undefined)[] = [];
let types: string[] = [];

if (type.value === "accounting") {
  labelSelect = ["Type:", "Order:"];
  selectID = ["type", "order"];
  optionsText = [
    ["Invoice", "Payment"],
    ["Top", "Bottom"],
  ];
  optionsValue = [
    ["invoice", "payment"],
    ["top", "bottom"],
  ];

  labelInput = ["To / From:", "Details:", "Amount ($):"];
  inputID = ["tofrom", "details", "amount"];
  placeholder = [
    "Write a name of the right person",
    "Write details about the transaction",
    undefined,
  ];
  types = ["text", "text", "number"];
} else if (type.value === "reservation") {
  labelSelect = ["Hotel:", "Standard:", "Room categ.:"];
  selectID = ["hotel", "version", "roomCat"];
  optionsText = [
    ["Laguna", "Miami", "Albatros", "Piazza", "Villa Galla"],
    ["BB", "HB", "FB", "All Inclusive"],
    ["Standard", "Superior", "Deluxe", "Premier"],
  ];
  optionsValue = [
    ["laguna", "miami", "albatros", "piazza", "villa_galla"],
    ["BB", "HB", "FB", "all_inclusive"],
    ["standard", "superior", "deluxe", "premier"],
  ];

  labelInput = ["From:", "To:", "Name & surname"];
  inputID = ["from", "to", "customer"];
  placeholder = [undefined, undefined, "Write your full name"];
  types = ["date", "date", "text"];
} else {
  labelSelect = ["Order:"];
  selectID = ["order"];
  optionsText = [["Top", "Bottom"]];
  optionsValue = [["top", "bottom"]];

  labelInput = ["Task:", "Start:", "Deadline:"];
  inputID = ["task", "start", "deadline"];
  placeholder = ["What to do", undefined, undefined];
  types = ["text", "date", "date"];
}

let inputsArray: CreateInput<string[]>[] = [];

// create object with props for select input
for (let i = 0; i < labelSelect.length; i++) {
  const select: GenerateInputProps<string[]> = new GenerateInputProps<
    string[]
  >(
    labelSelect[i],
    "select",
    optionsText[i],
    optionsValue[i],
    "account-options",
    undefined,
    selectID[i],
    "account-select",
    undefined,
    undefined
  );
  console.log("LOOP SELECT");
  // console.log(select);
  // console.log(select.optionsValue);
  // console.log(select.optionsVal);
  const selectHTML = new CreateInput<string[]>(
    select,
    undefined,
    "field",
    "div",
    undefined
  );
  inputsArray.push(selectHTML);
  // console.log(inputsPropsArray[0])
  // select1 = select;
}

// create object with props for input
for (let i = 0; i < labelInput.length; i++) {
  // const input = new GenereteInputProps<string>(labelInput[i], 'input', types[i], inputID[i], 'input-primary', undefined, placeholder[i]);
  // inputsHTMLArray.push(input);

  const input: GenerateInputProps<string[]> = new GenerateInputProps<
    string[]
  >(
    labelInput[i],
    "input",
    undefined,
    undefined,
    undefined,
    types[i],
    inputID[i],
    "input-primary",
    undefined,
    placeholder[i]
  );
  console.log("LOOP SELECT");
  // console.log(select);
  const selectHTML = new CreateInput<string[]>(
    input,
    undefined,
    "field",
    "div",
    undefined
  );
  inputsArray.push(selectHTML);
}

// console.log(inputsArray[0]);
// console.log(inputsArray[1]);
// reorder the inputsArray
// let inputsArrayReordered: CreateInput<string[]>[] = [];
// inputsArrayReordered =
inputsArray.some((el, ind) => {
  // console.log(inputsArray[ind]);
  if (el.selectObj.id === "order") {
    // console.log(el.selectObj.id);
    let last = inputsArray[inputsArray.length - 1];
    inputsArray[inputsArray.length - 1] = el;
    inputsArray[ind] = last;
  }
  // return el;
});

// console.log(inputsArrayReordered);
console.log(inputsArray);
inputsArray.forEach( el => {
  console.log(el.selectObj);
  console.log(el.selectObj.id);
});

console.log("SELECT1");
footer.innerHTML = "";
const form2 = document.createElement("form");

inputsArray.forEach((el) => {
  const inputInWrapp = el.createInp()!;
  form2.appendChild(inputInWrapp);
  // if(el.selectObj.tagName === 'select'){

  //     const selectInWrapp = el.createInp()!;
  //     footer.appendChild(selectInWrapp);
  //     // selectInWrappArray.push(selectInWrapp);
  // } else {
  //     // console.log(el)
  //     const inputInWrapp = el.createInp()!;
  //     footer.appendChild(inputInWrapp);
  // }
});

const btnSub = document.createElement("button");
btnSub.innerText = "Submit";
btnSub.classList.add("btn-submit");
form2.appendChild(btnSub);
footer.append(form2);

//   form2.addEventListener("submit", (event: Event): void => {
//     event.preventDefault();
//     const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// const order = document.querySelector('#order') as HTMLInputElement;
//     console.log('FORM SUBMITTED TWO!');
//     handleSubmitForm(event);
//   });

// }

const titleText = type.value;
// const toUppStr = titleText[0].toUpperCase();
const titleCamel = titleText.replace(
  titleText[0],
  titleText[0].toUpperCase()
);
// titleText.charAt() = titleText[0].toUpperCase();
// console.log(toUppStr);
console.log(titleCamel);
// console.log(titleText[0]);
// titleText.charAt(0) = toUppStr;
// console.log(titleText);
title.innerText = titleCamel;




const obj1: {name1: string, age1: number} = {
  name1: 'Kolo',
  age1: 32
}

// const formAll: AccountingInter = {
//   // const formAll: {type: HTMLSelectElement, toFrom: HTMLInputElement, details: HTMLInputElement, amount: HTMLInputElement, order: HTMLInputElement, submit: HTMLButtonElement} = {
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   type: document.querySelector("#type")!,
//   toFrom: document.querySelector("#tofrom")!,
//   details: document.querySelector("#details")!,
//   amount: document.querySelector("#amount")!,
//   order: document.querySelector("#order")!,
//   submit: document.querySelector(".btn-submit")!,
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   // toFrom: document.querySelector("#tofrom") as HTMLInputElement,
//   // details: document.querySelector("#details") as HTMLInputElement,
//   // amount: document.querySelector("#amount") as HTMLInputElement,
//   // order: document.querySelector("#order") as HTMLInputElement,
//   // submit: document.querySelector(".btn-submit") as HTMLButtonElement,
// };

// formAll.submit.addEventListener("click", (e: Event, formAll) => {
form2.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  // console.log('Button pressed!');
  console.log("FORM SUBMITTED TWO!");
  // handleSubmitForm(e, obj1);
  const formAll = createFormObjWithInputValues(inputsArray);
  handleSubmitForm(e, formAll);
});
};


// type objectWithDifferentInputs = AccountingInter | ReservationInter | TodoInter;
// type Type1<InputInter> = {
//   [Property in keyof InputInter]: HTMLSelectElement | HTMLInputElement;
// }

// type Type2 = {
//   [key: string]: HTMLSelectElement | HTMLInputElement;
// }

// type MapType = Map<string | undefined, HTMLSelectElement | HTMLInputElement | null>
type MapType = Map<string, HTMLSelectElement | HTMLInputElement>

// const createFormObjWithInputValues = (inputsArray): AccountingInter =>{
// const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]): Map<string | undefined, HTMLSelectElement | HTMLInputElement | null> =>{
const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]) =>{
// const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]): InputInter =>{
// const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]): AccountingInter =>{
// const createFormObjWithInputValues = <V extends objectWithDifferentInputs> (inputsArray: CreateInput<string[]>[]): objectWithDifferentInputs =>{

const formObj:MapType = new Map();
// const formObj = new Map<string | undefined, HTMLSelectElement | HTMLInputElement | null>();
// const formObj:[key: string]: HTMLSelectElement | HTMLInputElement = new Map();
// const formObj:Type1<AccountingInter> = new Map();
inputsArray.forEach((el, ind)=>{
  // formObj.set(el.selectObj.id, document.querySelector(`#${el.selectObj.id}`))
  formObj.set(el.selectObj.id!, document.querySelector(`#${el.selectObj.id}`)!)
});


console.log(formObj);
console.log(formObj.get('type')!.value);
console.log(formObj.get('order')!.value);

return formObj;
}

// const handleSubmitForm = (e: Event, form: HTMLFormElement)=>{
// const handleSubmitForm = (e: Event, obj: {name1: string, age1: number}) => {
// const handleSubmitForm = (e: Event, formAll: AccountingInter) => {
// const handleSubmitForm = (e: Event, formAll: InputInter) => {
// const handleSubmitForm = (e: Event, formAll: Map<string | undefined, HTMLSelectElement | HTMLInputElement | null>) => {
// const handleSubmitForm = (e: Event, formAll: MapType) => {
const handleSubmitForm = (e: Event, formAll: MapType) => {
e.preventDefault();
// console.log(e);
console.log(e.target);

console.log("handleSubmitForm");
console.log(formAll);
console.log(formAll.get("type")?.value);
console.log(formAll.get("amount")?.value);
console.log(formAll.get("tofrom")?.value);
console.log(formAll.get("details")?.value);
console.log(formAll.get("order")?.value);
// console.log(formAll.type.value);
// console.log(formAll.amount.valueAsNumber);
// console.log(e.target[0].value);  // // invoice
// console.log(e.target.childNodes[0].childNodes[1].value); // invoice
// console.log(e.currentTarget);
// if(e.target){
//   e.target.removeEventListener('submit', handleSubmitForm);
// }
// form.removeEventListener('submit', ()=>handleSubmitForm(e, form));
};

-------- %%%%%%%%%%%%%%% --------






const handleSubmitForm = (e: Event, form: HTMLFormElement)=>{
e.preventDefault();
console.log(e.target);
console.log(e.currentTarget);
// if(e.target){
//   e.target.removeEventListener('submit', handleSubmitForm);
// }
form.removeEventListener('submit', ()=>handleSubmitForm(e, form));
}




formAll.submit.addEventListener('click', (e: Event)=>{
  e.preventDefault();
  console.log('Button pressed!');
  const xhr = new XMLHttpRequest();
  xhr.onload = ()=>{
      // responseText is an JSON object because of "echo json_encode" in php file
      // console.log(xhr.responseText);
      let responseObject = null;
      try {
          // responseObject = JSON.parse(this.responseText);
          responseObject = JSON.parse(xhr.responseText);
          // responseObject = xhr.responseText;
      } catch(e){
          console.error('Could not parse JSON!');
      }
      console.log(responseObject);    // np: {ok: false, messages: ["Incorrect username or password!"]}
      // without JSON.parse the output of the above is: {"ok":false,"messages":["Incorrect username or password!"]}

      // if there was no error in JSON.parse
      // if(responseObject){
      //     handleResponse(responseObject);
      // }

  };

  // const xhrData = `username=${form.username.value}&password=${form.password.value}`;
  // console.log(xhrData);

  // xhr.open('post','checkLogin.php',true);
  // xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  // xhr.send(xhrData);

});

------------- ************* ---------------

const handleSubmit = (type: HTMLSelectElement): void => {
console.log("handleSubmit!");
let formNew!: FormObject;
const footer = document.querySelector("footer.footer") as HTMLElement;
const title = document.querySelector("#wrapper h1") as HTMLElement;

let labelSelect: string[] = [];
let selectID: string[] = [];
let optionsText: string[][] = [];
let optionsValue: string[][] = [];

let labelInput: string[] = [];
let inputID: string[] = [];
let placeholder: (string | undefined)[] = [];
let types: string[] = [];

if (type.value === "accounting") {
  labelSelect = ["Type:", "Order:"];
  selectID = ["type", "order"];
  optionsText = [
    ["Invoice", "Payment"],
    ["Top", "Bottom"],
  ];
  optionsValue = [
    ["invoice", "payment"],
    ["top", "bottom"],
  ];

  labelInput = ["To / From:", "Details:", "Amount ($):"];
  inputID = ["tofrom", "details", "amount"];
  placeholder = [
    "Write a name of the right person",
    "Write details about the transaction",
    undefined,
  ];
  types = ["text", "text", "number"];
} else if (type.value === "reservation") {
  labelSelect = ["Hotel:", "Standard:", "Room categ.:"];
  selectID = ["hotel", "version", "roomCat"];
  optionsText = [
    ["Laguna", "Miami", "Albatros", "Piazza", "Villa Galla"],
    ["BB", "HB", "FB", "All Inclusive"],
    ["Standard", "Superior", "Deluxe", "Premier"],
  ];
  optionsValue = [
    ["laguna", "miami", "albatros", "piazza", "villa_galla"],
    ["BB", "HB", "FB", "all_inclusive"],
    ["standard", "superior", "deluxe", "premier"],
  ];

  labelInput = ["From:", "To:", "Name & surname"];
  inputID = ["from", "to", "customer"];
  placeholder = [undefined, undefined, "Write your full name"];
  types = ["date", "date", "text"];
} else {
  labelSelect = ["Order:"];
  selectID = ["order"];
  optionsText = [["Top", "Bottom"]];
  optionsValue = [["top", "bottom"]];

  labelInput = ["Task:", "Start:", "Deadline:"];
  inputID = ["task", "start", "deadline"];
  placeholder = ["What to do", undefined, undefined];
  types = ["text", "date", "date"];
}

let inputsArray: CreateInput<string[]>[] = [];

// create object with props for select input
for (let i = 0; i < labelSelect.length; i++) {
  const select: GenerateInputProps<string[]> = new GenerateInputProps<
    string[]
  >(
    labelSelect[i],
    "select",
    optionsText[i],
    optionsValue[i],
    "account-options",
    undefined,
    selectID[i],
    "account-select",
    undefined,
    undefined
  );
  console.log("LOOP SELECT");
  // console.log(select);
  // console.log(select.optionsValue);
  // console.log(select.optionsVal);
  const selectHTML = new CreateInput<string[]>(
    select,
    undefined,
    "field",
    "div",
    undefined
  );
  inputsArray.push(selectHTML);
  // console.log(inputsPropsArray[0])
  // select1 = select;
}

// create object with props for input
for (let i = 0; i < labelInput.length; i++) {
  // const input = new GenereteInputProps<string>(labelInput[i], 'input', types[i], inputID[i], 'input-primary', undefined, placeholder[i]);
  // inputsHTMLArray.push(input);

  const input: GenerateInputProps<string[]> = new GenerateInputProps<
    string[]
  >(
    labelInput[i],
    "input",
    undefined,
    undefined,
    undefined,
    types[i],
    inputID[i],
    "input-primary",
    undefined,
    placeholder[i]
  );
  console.log("LOOP SELECT");
  // console.log(select);
  const selectHTML = new CreateInput<string[]>(
    input,
    undefined,
    "field",
    "div",
    undefined
  );
  inputsArray.push(selectHTML);
}

// console.log(inputsArray);
// reorder the inputsArray
// let inputsArrayReordered: CreateInput<string[]>[] = [];
// inputsArrayReordered =
inputsArray.some((el, ind) => {
  if (el.selectObj.id === "order") {
    // console.log(el.selectObj.id);
    let last = inputsArray[inputsArray.length - 1];
    inputsArray[inputsArray.length - 1] = el;
    inputsArray[ind] = last;
  }
  // return el;
});

// console.log(inputsArrayReordered);
console.log(inputsArray);

console.log("SELECT1");
footer.innerHTML = "";
const form2 = document.createElement("form");

inputsArray.forEach((el) => {
  const inputInWrapp = el.createInp()!;
  form2.appendChild(inputInWrapp);
  // if(el.selectObj.tagName === 'select'){

  //     const selectInWrapp = el.createInp()!;
  //     footer.appendChild(selectInWrapp);
  //     // selectInWrappArray.push(selectInWrapp);
  // } else {
  //     // console.log(el)
  //     const inputInWrapp = el.createInp()!;
  //     footer.appendChild(inputInWrapp);
  // }
});

const btnSub = document.createElement("button");
btnSub.innerText = "Submit";
btnSub.classList.add("btn-submit");
form2.appendChild(btnSub);
footer.append(form2);

//   form2.addEventListener("submit", (event: Event): void => {
//     event.preventDefault();
//     const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// const order = document.querySelector('#order') as HTMLInputElement;
//     console.log('FORM SUBMITTED TWO!');
//     handleSubmitForm(event);
//   });

// }

const titleText = type.value;
// const toUppStr = titleText[0].toUpperCase();
const titleCamel = titleText.replace(
  titleText[0],
  titleText[0].toUpperCase()
);
// titleText.charAt() = titleText[0].toUpperCase();
// console.log(toUppStr);
console.log(titleCamel);
// console.log(titleText[0]);
// titleText.charAt(0) = toUppStr;
// console.log(titleText);
title.innerText = titleCamel;


// const formAll: Accounting = {
//   // const formAll: {type: HTMLSelectElement, toFrom: HTMLInputElement, details: HTMLInputElement, amount: HTMLInputElement, order: HTMLInputElement, submit: HTMLButtonElement} = {
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   type: document.querySelector("#type")!,
//   toFrom: document.querySelector("#tofrom")!,
//   details: document.querySelector("#details")!,
//   amount: document.querySelector("#amount")!,
//   order: document.querySelector("#order")!,
//   submit: document.querySelector(".btn-submit")!,
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   // toFrom: document.querySelector("#tofrom") as HTMLInputElement,
//   // details: document.querySelector("#details") as HTMLInputElement,
//   // amount: document.querySelector("#amount") as HTMLInputElement,
//   // order: document.querySelector("#order") as HTMLInputElement,
//   // submit: document.querySelector(".btn-submit") as HTMLButtonElement,
// };

const obj1: {name1: string, age1: number} = {
  name1: 'Kolo',
  age1: 32
}

createFormObjWithInputValues();

// const formAll: AccountingInter = {
//   // const formAll: {type: HTMLSelectElement, toFrom: HTMLInputElement, details: HTMLInputElement, amount: HTMLInputElement, order: HTMLInputElement, submit: HTMLButtonElement} = {
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   type: document.querySelector("#type")!,
//   toFrom: document.querySelector("#tofrom")!,
//   details: document.querySelector("#details")!,
//   amount: document.querySelector("#amount")!,
//   order: document.querySelector("#order")!,
//   submit: document.querySelector(".btn-submit")!,
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   // toFrom: document.querySelector("#tofrom") as HTMLInputElement,
//   // details: document.querySelector("#details") as HTMLInputElement,
//   // amount: document.querySelector("#amount") as HTMLInputElement,
//   // order: document.querySelector("#order") as HTMLInputElement,
//   // submit: document.querySelector(".btn-submit") as HTMLButtonElement,
// };

// formAll.submit.addEventListener("click", (e: Event, formAll) => {
form2.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  // console.log('Button pressed!');
  console.log("FORM SUBMITTED TWO!");
  // handleSubmitForm(e, obj1);
  handleSubmitForm(e, formAll);
});
};





------------- xxxxxxxxxxxxxxxxx ------------

// const formAll: Accounting = {
//   // const formAll: {type: HTMLSelectElement, toFrom: HTMLInputElement, details: HTMLInputElement, amount: HTMLInputElement, order: HTMLInputElement, submit: HTMLButtonElement} = {
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   type: document.querySelector("#type")!,
//   toFrom: document.querySelector("#tofrom")!,
//   details: document.querySelector("#details")!,
//   amount: document.querySelector("#amount")!,
//   order: document.querySelector("#order")!,
//   submit: document.querySelector(".btn-submit")!,
//   // type: document.querySelector("#type") as HTMLSelectElement,
//   // toFrom: document.querySelector("#tofrom") as HTMLInputElement,
//   // details: document.querySelector("#details") as HTMLInputElement,
//   // amount: document.querySelector("#amount") as HTMLInputElement,
//   // order: document.querySelector("#order") as HTMLInputElement,
//   // submit: document.querySelector(".btn-submit") as HTMLButtonElement,
// };



  type: document.querySelector("#type")!,
  toFrom: document.querySelector("#tofrom")!,
  details: document.querySelector("#details")!,
  amount: document.querySelector("#amount")!,
  order: document.querySelector("#order")!,
  submit: document.querySelector(".btn-submit")!,



  ----- ############# ----------

  













  POBIERANIE VALUES Z DANYCH POL INPUTÓW, a te values nie sa ustanowione wraz utworzeniem klasy
  accounting
  selectID = ["type", "order"];
  inputID = ["tofrom", "details", "amount"];

  Reservation
  selectID = ["hotel", "version", "roomCat"];
  inputID = ["from", "to", "customer"];

  Map Object with input values:
  [[Entries]]
0: {"hotel" => select#hotel.select}
1: {"version" => select#version.select}
2: {"roomCat" => select#roomCat.select}
3: {"peopleNo" => select#peopleNo.select}
4: {"to" => input#to.input-primary}
5: {"from" => input#from.input-primary}
6: {"personTitle" => select#personTitle.select}
7: {"customer" => input#customer.input-primary}

  Todo
   selectID = ["order"];
   inputID = ["task", "start", "deadline"];








*/ 
