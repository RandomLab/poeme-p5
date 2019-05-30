let phrase = "";

function preload() {
    raw_file = loadStrings('poeme.txt');
    phrase = raw_file.join('\n');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  console.log(typeof phrase)
}

function draw() {
  background(220);
  

  readText(phrase[0]);

  
  
}

function readText(phrase) {
    let index = 0;
    let texte = [];
    if (index < phrase.length) {
        texte.push(phrase[index]);
    }
    text(texte.join(''), 20, 20, width, height);
    index++;
}