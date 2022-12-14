function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");
    drawSmiley(2);


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
   // fill('red');
    //circle(550, 100, 100);
    //fill('yellow');
    //circle(700, 400, 600);

    // https://p5js.org/reference/#/p5/ellipse
     //fill('teal');
    //ellipse(100, 200, 60, 100);
   // fill('black');
   // ellipse(600, 300, 60, 100);

  //  fill('black');
   // ellipse(800, 300, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect

    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


function drawSmiley(diameter) {
    fill('yellow');
    circle(400, 400, diameter);
}