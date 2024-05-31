//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let currentPalette;

function setup() {
    createCanvas(windowWidth, windowHeight / 2);
    noStroke();
    background("white");
}

function draw() {
    
    drawLand();
}

function mouseClicked() {
    background(255);
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}
