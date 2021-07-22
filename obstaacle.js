class Obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }

  show() {
    // rect(this.x, this.y, 100, 100);
    image(obstacleImage, this.x, this.y, 50, 50);
  }
  move() {
    this.x = this.x - 10;
  }
}
