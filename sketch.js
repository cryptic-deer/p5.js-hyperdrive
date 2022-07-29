// instructions
// mouse move to the left -> rotate counterclockwise
// mouse move to the right -> rotate closewise

// declarations
const gap = 15;
const cirNum = 40;
const cirSize = 25;
const numOfPoints = 100;
const rectSize = 700;

let angle = 0;

// setup is to initiate the whole program -> only runs once
function setup() {
	// fullscreen canvas
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

// loops indefinitely
function draw() {
	// set main background color
	background("#2C3333");
	// customize mouse
	noCursor();
	noStroke();
	fill("#FAEA48");
	circle(mouseX, mouseY, 10);

	// MAIN GRAPH
	// push and pop blocks the translate and rotate functions inside them,...
	// ...so they don't interfere with anything outside
	push();
	// center on page
	translate(width / 2, height / 2);
	// set rotation speed on mouse movement
	rotate(angle);
	angle = angle + map(mouseX, 0, width, -0.5, 0.5);
	// style graph
	noFill();
	stroke("#37E2D5");
	strokeWeight(2);
	// draw the set number of circless
	for (let i = 0; i < cirNum; i++) {
		arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
	}
	pop();

	// TITLE & SUBTITLE
	push();
	// set position
	translate(width / 2, height - 175);
	// set font details
	noStroke();
	textFont("Poppins");
	textAlign(CENTER, CENTER);
	fill("#F1F1F1");
	// title
	textSize(40);
	text("HYPERDRIVE", 0, 0);
	// subtitle
	textSize(16);
	text(
		"Problem:  This universe doesn't seem to allow faster-than-light travel.",
		0,
		45
	);
	text("Solution:  Well, just don't travel through our universe. Duh.", 0, 70);
	pop();

	// BORDER
	push();
	// set position
	translate(width / 2, height / 2);
	// style
	noFill();
	stroke("#B25068");
	strokeWeight(2);
	// set border size
	rectMode(CENTER);
	rect(0, 0, rectSize, rectSize);

	//random noise as background
	stroke("#FAEA48");
	strokeWeight(2);
	// draw the set amount of points in random places
	for (let i = 0; i < numOfPoints; i++) {
		point(
			random(-rectSize / 2, rectSize / 2),
			random(-rectSize / 2, rectSize / 2)
		);
	}
	pop();
}
