import { ObjectWithFormValues } from "../classes/FormValues.js";
import { CreateInput, GenerateInputProps } from "../classes/Inputs.js";
import { inputProps } from "../vars/vars.js";
import { handleSubmitForm } from "./handleSubmitForm.js";
import { setFrameWidth } from "./setFrameWidth.js";
import { generateMainTitle } from "./showTitles.js";

// 4) HANDLE WITH SUBMITTED VALUES from the START FORM to CREATE A NEW FORM WITH NEW INPUTS
export const handleSubmitStartForm = (
    type: HTMLSelectElement,
    formContainer: HTMLElement,
    wheelContainer: HTMLElement,
    noOfLetters:number
  ): void => {
  
    // to make form-container visible
    formContainer.classList.remove("hidden-form");
    formContainer.classList.add("visible-form");
  
    // 'inputProps' is an object with initialized values for all possible inputs, not just for a particular one, therefore all initialized values are put in an array []
    // attached the appriopriate values for props for the object 'inputProps' according to a value coming from the SELECT INPUT from the START FORM
    if (type.value === "Accounting") {
      inputProps.labelSelect = ["Type", "Order"];
      inputProps.selectID = ["type", "order"];
      inputProps.optionsText = [
        ["Invoice", "Payment"],
        ["Top", "Bottom"],
      ];
      inputProps.optionsValue = [
        ["invoice", "payment"],
        ["top", "bottom"],
      ];
  
      inputProps.labelInput = ["To / From", "Details", "Amount ($)"];
      inputProps.inputID = ["tofrom", "details", "amount"];
      inputProps.placeholder = [
        "Write a name of the right person",
        "Write details about the transaction",
        undefined,
      ];
      inputProps.types = ["text", "text", "number"];
    } else if (type.value === "Reservation") {
      inputProps.labelSelect = [
        "Hotel",
        "Standard",
        "Room categ.",
        "No of ppl",
        "Title",
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
  
      inputProps.labelInput = ["From", "To", "Name & Surname"];
      inputProps.inputID = ["from", "to", "customer"];
      inputProps.placeholder = [undefined, undefined, "Write your full name"];
      inputProps.types = ["date", "date", "text"];
    } else {
      inputProps.labelSelect = ["Order"];
      inputProps.selectID = ["order"];
      inputProps.optionsText = [["Top", "Bottom"]];
      inputProps.optionsValue = [["top", "bottom"]];
  
      inputProps.labelInput = ["Task", "Start", "Deadline"];
      inputProps.inputID = ["task", "start", "deadline"];
      inputProps.placeholder = ["What to do", undefined, undefined];
      inputProps.types = ["text", "date", "date"];
    }
  
    // INITIALIZED an empty array where two kinds of object will be held: 'selectHTML' and 'inputHTML', both containing an object "select" or "input" including props and values needed to create a particular Select or Input TAG, plus name of the "wrappClassName", and name of the "wrappTagName"
    let inputsArray: CreateInput<string[]>[] = [];
  
    // looping over inputProps.labelSelect.length to create object with props for SELECT tag - "select" - and an object "selectHTML" with some aditional props and values needed to embrace the 'select' tag in a wrapp div
    for (let i = 0; i < inputProps.labelSelect.length; i++) {
      // create an object with all values needed for a "select" TAG taken from the object "inputProps"
      const select: GenerateInputProps<string[]> = new GenerateInputProps<
        string[]
      >(
        inputProps.labelSelect[i],
        "select",
        inputProps.optionsText[i],
        inputProps.optionsValue[i],
        "option",
        undefined,
        inputProps.selectID[i],
        "select",
        undefined,
        undefined
      );
  
      // create an object with an object "select" containing props and values needed to create a particular Select Input, plus name of the "wrappClassName", and name of the "wrappTagName"; the "undefined" arguments are to be defined / filled in later within CreateInput class' methods
      const selectHTML = new CreateInput<string[]>(
        select,
        undefined,
        "field",
        "div",
        undefined
      );
      inputsArray.push(selectHTML);
    }
  
    // looping over inputProps.labelSelect.length to create object with props for INPUT tag - "input" - and an object "inputHTML" with some aditional props and values needed to embrace the 'select' tag in a wrapp div
    for (let i = 0; i < inputProps.labelInput.length; i++) {
      // create an object with all values needed for a "select" TAG taken from the object "inputProps"
      const input: GenerateInputProps<string[]> = new GenerateInputProps<
        string[]
      >(
        inputProps.labelInput[i],
        "input",
        undefined,
        undefined,
        undefined,
        inputProps.types[i],
        inputProps.inputID[i],
        "input-primary",
        undefined,
        inputProps.placeholder[i]
      );
  
      // create an object "inputHTML" with an object "input" containing props and values needed to create a particular  Input, plus name of the "wrappClassName", and name of the "wrappTagName"; the "undefined" arguments are to be defined / filled in later within CreateInput class' methods
      const inputHTML = new CreateInput<string[]>(
        input,
        undefined,
        "field",
        "div",
        undefined
      );
      inputsArray.push(inputHTML);
    }
  
    // REORDER inputsArray to ensure the right order of the given select / input tags
    inputsArray.some((el, ind) => {
      if (el.selectObj.id === "order") {
        let last = inputsArray[inputsArray.length - 1];
        inputsArray[inputsArray.length - 1] = el;
        inputsArray[ind] = last;
      } else if (el.selectObj.id === "personTitle") {
        const part1 = inputsArray.slice(0, ind);
        const part2 = inputsArray.slice(ind + 1, inputsArray.length - 1);
        const last = inputsArray.slice(inputsArray.length - 1);
        inputsArray = [...part1, ...part2, el, ...last];
      } else if (el.selectObj.id === "task") {
        let first = inputsArray[0];
        inputsArray[0] = el;
        inputsArray[ind] = first;
      } else if (el.selectObj.id === "start") {
        let second = inputsArray[1];
        inputsArray[1] = el;
        inputsArray[ind] = second;
      }
    });
  
    // CLEAR all previous tags and values from the 'formContainer'
    // formContainer.innerHTML = "";
    const form2 = document.createElement("form");
  
    // invoke createInp() method of the CreateInput class to get each INPUT / SELECT TAG along with LABEL embraced into WRAPP TAG
    inputsArray.forEach((el) => {
      const inputInWrapp = el.createInp()!;
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
  
    // list template instance
    const ul = document.querySelector("ul")!;
    // add event listener for the RESET BUTTON
    reset.addEventListener("click", (ev: Event): void => {
      ev.preventDefault();
      window.removeEventListener("resize", ()=>{
        setFrameWidth(noOfLetters);
      })
      formContainer.classList.remove("visible-form");
    formContainer.classList.add("hidden-form");
   ul.innerHTML = "";
      generateMainTitle(wheelContainer);
      // createStartForm(inputProps, wheelContainer);
    });
  
  
  // --------- ********* ----------
  
  // 5) handle with submitted values from the NEW FORM
  
    // add event listener for the NEW FORM
    form2.addEventListener("submit", (e: Event) => {
      e.preventDefault();
  
      // create an instance of class "ObjectWithFormValues" - this instance will have props including: "inputsArray" array where two kind of objects are held: 'selectHTML' and 'inputHTML', both containing an object "select" or "input" including all their props and values, plus name of the "wrappClassName", and name of the "wrappTagName", as well as "formVersion" ("type.value") containing information which form has been choosen by the client
      const formAll = new ObjectWithFormValues(inputsArray, type.value);
  
      handleSubmitForm(e, formAll, ul);
    });
  };