"use strict";
// show wheels with new text
const showSubTitle = (type, formContainer, wheelContainer) => {
    formContainer.innerText = "";
    // hide form-container
    formContainer.classList.remove("visible-form");
    formContainer.classList.add("hidden-form");
    const animTime = getComputedStyle(document.documentElement).getPropertyValue('--time-form-anim');
    const animTimeNo = parseFloat(animTime) * 1000;
    const wheelBoxes = new CreateWheelBoxes(type.value);
    wheelContainer.innerText = "";
    wheelBoxes.getWheelBoxes().then((noOfLetters) => {
        wheelBoxes.wheelBoxesArr.forEach(el => wheelContainer.append(el));
        delay = ((noOfLetters - 1) * 400) + animTimeNo + 250;
        setFrameWidth(noOfLetters);
        window.addEventListener("resize", () => {
            setFrameWidth(noOfLetters);
        });
        // 1) Create a NEW FORM with APPRIOPRIATE NUMBER OF INPUTS AND "SELECTs"
        setTimeout(() => {
            handleSubmitStartForm(type, formContainer, wheelContainer, noOfLetters);
        }, delay);
    });
};
