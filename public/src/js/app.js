import { generateMainTitle } from "./functions/showTitles.js";
/*

1) Generate A TITLE PUT inside spinning WHEELS

2) SET WIDTH OF a div .frame adjusted to the width of .wheel-box

2a) SHOW SPINNER
2b) HIDE SPINNER

3) Create a START FORM with ONE select tag with THREE OPTIONS (FORM TYPES): "Accounting", "Hotel booking", "Todo List"; add listener to the form

4) handle submitted values from START FORM to CREATE A target NEW FORM

4a) SHOW SPINNER
4b) HIDE SPINNER

5) handle with submitted values from the NEW FORM

6) Render submitted values into div.wraper > ul > li

*/
document.addEventListener("DOMContentLoaded", (ev) => {
    const wheelContainer = document.querySelector(".wheel-container");
    generateMainTitle(wheelContainer);
}, false);
