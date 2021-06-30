/* 
A class which task is to render a message generated from the method 'printMsg()' within "ObjectWithFormValues" class

1. register a list container (ul) in the constructor
2. create a render method to render a new 'li' in the container:
    -- accepts arguments: a text, a heading, a position
    -- create a html template (li, h4, p)
    -- add the 'li' template to the top/bottom of the list
*/

export class ListTemplate {
  // HTMLUListElement means unordered list
  constructor(private container: HTMLUListElement) {}
  // 'pos' must be a string type with either 'top' or 'bottom' value;
  render(text: string, heading: string, pos?: string) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerHTML = heading;
    li.append(h4);

    const p = document.createElement("p");

    p.innerHTML = text;
    
    // I use "textContent" to read HTML tags hidden a string variable "text"
    const resText = p.textContent!;
    p.innerHTML = resText;
    li.append(p);

    if (pos === "bottom") {
      this.container.append(li);
    } else {
      // PREPEND - put it on the start / beginning
      this.container.prepend(li);
    }
  }
}
