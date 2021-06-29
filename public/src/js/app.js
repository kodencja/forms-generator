import { CreateInput, ObjectWithFormValues, GenerateInputProps } from "./classes/Inputs.js";
import { ListTemplate } from './classes/ListTemplate.js';
import { fromInputProps } from "./vars/vars.js";
document.addEventListener("DOMContentLoaded", (ev) => {
    console.log("document ready!");
    createStartForm(fromInputProps);
    // const form = document.querySelector("form.form") as HTMLFormElement;
    // const formType = document.querySelector("#form-type") as HTMLSelectElement;
    // form.addEventListener(
    //   "submit",
    //   (event: Event): void => {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     handleSubmit(formType);
    //   },
    //   { once: true }
    // );
}, false);
const createStartForm = (fromInputProps) => {
    fromInputProps = {
        labelSelect: ["Choose a form:"],
        selectID: ["form-type"],
        optionsText: [
            ["Accounting", "Hotel booking", "Todo List"],
        ],
        optionsValue: [
            ["Accounting", "Reservation", "Todo-List"],
        ],
    };
    // for (let i = 0; i < fromInputProps.labelSelect.length; i++) {
    const selectStart = new GenerateInputProps(fromInputProps.labelSelect[0], "select", fromInputProps.optionsText[0], fromInputProps.optionsValue[0], "option", undefined, fromInputProps.selectID[0], "select", undefined, undefined);
    // console.log("LOOP SELECT");
    // console.log(select);
    // console.log(select.optionsValue);
    // console.log(select.optionsVal);
    const selectStartHTML = new CreateInput(selectStart, undefined, "all-forms", "div", undefined);
    // inputsArray.push(selectHTML);
    // console.log(inputsPropsArray[0])
    // select1 = select;
    // }
    const form1 = document.createElement("form");
    const mainTitle = document.querySelector("#wrapper h1");
    const itemList = document.querySelector("#wrapper ul");
    const formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = '';
    itemList.innerHTML = '';
    mainTitle.innerText = 'Forms Generator';
    const selectStartWrap = selectStartHTML.createInp();
    console.log(selectStartWrap);
    form1.append(selectStartWrap);
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.innerText = "Submit";
    btnSubmit.classList.add("btn-submit", 'shadow-mid-dark');
    form1.appendChild(btnSubmit);
    formContainer.appendChild(form1);
    // const form = document.querySelector("form.form") as HTMLFormElement;
    const formType = document.querySelector("#form-type");
    form1.addEventListener("submit", (event) => {
        console.log("FORM1 SUBMITTED");
        event.stopPropagation();
        event.preventDefault();
        handleSubmit(formType, formContainer);
    }, { once: true });
};
// const accountArray: (string | number | {})[] = ['Financial Balance', ['select', 'input']]
// const accountObj: FormObject ={
//     inputTypes: ['input','select'],
//     inputsNo: 3,
//     selectNo: 2,
//     heading: 'Financial Balance',
// }
const handleSubmit = (type, formContainer) => {
    console.log("handleSubmit!");
    // let formNew!: FormObject;
    // const footer = document.querySelector("footer.footer") as HTMLElement;
    const mainTitle = document.querySelector("#wrapper h1");
    mainTitle.innerText = type.value;
    // let labelSelect: string[] = [];
    // let selectID: string[] = [];
    // let optionsText: string[][] = [];
    // let optionsValue: string[][] = [];
    // // let optionsValue: (number[] | string[])[] = [];
    // let labelInput: string[] = [];
    // let inputID: string[] = [];
    // let placeholder: (string | undefined)[] = [];
    // let types: string[] = [];
    let inputProps;
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
    if (type.value === "Accounting") {
        inputProps.labelSelect = ["Type:", "Order:"];
        inputProps.selectID = ["type", "order"];
        inputProps.optionsText = [
            ["Invoice", "Payment"],
            ["Top", "Bottom"],
        ];
        inputProps.optionsValue = [
            ["invoice", "payment"],
            ["top", "bottom"],
        ];
        inputProps.labelInput = ["To / From:", "Details:", "Amount ($):"];
        inputProps.inputID = ["tofrom", "details", "amount"];
        inputProps.placeholder = [
            "Write a name of the right person",
            "Write details about the transaction",
            undefined,
        ];
        inputProps.types = ["text", "text", "number"];
    }
    else if (type.value === "Reservation") {
        inputProps.labelSelect = ["Hotel:", "Standard:", "Room categ.:", "No of ppl:", 'Title:'];
        inputProps.selectID = ["hotel", "version", "roomCat", "peopleNo", 'personTitle'];
        inputProps.optionsText = [
            ["Laguna", "Miami", "Albatros", "Piazza", "Villa Galla"],
            ["BB", "HB", "FB", "All Inclusive"],
            ["Standard", "Superior", "Deluxe", "Premier"],
            ['1', '2', '3', '4', '5', '6'],
            ['Mr and Mrs', 'Mr', 'Mrs', 'Miss', 'Ms']
        ];
        inputProps.optionsValue = [
            ["Laguna", "Miami", "Albatros", "Piazza", "Villa Galla"],
            ["BB", "HB", "FB", "All Inclusive"],
            ["Standard", "Superior", "Deluxe", "Premier"],
            ['1', '2', '3', '4', '5', '6'],
            ['Mr and Mrs', 'Mr', 'Mrs', 'Miss', 'Ms']
        ];
        inputProps.labelInput = ["From:", "To:", "Name & Surname:"];
        inputProps.inputID = ["from", "to", "customer"];
        inputProps.placeholder = [undefined, undefined, "Write your full name"];
        inputProps.types = ["date", "date", "text"];
    }
    else {
        inputProps.labelSelect = ["Order:"];
        inputProps.selectID = ["order"];
        inputProps.optionsText = [["Top", "Bottom"]];
        inputProps.optionsValue = [["top", "bottom"]];
        inputProps.labelInput = ["Task:", "Start:", "Deadline:"];
        inputProps.inputID = ["task", "start", "deadline"];
        inputProps.placeholder = ["What to do", undefined, undefined];
        inputProps.types = ["text", "date", "date"];
    }
    let inputsArray = [];
    // create object with props for select input
    for (let i = 0; i < inputProps.labelSelect.length; i++) {
        const select = new GenerateInputProps(inputProps.labelSelect[i], "select", inputProps.optionsText[i], inputProps.optionsValue[i], "option", undefined, inputProps.selectID[i], "select", undefined, undefined);
        console.log("LOOP SELECT");
        // console.log(select);
        // console.log(select.optionsValue);
        // console.log(select.optionsVal);
        const selectHTML = new CreateInput(select, undefined, "field", "div", undefined);
        inputsArray.push(selectHTML);
        // console.log(inputsPropsArray[0])
        // select1 = select;
    }
    // create object with props for input
    for (let i = 0; i < inputProps.labelInput.length; i++) {
        // const input = new GenereteInputProps<string>(labelInput[i], 'input', types[i], inputID[i], 'input-primary', undefined, placeholder[i]);
        // inputsHTMLArray.push(input);
        const input = new GenerateInputProps(inputProps.labelInput[i], "input", undefined, undefined, undefined, inputProps.types[i], inputProps.inputID[i], "input-primary", undefined, inputProps.placeholder[i]);
        console.log("LOOP SELECT");
        // console.log(select);
        const selectHTML = new CreateInput(input, undefined, "field", "div", undefined);
        inputsArray.push(selectHTML);
    }
    console.log(inputsArray);
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
        else if (el.selectObj.id === 'personTitle') {
            console.log('personTitle');
            const part1 = inputsArray.slice(0, ind);
            const part2 = inputsArray.slice(ind + 1, inputsArray.length - 1);
            const last = inputsArray.slice(inputsArray.length - 1);
            // console.log(part1);
            // console.log(part2);
            inputsArray = [...part1, ...part2, el, ...last];
            // const newInputArray = [...part1, ...part2, el, ...last];
            // inputsArray = newInputArray;
            // inputsArray[inputsArray.length-2] = targetElem;
            // inputsArray[6] = targetElem;
            //To
            // let lastBefore = inputsArray[inputsArray.length - 2];
            // // From
            // let last3 = inputsArray[inputsArray.length - 3];
            // console.log(el);
            // console.log(lastBefore);
            // console.log(last3);
            // // Title change to From
            // inputsArray[ind] = last3;
            // inputsArray[inputsArray.length - 2] = el; 
            // inputsArray[inputsArray.length - 3] = lastBefore;
            // inputsArray[ind] = last3;
        }
        else if (el.selectObj.id === 'task') {
            let first = inputsArray[0];
            inputsArray[0] = el;
            inputsArray[ind] = first;
        }
        else if (el.selectObj.id === 'start') {
            let second = inputsArray[1];
            inputsArray[1] = el;
            inputsArray[ind] = second;
        }
    });
    // console.log(inputsArrayReordered);
    // console.log(inputsArray);
    // inputsArray.forEach( el => {
    //   console.log(el.selectObj);
    //   console.log(el.selectObj.id);
    // });
    console.log("SELECT1");
    formContainer.innerHTML = "";
    const form2 = document.createElement("form");
    inputsArray.forEach((el) => {
        const inputInWrapp = el.createInp();
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
    btnSub.type = "submit";
    btnSub.innerText = "Submit";
    btnSub.classList.add("btn-submit", 'shadow-mid-dark');
    form2.appendChild(btnSub);
    formContainer.append(form2);
    const reset = document.createElement("button");
    reset.type = "button";
    reset.innerText = "Reset";
    reset.classList.add("reset", 'shadow-mid-dark');
    formContainer.append(reset);
    reset.addEventListener('click', (ev) => {
        ev.preventDefault();
        createStartForm(fromInputProps);
    });
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
    // const titleCamel = titleText.replace(
    //   titleText[0],
    //   titleText[0].toUpperCase()
    // );
    // titleText.charAt() = titleText[0].toUpperCase();
    // console.log(toUppStr);
    // console.log(titleCamel);
    // console.log(titleText[0]);
    // titleText.charAt(0) = toUppStr;
    console.log(titleText);
    // title.innerText = titleCamel;
    // const obj1: {name1: string, age1: number} = {
    //   name1: 'Kolo',
    //   age1: 32
    // }
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
    form2.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log('Button pressed!');
        console.log("FORM SUBMITTED TWO!");
        // handleSubmitForm(e, obj1);
        // const formAllValues = createFormObjWithInputValues(inputsArray);
        const formAll = new ObjectWithFormValues(inputsArray, type.value);
        console.log(formAll);
        // const formAllValues = formAll.createMapObjWithFormValues();
        // console.log(formAllValues);
        // console.log(formAllValues.get('type')?.value);
        // console.log(formAllValues.get('order')!.value);
        handleSubmitForm(e, formAll);
    });
};
// const createFormObjWithInputValues = (inputsArray): AccountingInter =>{
// const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]): Map<string | undefined, HTMLSelectElement | HTMLInputElement | null> =>{
const createFormObjWithInputValues = (inputsArray) => {
    // const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]): InputInter =>{
    // const createFormObjWithInputValues = (inputsArray: CreateInput<string[]>[]): AccountingInter =>{
    // const createFormObjWithInputValues = <V extends objectWithDifferentInputs> (inputsArray: CreateInput<string[]>[]): objectWithDifferentInputs =>{
    const formObj = new Map();
    // const formObj = new Map<string | undefined, HTMLSelectElement | HTMLInputElement | null>();
    // const formObj:[key: string]: HTMLSelectElement | HTMLInputElement = new Map();
    // const formObj:Type1<AccountingInter> = new Map();
    inputsArray.forEach((el, ind) => {
        // formObj.set(el.selectObj.id, document.querySelector(`#${el.selectObj.id}`))
        formObj.set(el.selectObj.id, document.querySelector(`#${el.selectObj.id}`));
    });
    console.log(formObj);
    console.log(formObj.get('type').value);
    console.log(formObj.get('order').value);
    return formObj;
};
// const handleSubmitForm = (e: Event, form: HTMLFormElement)=>{
// const handleSubmitForm = (e: Event, obj: {name1: string, age1: number}) => {
// const handleSubmitForm = (e: Event, formAllValues: AccountingInter) => {
// const handleSubmitForm = (e: Event, formAllValues: InputInter) => {
// const handleSubmitForm = (e: Event, formAllValues: Map<string | undefined, HTMLSelectElement | HTMLInputElement | null>) => {
// const handleSubmitForm = (e: Event, formAllValues: MapType) => {
// const handleSubmitForm = (e: Event, formAllValues: MapType) => {
const handleSubmitForm = (e, formAll) => {
    var _a;
    e.preventDefault();
    // console.log(e);
    console.log(e.target);
    console.log("handleSubmitForm");
    const formAllValues = formAll.createMapObjWithFormValues();
    const printText = formAll.printMsg();
    console.log(printText);
    // list template instance
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    if (formAll.formVersion === "Accounting") {
        list.render(printText, formAllValues.get('type').value, formAllValues.get('order').value);
    }
    else if (formAll.formVersion === "Reservation") {
        list.render(printText, formAllValues.get("hotel").value, (_a = formAllValues.get('order')) === null || _a === void 0 ? void 0 : _a.value);
    }
    else {
        list.render(printText, formAllValues.get("task").value, formAllValues.get('order').value);
    }
    // console.log(formAllValues);
    // console.log(formAllValues.get('type')?.value);
    // console.log(formAllValues.get('order')!.value);
    // console.log(formAllValues);
    // console.log(formAllValues.get("type")?.value);
    // console.log(formAllValues.get("amount")?.value);
    // console.log(formAllValues.get("tofrom")?.value);
    // console.log(formAllValues.get("details")?.value);
    // console.log(formAllValues.get("order")?.value);
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
