let colorlist = ['gold', 'black', 'turquoise', 'red'];
let img;
let fun = ['dance', 'play', 'drink', 'sleep', 'fun', 'work', 'school', 'love'];
let food = ['pizza', 'burgers', 'tacos', 'ramen', 'seafood', 'curry', 'wings'];
let drink = ['beer', 'boba', 'coffee', 'tea', 'liquor', 'soda', 'water'];
let rand;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(40);
  image(img, 500, 200);
  rand = (Math.floor(random() * 3));
}

function preload() {
  img = loadImage('./unnamed.png');
}

function draw() {

  fill(random(colorlist));
  let randomThought;
  let test = 'thinking!'

  if (frameCount % 20 == 0) {
    // let size = random(50, 50)

    if (rand === 0) 
      randomThought = random(fun)
    else if (rand === 1) {
      randomThought = random(food);
    }
    else {
      randomThought = random(drink);
    }

    // randomThought = random(thoughts);
    text(randomThought, mouseX, mouseY);
  }
  
}
