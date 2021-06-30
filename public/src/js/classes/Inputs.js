// an abstract class with most important props needed to create an input
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
// a class, which instances create an object with all values needed for a "select" or "input" TAG
export class GenerateInputProps extends InputClass {
    constructor(labelText, tagName, optionsText = [], optionsValue = [], optionsClass, type, id, className, value, placeholder) {
        super(labelText, tagName, type, id, className, value, placeholder);
        this.optionsText = optionsText;
        this.optionsValue = optionsValue;
        this.optionsClass = optionsClass;
    }
}
// a class, which instances create an object with an object "selectObj" containing props and values needed to create a particular "select" or "input" TAG, plus name of the "wrappClassName", and name of the "wrappTagName"; the props "options" and "wrapp" are HTMLElements or an array of HTMLElements
export class CreateInput {
    constructor(selectObj, options = [], wrappClassName, wrappTagName, wrapp) {
        this.selectObj = selectObj;
        this.options = options;
        this.wrappClassName = wrappClassName;
        this.wrappTagName = wrappTagName;
        this.wrapp = wrapp;
    }
    // a method to create INPUT or SELECT TAG along with LABEL embraced into WRAPP TAG
    createInp() {
        const input = document.createElement(this.selectObj.tagName);
        const label = document.createElement("label");
        label.innerHTML = this.selectObj.labelText;
        if (this.selectObj.optionsText && this.selectObj.optionsValue) {
            for (let i = 0; i < this.selectObj.optionsText.length; i++) {
                this.options[i] = document.createElement("option");
                this.options[i].setAttribute("value", this.selectObj.optionsValue[i]);
                this.options[i].innerHTML = this.selectObj.optionsText[i];
                if (this.selectObj.optionsClass) {
                    this.options[i].setAttribute("class", this.selectObj.optionsClass);
                }
                input.append(this.options[i]);
            }
        }
        if (this.selectObj.type) {
            input.setAttribute("type", this.selectObj.type);
        }
        if (this.selectObj.placeholder) {
            if (this.selectObj.tagName === "select") {
                this.options[0].setAttribute("placeholder", this.selectObj.placeholder);
            }
            else {
                input.setAttribute("placeholder", this.selectObj.placeholder);
            }
        }
        if (this.selectObj.id) {
            input.setAttribute("id", this.selectObj.id);
        }
        if (this.selectObj.className) {
            input.setAttribute("class", this.selectObj.className);
        }
        if (this.wrappTagName) {
            this.wrapp = document.createElement(this.wrappTagName);
            if (this.wrappClassName) {
                this.wrapp.setAttribute("class", this.wrappClassName);
            }
            this.wrapp.append(label);
            this.wrapp.append(input);
        }
        return this.wrapp;
    }
}
