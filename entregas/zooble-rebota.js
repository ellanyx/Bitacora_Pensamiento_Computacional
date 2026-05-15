let zob;

  // Posición de zob
  let posX = 180;
  let posY = 0;

  // Variable para guardar la dirección
  let dirY = 1;

  // Velocidad de zob
  let vel = 2;

  // Color del fondo
  let fondo = 0;

  function setup() {
  createCanvas(500, 380);
  colorMode(HSB, 360, 100, 100);
  zob = loadImage("./zooble.png");
  room = loadImage("./zooble-room.webp");
}

function draw() {

  background(fondo, 100, 100);
  image(room, mouseX, mouseY, 60,50)
  image(zob, posX, posY, 120, 140);
  
  // Nueva posición de zob
  posY = posY + vel * dirY;

  // Rebote vertical abajo
  if (posY > height - 140){

  // Cambia la dirección hacia arriba
    dirY = -1;

  // Cambia la velocidad aleatoriamente
    vel = random(1,5);

  // Cambia el color del fondo
    fondo = random(360);
}

  // Rebote vertical arriba
  if (posY < 0){

  // Cambia la dirección hacia abajo
  dirY = 1;

  // Cambia la velocidad aleatoriamente
  vel = random(1,5);

  // Cambia el color del fondo
  fondo = random(360);
  }

}
