import Actor from "./Actor";

export default class Dino extends Actor {
    vVelocity: number | null;
    gravity: number;
    baseY: number;
    relativeY: number;
    lift: number;

    constructor(imageData?:ImageData) {
        super(imageData);
            this.vVelocity = null;
            this.gravity = 0;
            this.baseY = 0;
            this.relativeY = 0;
            this.lift = 0;
    }

        get dy() {
            return this.baseY - this.height + this.
            relativeY;
        }

        jump() {
            if (this.relativeY == 0) {
                this.vVelocity = -this.lift;
                return true;
                }
                else {
                    return false;
                }
        }
        nextFrame() {
            if (this.vVelocity != null) {
                this.vVelocity += this.gravity;
                this.relativeY += this.vVelocity;
            }

            if (this.relativeY >= 0) {
                this.vVelocity = null;
                this.relativeY = 0;
            }
        }
}