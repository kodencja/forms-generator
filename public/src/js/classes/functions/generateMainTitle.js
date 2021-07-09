"use strict";
// 1) Generate the MAIN TITLE PUT inside spinning WHEELS
const generateMainTitle = (wheelContainer) => {
    wheelContainer.innerText = "";
    // a class (with promises) which instance's aim is to create and return an array of wheels with letters as HTMLElement (wheelBoxesArr) through a method getWheelBoxes()
    const wheelBoxes = new CreateWheelBoxes("Forms Generator");
    const animTime = getComputedStyle(document.documentElement).getPropertyValue('--time-form-anim');
    const animTimeNo = parseFloat(animTime) * 1000;
    // call getWheelBoxes() method and loop through a returned array of wheels with letters as HTMLElement (wheelBoxesArr)
    wheelBoxes.getWheelBoxes().then((noOfletters) => {
        wheelBoxes.wheelBoxesArr.forEach(el => wheelContainer.append(el));
        delay = ((noOfletters - 1) * 400) + animTimeNo + 250;
        setFrameWidth(noOfletters);
        window.addEventListener("resize", () => {
            setFrameWidth(noOfletters);
        });
        // 3) Create a START FORM with ONE select tag with THREE OPTIONS (FORM TYPES): "Accounting", "Hotel booking", "Todo List"; add listener to the form
        setTimeout(() => {
            // "inputProps" is an object with initialized values for all possible inputs, not just for a particular one, therefore all initialized values are put in array []
            createStartForm(inputProps, wheelContainer, noOfletters);
        }, delay);
    });
};
