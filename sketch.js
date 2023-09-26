let smallDiam = 10
let smallSpacing = 40

let largeDiam = 25;
let largeSpacing = 80

function setup() {
  createCanvas(500, 750);
  background(255, 218, 22);

}

function draw() {
  for (let x = 40; x < width; x += smallSpacing) {
    for (let y = 30; y < height; y += smallSpacing) {
      fill ("black")
      ellipse(x, y, smallDiam, smallDiam);
    }
  }
  translate(0, 0)
  for (let x = 0; x < width; x += largeSpacing) {
    for (let y = largeDiam; y < height; y += largeSpacing) {
      fill ("black")
      ellipse(x, y, largeDiam, largeDiam);
    }
  }
  translate(40, 40)
  for (let x = 0; x < width; x += largeSpacing) {
    for (let y = largeDiam; y < height; y += largeSpacing) {
      fill ("black")
      ellipse(x, y, largeDiam, largeDiam);
    }
  }

}
