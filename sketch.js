let player;

let bgImage;
let playerImage;
let obstacleImage;
let obstacle = [];

let wordClassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.jpg");
  obstacleImage = loadImage("obstacle.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1200, 400);
  player = new Player();
  wordClassifier.classify(hearWord);
}

function hearWord(error, results) {
  if (error) {
    console.error(error);
  }

  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}

function draw() {
  if (random(1) < 0.0091) {
    obstacle.push(new Obstacle());
  }
  background(bgImage);
  player.show();
  player.move();

  for (let obs of obstacle) {
    obs.show();
    obs.move();

    if (player.collided(obs) == true) {
      console.log("game over");
      noLoop();
    }
  }
}
