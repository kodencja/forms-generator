import { ObjectWithFormValues } from "./classes/FormValues.js";
import { CreateInput, GenerateInputProps, } from "./classes/Inputs.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { inputProps } from "./vars/vars.js";
/*
1) Create a START FORM with ONE select tag with THREE OPTIONS (FORM TYPES): "Accounting", "Hotel booking", "Todo List"; add listener to the form

2) handle submitted values from START FORM to CREATE A target NEW FORM

3) Render submitted values into div.wraper > ul > li
*/
// 1) Create a START FORM with ONE select tag with THREE OPTIONS (FORM TYPES): "Accounting", "Hotel booking", "Todo List"; add listener to the form
document.addEventListener("DOMContentLoaded", (ev) => {
    // "inputProps" is an object with initialized values for all possible inputs, not just for a particular one, therefore all initialized values are put in array []
    createStartForm(inputProps);
}, false);
// create an object with all values needed for a start "select input" with 3 options: "Accounting", "Hotel booking", "Todo List"
const createStartForm = (formInputProps) => {
    formInputProps = {
        labelSelect: ["Choose a form:"],
        selectID: ["form-type"],
        optionsText: [["Accounting", "Hotel booking", "Todo List"]],
        optionsValue: [["Accounting", "Reservation", "Todo-List"]],
    };
    // create an object with all values needed for a start "select input" taken from the object "inputProps" filled within the function "createStartForm"
    const selectStart = new GenerateInputProps(formInputProps.labelSelect[0], "select", formInputProps.optionsText[0], formInputProps.optionsValue[0], "option", undefined, formInputProps.selectID[0], "select", undefined, undefined);
    // create an object with an object "selectStart" containing props and values needed to create a Select Input, plus name of the "wrappClassName", and name of the "wrappTagName"; the "undefined" arguments are to be defined / filled in later within CreateInput class' methods
    const selectStartHTML = new CreateInput(selectStart, undefined, "all-forms", "div", undefined);
    const form1 = document.createElement("form");
    const mainTitle = document.querySelector("#wrapper h1");
    const itemList = document.querySelector("#wrapper ul");
    const formContainer = document.querySelector(".form-container");
    // CLEAR all previous tags and values from the 'formContainer' and 'itemList'
    formContainer.innerHTML = "";
    itemList.innerHTML = "";
    // create / resume main title innerText
    mainTitle.innerText = "Forms Generator";
    // invoke createInp() method of the CreateInput class to get an INPUT along with LABEL embraced into WRAPP TAG
    const selectStartWrap = selectStartHTML.createInp();
    // append the WRAPP TAG with input into FORM
    form1.append(selectStartWrap);
    // create a SUBMIT BUTTON
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.innerText = "Submit";
    btnSubmit.classList.add("btn-submit", "shadow-mid-dark");
    // append SUBMIT BUTTON to FORM
    form1.appendChild(btnSubmit);
    // append FORM to DIV with a class 'form-container'
    formContainer.appendChild(form1);
    // catch a new-created SELECT INPUT of type of the form
    const formType = document.querySelector("#form-type");
    // create event listener for the START FORM
    form1.addEventListener("submit", (event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSubmitStartForm(formType, formContainer, mainTitle);
    }, { once: true });
};
// handle with submitted values from the START FORM
const handleSubmitStartForm = (type, formContainer, mainTitle) => {
    // const mainTitle = document.querySelector("#wrapper h1") as HTMLElement;
    mainTitle.innerText = type.value;
    // 'inputProps' is an object with initialized values for all possible inputs, not just for a particular one, therefore all initialized values are put in an array []
    // attached the appriopriate values for props for the object 'inputProps' according to a value coming from the SELECT INPUT from the START FORM
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
        inputProps.labelSelect = [
            "Hotel:",
            "Standard:",
            "Room categ.:",
            "No of ppl:",
            "Title:",
        ];
        inputProps.selectID = [
            "hotel",
            "version",
            "roomCat",
            "peopleNo",
            "personTitle",
        ];
        inputProps.optionsText = [
            ["Laguna", "Miami", "Albatros", "Piazza", "Villa Galla"],
            ["BB", "HB", "FB", "All Inclusive"],
            ["Standard", "Superior", "Deluxe", "Premier"],
            ["1", "2", "3", "4", "5", "6"],
            ["Mr and Mrs", "Mr", "Mrs", "Miss", "Ms"],
        ];
        inputProps.optionsValue = [
            ["Laguna", "Miami", "Albatros", "Piazza", "Villa Galla"],
            ["BB", "HB", "FB", "All Inclusive"],
            ["Standard", "Superior", "Deluxe", "Premier"],
            ["1", "2", "3", "4", "5", "6"],
            ["Mr and Mrs", "Mr", "Mrs", "Miss", "Ms"],
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
    // INITIALIZED an empty array where two kind of object will be held: 'selectHTML' and 'inputHTML', both containing an object "select" or "input" including props and values needed to create a particular Select or Input TAG, plus name of the "wrappClassName", and name of the "wrappTagName"
    let inputsArray = [];
    // looping over inputProps.labelSelect.length to create object with props for SELECT tag - "select" - and an object "selectHTML" with some aditional props and values needed to embrace the 'select' tag in a wrapp div
    for (let i = 0; i < inputProps.labelSelect.length; i++) {
        // create an object with all values needed for a "select" TAG taken from the object "inputProps"
        const select = new GenerateInputProps(inputProps.labelSelect[i], "select", inputProps.optionsText[i], inputProps.optionsValue[i], "option", undefined, inputProps.selectID[i], "select", undefined, undefined);
        // create an object with an object "select" containing props and values needed to create a particular Select Input, plus name of the "wrappClassName", and name of the "wrappTagName"; the "undefined" arguments are to be defined / filled in later within CreateInput class' methods
        const selectHTML = new CreateInput(select, undefined, "field", "div", undefined);
        inputsArray.push(selectHTML);
    }
    // looping over inputProps.labelSelect.length to create object with props for INPUT tag - "input" - and an object "inputHTML" with some aditional props and values needed to embrace the 'select' tag in a wrapp div
    for (let i = 0; i < inputProps.labelInput.length; i++) {
        // create an object with all values needed for a "select" TAG taken from the object "inputProps"
        const input = new GenerateInputProps(inputProps.labelInput[i], "input", undefined, undefined, undefined, inputProps.types[i], inputProps.inputID[i], "input-primary", undefined, inputProps.placeholder[i]);
        // create an object "inputHTML" with an object "input" containing props and values needed to create a particular  Input, plus name of the "wrappClassName", and name of the "wrappTagName"; the "undefined" arguments are to be defined / filled in later within CreateInput class' methods
        const inputHTML = new CreateInput(input, undefined, "field", "div", undefined);
        inputsArray.push(inputHTML);
    }
    // REORDER inputsArray to ensure the right order of the given select / input tags
    inputsArray.some((el, ind) => {
        if (el.selectObj.id === "order") {
            let last = inputsArray[inputsArray.length - 1];
            inputsArray[inputsArray.length - 1] = el;
            inputsArray[ind] = last;
        }
        else if (el.selectObj.id === "personTitle") {
            const part1 = inputsArray.slice(0, ind);
            const part2 = inputsArray.slice(ind + 1, inputsArray.length - 1);
            const last = inputsArray.slice(inputsArray.length - 1);
            inputsArray = [...part1, ...part2, el, ...last];
        }
        else if (el.selectObj.id === "task") {
            let first = inputsArray[0];
            inputsArray[0] = el;
            inputsArray[ind] = first;
        }
        else if (el.selectObj.id === "start") {
            let second = inputsArray[1];
            inputsArray[1] = el;
            inputsArray[ind] = second;
        }
    });
    // CLEAR all previous tags and values from the 'formContainer'
    formContainer.innerHTML = "";
    const form2 = document.createElement("form");
    // invoke createInp() method of the CreateInput class to get each INPUT / SELECT TAG along with LABEL embraced into WRAPP TAG
    inputsArray.forEach((el) => {
        const inputInWrapp = el.createInp();
        form2.appendChild(inputInWrapp);
    });
    // create a SUBMIT BUTTON
    const btnSub = document.createElement("button");
    btnSub.type = "submit";
    btnSub.innerText = "Submit";
    btnSub.classList.add("btn-submit", "shadow-mid-dark");
    // append SUBMIT BUTTON to FORM
    form2.appendChild(btnSub);
    // append FORM to DIV with a class 'form-container'
    formContainer.append(form2);
    // create a RESET BUTTON to RESTORE the START FORM
    const reset = document.createElement("button");
    reset.type = "button";
    reset.innerText = "Reset";
    reset.classList.add("reset", "shadow-mid-dark");
    // append RESET BUTTON directly to DIV with a class 'form-container'
    formContainer.append(reset);
    // add event listener for the RESET BUTTON
    reset.addEventListener("click", (ev) => {
        ev.preventDefault();
        createStartForm(inputProps);
    });
    // --------- ********* ----------
    // 2) handle submitted values from START FORM to CREATE A target NEW FORM
    // add event listener for the NEW FORM
    form2.addEventListener("submit", (e) => {
        e.preventDefault();
        // create an instance of class "ObjectWithFormValues" - this instance will have props including: "inputsArray" array where two kind of objects are held: 'selectHTML' and 'inputHTML', both containing an object "select" or "input" including all their props and values, plus name of the "wrappClassName", and name of the "wrappTagName", as well as "formVersion" ("type.value") containing information which form has been choosen by the client
        const formAll = new ObjectWithFormValues(inputsArray, type.value);
        handleSubmitForm(e, formAll);
    });
};
// handle with submitted values from the NEW FORM
const handleSubmitForm = (e, formAll) => {
    var _a;
    e.preventDefault();
    // create a MAP OBJECT where "KEYS" represents ID of particular SELECT / INPUT tags, while "VALUES" - the SELECT / INPUT tags themselves
    const formAllValues = formAll.createMapObjWithFormValues();
    console.log(formAllValues);
    // get a MESSAGE from 'printMsg()' method of the class "ObjectWithFormValues"
    const printText = formAll.printMsg();
    // list template instance
    const ul = document.querySelector("ul");
    // --------- ********* ----------
    // 3) Render submitted values into div.wraper > ul > li
    const list = new ListTemplate(ul);
    if (formAll.formVersion === "Accounting") {
        list.render(printText, formAllValues.get("type").value, formAllValues.get("order").value);
    }
    else if (formAll.formVersion === "Reservation") {
        list.render(printText, formAllValues.get("hotel").value, (_a = formAllValues.get("order")) === null || _a === void 0 ? void 0 : _a.value);
    }
    else {
        list.render(printText, formAllValues.get("task").value, formAllValues.get("order").value);
    }
};
