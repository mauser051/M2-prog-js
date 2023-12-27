class App
{
    runaplication()
    {
        console.log("hello world");
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        
        let random = Math.random();
        console.log(random);

        g.fillStyle = "Red";
        g.beginPath();
        g.moveTo(30, 10);
        g.lineTo(70, 20);
        g.lineTo(60, 40);
g.lineTo(20, 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "Black";
g.beginPath();
        g.moveTo(70, 20);
        g.lineTo(60, 40);
        g.lineTo(80, 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#1cc7df";
        g.beginPath();
        g.moveTo(20, 30);
        g.lineTo(60, 40);
        g.lineTo(60, 60);
        g.lineTo(20,50);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#ebecec";
        g.beginPath();
        g.moveTo(60, 40);
        g.lineTo(60, 60);
        g.lineTo(80, 50);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill()

        //this is window
        g.fillStyle = "#D7FDFF";
        g.beginPath();
        g.moveTo(65, 45);
        g.lineTo(65, 55);
        g.lineTo(75, 50);
        g.lineTo(75, 45);
        g.closePath();
        g.stroke();
        g.fill();

        
        //this is window
        if(random > 0.2&& random < 0.6){
        g.fillStyle = "#D7FDFF";
        }else if(random > 0.6){
        g.fillStyle = "#000000"
        }
        g.beginPath();
        g.moveTo(30, 50);
        g.lineTo(40, 55);
        g.lineTo(40, 50);
        g.lineTo(40, 40);
        g.closePath();
        g.stroke();
        g.fill();
    
// a.behinPath();
// a.moveTO()
        
    }
}

let app = new App();
app.runaplication();
