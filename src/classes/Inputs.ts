import { InputsGeneral, MapType1, MapType2, ObjWithFormVal } from "./../interfaces/InputGeneral";

abstract class InputClass<T extends string | string[]>
  implements InputsGeneral
{
  constructor(
    public labelText: string,
    public tagName: string,
    public type?: string,
    public id?: string,
    public className?: string,
    public value?: T,
    public placeholder?: string
  ) {}

  get valueInp() {
    return this.value;
  }
}

export class GenerateInputProps<
  T extends string | string[]
> extends InputClass<T> {
  constructor(
    labelText: string,
    tagName: string,
    public optionsText: string[] = [],
    public optionsValue: string[] = [],
    public optionsClass?: string,
    type?: string,
    id?: string,
    className?: string,
    value?: T,
    placeholder?: string
  ) {
    super(labelText, tagName, type, id, className, value, placeholder);
  }

}

export class CreateInput<T extends string[]> {
  constructor(
    public selectObj: {
      labelText: string;
      tagName: string;
      optionsText?: string[];
      optionsValue?: T;
      optionsClass?: string;
      type?: string;
      id?: string;
      className?: string;
      value?: T;
      placeholder?: string;
    },
    public options: HTMLElement[] = [],
    public wrappClassName?: string,
    public wrappTagName?: string,
    public wrapp?: HTMLElement | null
  ) {}

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
      } else {
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

export class ObjectWithFormValues implements ObjWithFormVal {
  constructor(
    public inputsArray: CreateInput<string[]>[],
    public formVersion: string,
    public formObj: MapType1 = new Map<string, MapType2>()
  ) {}

  createMapObjWithFormValues(): Map<string, HTMLSelectElement | HTMLInputElement> {
    this.inputsArray.forEach((el) => {
      this.formObj.set(
        el.selectObj.id!,
        document.querySelector(`#${el.selectObj.id}`)!
      );
    });
    return this.formObj;
  }

  printMsg(): string {
    this.createMapObjWithFormValues();

    let msg: string;

    switch (this.formVersion) {
      case "Accounting":
        if (this.formObj.get("type")?.value === "payment") {
          msg = `&lt;strong&gt;${this.formObj.get("tofrom")?.value}&lt;/strong&gt; is owed &lt;b&gt;$${
            this.formObj.get("amount")?.value
          }&lt;/b&gt; for &lt;b&gt;${this.formObj.get("details")?.value}&lt;/b&gt;`;
          break;
        } else {
          msg = `&lt;b&gt;${this.formObj.get("tofrom")?.value}&lt;/b&gt; owes &lt;b&gt;$${
            this.formObj.get("amount")?.value
          }&lt;/b&gt; for &lt;b&gt;${this.formObj.get("details")?.value}&lt;/b&gt;`;
          break;
        }

      case "Reservation":
        let have: string;
        if(this.formObj.get("personTitle")!.value === 'Mr and Mrs'){
          have = 'have';
        } else {
          have = 'has';
        }
        msg = `&lt;b&gt;${this.formObj.get("personTitle")?.value}&lt;/b&gt; &lt;b&gt;${
          this.formObj.get("customer")?.value
        }&lt;/b&gt; ${have} booked a &lt;b&gt;${this.formObj.get("version")?.value}&lt;/b&gt; &lt;b&gt;${
          this.formObj.get("roomCat")?.value
        }&lt;/b&gt; room for &lt;b&gt;${this.formObj.get("peopleNo")?.value}&lt;/b&gt; people in &lt;b&gt;${
          this.formObj.get("hotel")?.value
        }&lt;/b&gt; hotel from &lt;b&gt;${this.formObj.get("from")?.value}&lt;/b&gt; to &lt;b&gt;${
          this.formObj.get("to")?.value
        }&lt;/b&gt;`;
        break;

      case "Todo-List":
        msg = `My new task is to &lt;b&gt;${
          this.formObj.get("task")?.value
        }&lt;/b&gt;. It begins on &lt;b&gt;${
          this.formObj.get("start")?.value
        }&lt;/b&gt; and must be accomplished by &lt;b&gt;${this.formObj.get("deadline")?.value}&lt;/b&gt;`;
        break;

      default:
        msg = `&lt;b&gt;${this.formObj.get("tofrom")?.value}&lt;/b&gt; owes &lt;b&gt;$${
          this.formObj.get("amount")?.value
        }&lt;/b&gt; for &lt;b&gt;${this.formObj.get("details")?.value}&lt;/b&gt;`;
        break;
    }

    return msg;
  }
}
