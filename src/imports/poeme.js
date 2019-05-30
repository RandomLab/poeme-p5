import data from './data';

const Poeme = (p) => {

    let phrase = "";
    let width, height;
    let index = 0;
    let texte = [];
    let font;
    let fontsize = 30;

    p.preload = () => {
        font = p.loadFont("http://localhost:1234/font.otf");
        console.log(font)
    } 

    p.setup = () => {

        width = p.windowWidth;
        height = p.windowHeight;

        p.createCanvas(width, height);
        p.frameRate(10);

    }

    p.draw = () => {
        p.background("white");
        p.readText(data.texte);
        index++;
    }

    p.readText = (phrase) => {
        if (index < phrase.length) {
            if (phrase[index] != '$') {
                texte.push(phrase[index]);
            } else {
                texte = [];
            }
            
        } else {
            texte = [];
        }
        // console.log(texte)
        p.fill(0).textSize(fontsize).textLeading(fontsize+3);
        p.textFont(font)
        p.text(texte.join(''), 20, 20, width, height);
    }

    
} 

export default Poeme;