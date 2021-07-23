// CLASS OF ROW OF BALL needed for BOUNCING ANIMATION AS SPINNER
export class SpinnerBalls {
  constructor(
    public width: number,
    public height: number,
    public noOfBalls: number,
    public className: string,
    public wrappBalls?: HTMLDivElement
  ) {}

  createBall(): Promise<boolean> {
    const wrapp: HTMLDivElement = document.createElement("div");
    wrapp.classList.add("bouncer");
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.noOfBalls; i++) {
        const ball: HTMLDivElement = document.createElement("div");
        ball.style.width = `${this.width - this.width * (i / 10)}px`;
        ball.style.height = `${this.height - this.height * (i / 10)}px`;
        ball.style.opacity = `${1 - i / 10}`;
        ball.style.animationDelay = `0.${i}s`;
        ball.classList.add(`${this.className}`);
        wrapp.appendChild(ball);
        if (i >= this.noOfBalls - 1) {
          this.wrappBalls = wrapp;
          resolve(true);
        }
      }
    });
  }

  getTheBalls(): Promise<HTMLDivElement | undefined> {
    return new Promise((resolve, reject) => {
      this.createBall().then(() => {
        resolve(this.wrappBalls);
      });
    });
  }
}
