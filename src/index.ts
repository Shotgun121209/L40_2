import DinoGame from "./game/DinoGame";

const game = new DinoGame(600, 150);

const keycodes = {
  // up, spacebar
  JUMP: { 38: 1, 32: 1 },
  // down
  DUCK: { 40: 1 },
};

document.addEventListener("keydown", (e) => {
  game.onInput();
});

game.start().then(() => {
  console.log("Game Started")
}).catch ((err) => {
  console.log(err)
})