// import { InputsGeneral } from './../interfaces/InputGeneral';
// import { PrintFormat } from "./../interfaces/InputGeneral";
/*
1. register a list container (ul) in the constructor
2. create a render method to render a new 'li' in the container:
    -- accepts arguments: invoice or payment, a heading, a position
    -- create a html template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/
export class ListTemplate {
    // HTMLUListElement means unordered list
    constructor(container) {
        this.container = container;
    }
    // 'pos' must be a string type with either 'top' or 'bottom' value;
    render(text, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerHTML = text;
        const resText = p.textContent;
        p.innerHTML = resText;
        // p.append(text);
        li.append(p);
        if (pos === 'bottom') {
            this.container.append(li);
        }
        else {
            // PREPEND - put it on the start / beginning
            this.container.prepend(li);
        }
    }
}
