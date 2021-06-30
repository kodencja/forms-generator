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
export class GenerateInputProps extends InputClass {
    constructor(labelText, tagName, optionsText = [], optionsValue = [], optionsClass, type, id, className, value, placeholder) {
        super(labelText, tagName, type, id, className, value, placeholder);
        this.optionsText = optionsText;
        this.optionsValue = optionsValue;
        this.optionsClass = optionsClass;
    }
}
export class CreateInput {
    constructor(selectObj, options = [], wrappClassName, wrappTagName, wrapp) {
        this.selectObj = selectObj;
        this.options = options;
        this.wrappClassName = wrappClassName;
        this.wrappTagName = wrappTagName;
        this.wrapp = wrapp;
    }
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
export class ObjectWithFormValues {
    constructor(inputsArray, formVersion, formObj = new Map()) {
        this.inputsArray = inputsArray;
        this.formVersion = formVersion;
        this.formObj = formObj;
    }
    createMapObjWithFormValues() {
        this.inputsArray.forEach((el) => {
            this.formObj.set(el.selectObj.id, document.querySelector(`#${el.selectObj.id}`));
        });
        return this.formObj;
    }
    printMsg() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        this.createMapObjWithFormValues();
        let msg;
        switch (this.formVersion) {
            case "Accounting":
                if (((_a = this.formObj.get("type")) === null || _a === void 0 ? void 0 : _a.value) === "payment") {
                    msg = `&lt;strong&gt;${(_b = this.formObj.get("tofrom")) === null || _b === void 0 ? void 0 : _b.value}&lt;/strong&gt; is owed &lt;b&gt;$${(_c = this.formObj.get("amount")) === null || _c === void 0 ? void 0 : _c.value}&lt;/b&gt; for &lt;b&gt;${(_d = this.formObj.get("details")) === null || _d === void 0 ? void 0 : _d.value}&lt;/b&gt;`;
                    break;
                }
                else {
                    msg = `&lt;b&gt;${(_e = this.formObj.get("tofrom")) === null || _e === void 0 ? void 0 : _e.value}&lt;/b&gt; owes &lt;b&gt;$${(_f = this.formObj.get("amount")) === null || _f === void 0 ? void 0 : _f.value}&lt;/b&gt; for &lt;b&gt;${(_g = this.formObj.get("details")) === null || _g === void 0 ? void 0 : _g.value}&lt;/b&gt;`;
                    break;
                }
            case "Reservation":
                let have;
                if (this.formObj.get("personTitle").value === 'Mr and Mrs') {
                    have = 'have';
                }
                else {
                    have = 'has';
                }
                msg = `&lt;b&gt;${(_h = this.formObj.get("personTitle")) === null || _h === void 0 ? void 0 : _h.value}&lt;/b&gt; &lt;b&gt;${(_j = this.formObj.get("customer")) === null || _j === void 0 ? void 0 : _j.value}&lt;/b&gt; ${have} booked a &lt;b&gt;${(_k = this.formObj.get("version")) === null || _k === void 0 ? void 0 : _k.value}&lt;/b&gt; &lt;b&gt;${(_l = this.formObj.get("roomCat")) === null || _l === void 0 ? void 0 : _l.value}&lt;/b&gt; room for &lt;b&gt;${(_m = this.formObj.get("peopleNo")) === null || _m === void 0 ? void 0 : _m.value}&lt;/b&gt; people in &lt;b&gt;${(_o = this.formObj.get("hotel")) === null || _o === void 0 ? void 0 : _o.value}&lt;/b&gt; hotel from &lt;b&gt;${(_p = this.formObj.get("from")) === null || _p === void 0 ? void 0 : _p.value}&lt;/b&gt; to &lt;b&gt;${(_q = this.formObj.get("to")) === null || _q === void 0 ? void 0 : _q.value}&lt;/b&gt;`;
                break;
            case "Todo-List":
                msg = `My new task is to &lt;b&gt;${(_r = this.formObj.get("task")) === null || _r === void 0 ? void 0 : _r.value}&lt;/b&gt;. It begins on &lt;b&gt;${(_s = this.formObj.get("start")) === null || _s === void 0 ? void 0 : _s.value}&lt;/b&gt; and must be accomplished by &lt;b&gt;${(_t = this.formObj.get("deadline")) === null || _t === void 0 ? void 0 : _t.value}&lt;/b&gt;`;
                break;
            default:
                msg = `&lt;b&gt;${(_u = this.formObj.get("tofrom")) === null || _u === void 0 ? void 0 : _u.value}&lt;/b&gt; owes &lt;b&gt;$${(_v = this.formObj.get("amount")) === null || _v === void 0 ? void 0 : _v.value}&lt;/b&gt; for &lt;b&gt;${(_w = this.formObj.get("details")) === null || _w === void 0 ? void 0 : _w.value}&lt;/b&gt;`;
                break;
        }
        return msg;
    }
}
