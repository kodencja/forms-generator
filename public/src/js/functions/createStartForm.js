import { CreateInput, GenerateInputProps, } from "../classes/Inputs.js";
import { setFrameWidth } from "./setFrameWidth.js";
import { showSubTitle } from "./showTitles.js";
// 3) Create a START FORM with ONE select tag with THREE OPTIONS (FORM TYPES): "Accounting", "Hotel booking", "Todo List"; add listener to the form
export const createStartForm = (formInputProps, wheelContainer, noOfletters) => {
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
    // const mainTitle = document.querySelector("#wrapper h1") as HTMLElement;
    // const wheelContainer = document.querySelector(".wheel-container") as HTMLElement;
    const itemList = document.querySelector("#wrapper ul");
    const formContainer = document.querySelector(".form-container");
    // CLEAR all previous tags and values from the 'formContainer' and 'itemList'
    formContainer.innerHTML = "";
    itemList.innerHTML = "";
    // create / resume main title innerText
    // mainTitle.innerText = "Forms";
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
    // make form-container visible
    formContainer.classList.remove("hidden-form");
    formContainer.classList.add("visible-form");
    // catch a new-created SELECT INPUT of type of the form
    const formType = document.querySelector("#form-type");
    // create event listener for the START FORM
    form1.addEventListener("submit", (event) => {
        event.stopPropagation();
        event.preventDefault();
        window.removeEventListener("resize", () => {
            setFrameWidth(noOfletters);
        });
        showSubTitle(formType, formContainer, wheelContainer);
    }, { once: true });
};
