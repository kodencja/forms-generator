// a class (with promises) which instance's aim is to create and return an array of wheels with letters as HTMLElement (wheelBoxesArr) through a method getWheelBoxes()
export class CreateWheelBoxes {
    constructor(title, titleArr = [], arrDrawTo = [], arrOfArrDrawTo = [], wheelBoxesArr = []) {
        this.title = title;
        this.titleArr = titleArr;
        this.arrDrawTo = arrDrawTo;
        this.arrOfArrDrawTo = arrOfArrDrawTo;
        this.wheelBoxesArr = wheelBoxesArr;
    }
    convertTitleIntoArray() {
        return new Promise((resolve, reject) => {
            const splitTitle = this.title.split("");
            this.titleArr = splitTitle;
            resolve(splitTitle);
            return true;
        });
    }
    randomLetters(letter, ind) {
        return new Promise((resolve, reject) => {
            const arrDrawFrom = [...this.titleArr];
            let arrFromLength = arrDrawFrom.length;
            let howManyToDraw = 5;
            let indArrTo = 1;
            let prevLetter = letter;
            this.arrDrawTo = [];
            this.arrDrawTo.push(letter);
            while (howManyToDraw > 0) {
                const randomIndex = Math.floor(Math.random() * arrFromLength);
                if (randomIndex !== ind && arrDrawFrom[randomIndex] !== " " && arrDrawFrom[randomIndex] !== prevLetter) {
                    this.arrDrawTo[indArrTo] = arrDrawFrom[randomIndex];
                    prevLetter = arrDrawFrom[randomIndex];
                    arrDrawFrom.splice(randomIndex, 1, arrDrawFrom[arrFromLength - 1]);
                    howManyToDraw--;
                    indArrTo++;
                }
            }
            this.arrOfArrDrawTo.push(this.arrDrawTo);
            resolve(true);
        });
    }
    renderWheelBox(el, ind) {
        const wheel = document.createElement("div");
        const wheelBox = document.createElement("div");
        wheel.classList.add("wheel", `wheel-${ind}`);
        wheel.style.animationDelay = `${ind / 2.5}s`;
        wheelBox.classList.add("wheel-box");
        const p = [];
        const lettersDiv = [];
        const colorsFont = ["deepblue", "forestgreen", "orangered", "blue", "salmon", "gold"];
        for (let i = 0; i < el.length; i++) {
            const randomColorInd = Math.floor(Math.random() * colorsFont.length);
            lettersDiv[i] = document.createElement("div");
            lettersDiv[i].setAttribute("class", "letter");
            lettersDiv[i].style.setProperty('--degree-var', `${60 + 60 * (i + 1)}`);
            if (i === 0) {
                lettersDiv[i].style.color = "#da008a";
            }
            else {
                lettersDiv[i].style.color = colorsFont[randomColorInd];
            }
            p[i] = document.createElement("p");
            p[i].innerText = el[i];
            lettersDiv[i].append(p[i]);
            wheel.appendChild(lettersDiv[i]);
        }
        wheelBox.appendChild(wheel);
        return wheelBox;
    }
    getWheelBoxes() {
        return new Promise((resolve, reject) => {
            this.convertTitleIntoArray().then(() => {
                this.titleArr.forEach((el, ind) => {
                    this.randomLetters(el, ind);
                });
            })
                .then(() => {
                this.arrOfArrDrawTo.forEach((el, ind) => {
                    const wheelBox = this.renderWheelBox(el, ind);
                    this.wheelBoxesArr.push(wheelBox);
                });
            }).then(() => {
                resolve(this.titleArr.length);
            }).catch((error) => {
                console.log(error);
                reject(new Error(error));
            });
        });
    }
}
