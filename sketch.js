var player;
var liberty
var jetImage;
var libertyImage;
var bomb
var bombGroup
var edif1
var edif2
var edif3
var edif4
var edif5
var edif6
var edif7
var edif1Image
var edif2Image
var edif3Image
var edif4Image
var edif5Image
var edif6Image
var edif7Image

function preload() {
  jetImage = loadImage("assets/jetbody.png");
  libertyImage = loadImage("assets/liberty.png");
  bombImage = loadImage("assets/jet_02.png");
  edif1Image = loadImage("assets/edif_01.png");
  edif2Image = loadImage("assets/edif_02.png");
  edif3Image = loadImage("assets/edif_03.png");
  edif4Image = loadImage("assets/edif_04.png");
  edif5Image = loadImage("assets/edif_05.png");
  edif6Image = loadImage("assets/edif_06.png");
  edif7Image = loadImage("assets/edif_07.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ;
  player = createSprite(windowWidth / 2, windowHeight / 2);
  player.addAnimation("jetbody", jetImage);
  player.scale = 0.4

  liberty = createSprite(windowWidth / 2 - 850, windowHeight - 230);
  liberty.addAnimation("liberty", libertyImage);
  liberty.scale = 0.5

  bombGroup = new Group();

  edif1 = createSprite(windowWidth -700,windowHeight);
  edif2 = createSprite(windowWidth -650,windowHeight);
  edif3 = createSprite(windowWidth -600,windowHeight);
  edif4 = createSprite(windowWidth -550,windowHeight);
  edif5 = createSprite(windowWidth -500,windowHeight);
  edif6 = createSprite(windowWidth -450,windowHeight);
  edif7 = createSprite(windowWidth -400,windowHeight);
}

function draw() {
  edges = createEdgeSprites();

  background("lightblue");

  drawSprites();

  if (keyDown("w")) {
    player.y = player.y - 12
  }
  if (keyDown("s")) {
    player.y = player.y + 12
  }
  if (keyDown("a")) {
    player.x = player.x - 12
  }
  if (keyDown("d")) {
    player.x = player.x + 12
  }

  player.bounceOff(edges);

  spawnBomb();

}

function spawnBomb() {
  if (frameCount % 30 === 0) {
    var num = Math.round(random(0, windowWidth))
    var bomb = createSprite(num, -20);
    bomb.velocityY = 8
    var inr = Math.round(random(-1, 1))
    bomb.velocityX = inr
    bomb.addImage(bombImage);
    bomb.scale = 0.2
    bombGroup.add(bomb);
  }
}
