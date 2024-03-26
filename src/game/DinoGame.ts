import GameRunner from "./GameRunner";

export default class DinoGame extends GameRunner {

    canvas: HTMLCanvasElement;
    canvasCtx: CanvasRenderingContext2D;
    width: number;
    height: number;

    constructor() {
        super();
        const {canvas, ctx} = this.createCanvas();
        this.canvas = canvas
        this.canvasCtx = ctx!;
        this.width = 0;
        this.height = 0;
    }

    createCanvas() {
        //Create HTML canvas element
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")
        //Canvas width, height & style
        //Append the canvas to HTML doc
        document.body.appendChild(canvas);
        return {canvas, ctx};
    }

    async preload()  {
        //Load assets (eg: images, initial states)
    }

    onInput() {
        //Dino jump
    }

    reset() {
        //Init dino position
        //Init all other objects (eg ground, cactus)
        //Init score
        //restart the game
    }

    onFrame(): void {
        //Draw Background
        this.drawBackground()
        //Draw Ground
        this.drawGround()
        //Draw Cactus
        this.drawCactus()
        //Draw Dino
        this.drawDino()
        //Draw Score
        this.drawScore()

        //Check if game over
    }

    endGame() {
        //stop the game
        this.stop();
        //game over text
    }

    drawBackground() {
        //draw grey rectangle canvas
        this.canvasCtx.fillStyle = "#f7f7f7";
        this.canvasCtx.fillRect(0, 0, this.width, this.height)
    }

    drawGround() {}

    drawCactus() {}

    drawDino() {}

    drawScore() {}
}