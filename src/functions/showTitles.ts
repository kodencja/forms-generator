import { CreateWheelBoxes } from "../classes/Wheels.js";
import { inputProps } from "../vars/vars.js";
import { createStartForm } from "./createStartForm.js";
import { setFrameWidth } from "./setFrameWidth.js";
import { handleSubmitStartForm } from "./handleSubmitStartForm.js";
import { SpinnerBalls } from "../classes/Spinner.js";

let delay: number;

// 1) Generate the MAIN TITLE PUT inside spinning WHEELS
export const generateMainTitle = (wheelContainer: HTMLElement) => {
  wheelContainer.innerText = "";

  // a class (with promises) which instance's aim is to create and return an array of wheels with letters as HTMLElement (wheelBoxesArr) through a method getWheelBoxes()
  const wheelBoxes = new CreateWheelBoxes("Forms Generator");

  const animTime: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--time-form-anim");
  const animTimeNo: number = parseFloat(animTime) * 1000;
  // call getWheelBoxes() method and loop through a returned array of wheels with letters as HTMLElement (wheelBoxesArr)
  wheelBoxes.getWheelBoxes().then((noOfletters) => {
    wheelBoxes.wheelBoxesArr.forEach((el) => wheelContainer.append(el));
    setFrameWidth(noOfletters);
    delay = (noOfletters - 1) * 400 + animTimeNo + 250;

    window.addEventListener("resize", () => {
      setFrameWidth(noOfletters);
    });

    // CREATE AND SHOW SPINNER
    let ballsSpin: HTMLDivElement;
    const formContainer = document.querySelector(
      ".form-container"
    ) as HTMLElement;
    formContainer.innerHTML = "";

    // 2a) show the spinner
    const spinner = new SpinnerBalls(22, 22, 7, "ball");
    spinner.getTheBalls().then((balls) => {
      balls!.classList.remove("hidden");
      balls!.classList.add("visible");
      ballsSpin = balls!;
      formContainer.append(ballsSpin);
    });

    // 2b) hide SPINNER - 250ms is the time of transition in class 'hidden' of 'ballsSpin'
    setTimeout(() => {
      ballsSpin.classList.remove("visible");
      ballsSpin.classList.add("hidden");
    }, delay - 250);

    // 3) Create a START FORM with ONE select tag with THREE OPTIONS (FORM TYPES): "Accounting", "Hotel booking", "Todo List"; add listener to the form
    setTimeout(() => {
      // "inputProps" is an object with initialized values for all possible inputs, not just for a particular one, therefore all initialized values are put in array []
      ballsSpin.innerHTML = "";
      createStartForm(inputProps, wheelContainer, noOfletters);
    }, delay);
  });
};

// show wheels with new text
export const showSubTitle = (
  type: HTMLSelectElement,
  formContainer: HTMLElement,
  wheelContainer: HTMLElement
) => {
 

  // hide form-container
  formContainer.classList.remove("visible-form");
  formContainer.classList.add("hidden-form");
  formContainer.innerHTML = "";

  // 4a) CREATE AND SHOW SPINNER
  let ballsSpin: HTMLDivElement;
  const spinner = new SpinnerBalls(20, 20, 4, "ball");
  spinner.getTheBalls().then((balls) => {
    balls!.classList.remove("hidden");
    balls!.classList.add("visible");
    ballsSpin = balls!;
    formContainer.append(ballsSpin);
  });

  const animTime: string = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--time-form-anim");
  const animTimeNo: number = parseFloat(animTime) * 1000;

  const wheelBoxes = new CreateWheelBoxes(type.value);
  wheelContainer.innerText = "";
  wheelBoxes.getWheelBoxes().then((noOfLetters) => {
    wheelBoxes.wheelBoxesArr.forEach((el) => wheelContainer.append(el));
    delay = (noOfLetters - 1) * 400 + animTimeNo + 250;
    setFrameWidth(noOfLetters);

    window.addEventListener("resize", () => {
      setFrameWidth(noOfLetters);
    });

    // 4b) hide SPINNER
    setTimeout(() => {
      ballsSpin.classList.remove("visible");
      ballsSpin.classList.add("hidden");
    }, delay - 250);

    // 4) Create a NEW FORM with APPRIOPRIATE NUMBER OF INPUTS AND "SELECTs"
    setTimeout(() => {
      ballsSpin.innerHTML = "";
      handleSubmitStartForm(type, formContainer, wheelContainer, noOfLetters);
    }, delay);
  });
};
