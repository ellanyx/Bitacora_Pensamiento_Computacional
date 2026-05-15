let tinte = 0; // La saturación parte desde el 0 , lo que quiere decir que comenzará a partir del color blanco !

let x = 200;
let y = 200;
let velocidad = 1;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(73, 4, 98);

  let saturacion;
  // Desde el blanco (0) va subiendo hasta el rosa y el fucsia. Se intensifica
  if (tinte < 70) {
    saturacion = tinte;
  }
  
  // Cuando llega al 70, comienza a bajar de vuelta
  if (tinte >= 70) {
    saturacion = 140 - tinte;
  // Invierte para que vuelva a bajar: 70+70=140
  }

  // Movimiento vertical
  y = y + velocidad;

  if (y > 320) {
    velocidad = -1;
  }

  if (y < 80) {
    velocidad = 1;
  }

  // Círculo
  noStroke();
  fill(346, saturacion, 100);

  // Cambio de tamaño con el mouse (mouseX)
  let tamaño = mouseX;

  ellipse(width/2, y, tamaño, tamaño);

  tinte = tinte + 1; // Variable. Por cada frame el tinte aumenta

  if (tinte > 140) {
    tinte = 0;
  // Cuando llegue al final empieza desde 0
  }
  
  // Texto con frameCount
  fill(0, 0, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("han pasado " + frameCount + " gatitos", width/2, height - 20);
}
