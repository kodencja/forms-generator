import { ListTemplate } from "../classes/ListTemplate.js";
// 5) handle with submitted values from the NEW FORM
export const handleSubmitForm = (e, formAll, ul) => {
    var _a;
    e.preventDefault();
    // create a MAP OBJECT where "KEYS" represents ID of particular SELECT / INPUT tags, while "VALUES" - the SELECT / INPUT tags themselves
    const formAllValues = formAll.createMapObjWithFormValues();
    console.log(formAllValues);
    ul.classList.add("visible-form");
    ul.classList.remove("hidden-form");
    // get a MESSAGE from 'printMsg()' method of the class "ObjectWithFormValues"
    const printText = formAll.printMsg();
    // --------- ********* ----------
    // 6) Render submitted values into div.wraper > ul > li
    // list template instance  
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
