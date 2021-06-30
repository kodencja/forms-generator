import { MapType, SelectOrInput, ObjWithFormVal } from "./../interfaces/InputGeneral";
import { CreateInput } from "./Inputs";

// create an class "ObjectWithFormValues", which instances will have props including: "inputsArray" array where two kind of objects are held: 'selectHTML' and 'inputHTML', both containing an object "select" or "input" including all their props and values, plus name of the "wrappClassName", and name of the "wrappTagName", as well as "formVersion" ("type.value") containing information which form has been choosen by the client
// main tasks of this class is to return a MAP OBJECT and a MESSAGE that will include all necessary values from the NEW FORM 
export class ObjectWithFormValues implements ObjWithFormVal {
    constructor(
      public inputsArray: CreateInput<string[]>[],
      public formVersion: string,
      public formObj: MapType = new Map<string, SelectOrInput>()
    ) {}
  
  
     // create a MAP OBJECT where "KEYS" represents ID of particular SELECT / INPUT tags, while "VALUES" - the SELECT / INPUT tags themselves, both taken from "inputsArray" particular elements
    createMapObjWithFormValues(): Map<string, HTMLSelectElement | HTMLInputElement> {
      this.inputsArray.forEach((el) => {
        this.formObj.set(
          el.selectObj.id!,
          document.querySelector(`#${el.selectObj.id}`)!
        );
      });
      return this.formObj;
    }
  
  
    // get a MESSAGE, including all necessary values from the NEW FORM, that then will be put into a paragraph of "li" of UL list via an instance of the ListTemplate class
    printMsg(): string {
        if(this.formObj.size <= 0){
            this.createMapObjWithFormValues();
        }
  
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
          msg = `My new task is:  &lt;b&gt;${
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
  