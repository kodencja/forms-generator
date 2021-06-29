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
    // 'pos' must be a string type with either 'start' or 'end' value; 'item' - it is a new Invoice or new Payment object
    // render(text: string, heading: string, pos: string = 'top' || 'bottom'){
    render(text, heading, pos) {
        // render(item: HasFormatter, heading: string, pos: string){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        // Invoice and Payments classes are needed just to this - to invoke format() method and provide content for 'innerText' of 'p'
        p.innerHTML = text;
        const resText = p.textContent;
        console.log(resText);
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
