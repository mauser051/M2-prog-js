class App
{
    runAplication()
    {
        console.log("hello world");
var canvas = document.getElementById('canvasId');
var ctx = canvas.getContext('2d');


// Draw the base of the house
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.fillStyle = "Black";
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

ctx.behinPath();
ctx.moveTO()

    }
}

let app = new App();
app.runAplication();
