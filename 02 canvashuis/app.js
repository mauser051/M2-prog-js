class App
{
    runAplication()
    {
        console.log("hello world");
        this.greeting = "Starting up";
this.gr.
this. appName = "demoapp"
this. versie = 0.1
this. versiedatum = "14:45 21/11/2023 (central eupean time)"
this. autheur = "leraar"
this. copyright = "leraar BV"
this. distributeur = "leraar soft"
this. darkmode = false

   let eerst = true
    let tweede = "try"
    let derde = 1

    this. eerst = true
    this. tweede = "try"
    this. derde = 1
    
    // Get a reference to the canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set the line width and color
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

// Draw the base of the house
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(250, 300);
ctx.lineTo(250, 150);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();

// Draw the roof of the house
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();

    }
}

let app = new App();
app.runAplication();

console.log(app.greeting)
console.log("appname: " + app.appName);
console.log("versie: " + app.versie);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright)
console.log("distributeur" + app.distributeur)
console.log("darkmode: " + app.darkmode)