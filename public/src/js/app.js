import { CreateInput, ObjectWithFormValues, GenerateInputProps, } from "./classes/Inputs.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { inputProps } from "./vars/vars.js";
document.addEventListener("DOMContentLoaded", (ev) => {
    console.log("document ready!");
    createStartForm(inputProps);
}, false);
const createStartForm = (formInputProps) => {
    formInputProps = {
        labelSelect: ["Choose a form:"],
        selectID: ["form-type"],
        optionsText: [["Accounting", "Hotel booking", "Todo List"]],
        optionsValue: [["Accounting", "Reservation", "Todo-List"]],
    };
    const selectStart = new GenerateInputProps(formInputProps.labelSelect[0], "select", formInputProps.optionsText[0], formInputProps.optionsValue[0], "option", undefined, formInputProps.selectID[0], "select", undefined, undefined);
    const selectStartHTML = new CreateInput(selectStart, undefined, "all-forms", "div", undefined);
    const form1 = document.createElement("form");
    const mainTitle = document.querySelector("#wrapper h1");
    const itemList = document.querySelector("#wrapper ul");
    const formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = "";
    itemList.innerHTML = "";
    mainTitle.innerText = "Forms Generator";
    const selectStartWrap = selectStartHTML.createInp();
    form1.append(selectStartWrap);
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.innerText = "Submit";
    btnSubmit.classList.add("btn-submit", "shadow-mid-dark");
    form1.appendChild(btnSubmit);
    formContainer.appendChild(form1);
    const formType = document.querySelector("#form-type");
    form1.addEventListener("submit", (event) => {
        console.log("FORM1 SUBMITTED");
        event.stopPropagation();
        event.preventDefault();
        handleSubmit(formType, formContainer);
    }, { once: true });
};
const handleSubmit = (type, formContainer) => {
    const mainTitle = document.querySelector("#wrapper h1");
    mainTitle.innerText = type.value;
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
    let inputsArray = [];
    // create object with props for select input
    for (let i = 0; i < inputProps.labelSelect.length; i++) {
        const select = new GenerateInputProps(inputProps.labelSelect[i], "select", inputProps.optionsText[i], inputProps.optionsValue[i], "option", undefined, inputProps.selectID[i], "select", undefined, undefined);
        const selectHTML = new CreateInput(select, undefined, "field", "div", undefined);
        inputsArray.push(selectHTML);
    }
    // create object with props for input
    for (let i = 0; i < inputProps.labelInput.length; i++) {
        const input = new GenerateInputProps(inputProps.labelInput[i], "input", undefined, undefined, undefined, inputProps.types[i], inputProps.inputID[i], "input-primary", undefined, inputProps.placeholder[i]);
        const selectHTML = new CreateInput(input, undefined, "field", "div", undefined);
        inputsArray.push(selectHTML);
    }
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
    formContainer.innerHTML = "";
    const form2 = document.createElement("form");
    inputsArray.forEach((el) => {
        const inputInWrapp = el.createInp();
        form2.appendChild(inputInWrapp);
    });
    const btnSub = document.createElement("button");
    btnSub.type = "submit";
    btnSub.innerText = "Submit";
    btnSub.classList.add("btn-submit", "shadow-mid-dark");
    form2.appendChild(btnSub);
    formContainer.append(form2);
    const reset = document.createElement("button");
    reset.type = "button";
    reset.innerText = "Reset";
    reset.classList.add("reset", "shadow-mid-dark");
    formContainer.append(reset);
    reset.addEventListener("click", (ev) => {
        ev.preventDefault();
        createStartForm(inputProps);
    });
    form2.addEventListener("submit", (e) => {
        e.preventDefault();
        const formAll = new ObjectWithFormValues(inputsArray, type.value);
        handleSubmitForm(e, formAll);
    });
};
const handleSubmitForm = (e, formAll) => {
    var _a;
    e.preventDefault();
    console.log("handleSubmitForm");
    const formAllValues = formAll.createMapObjWithFormValues();
    const printText = formAll.printMsg();
    // list template instance
    const ul = document.querySelector("ul");
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
